from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from sqlalchemy.orm import Session
from passlib.context import CryptContext

from jose import jwt, JWTError
from datetime import datetime, timedelta

from app.database import get_db
from app.models import User
from app.schemas import UserRegister, UserLogin, UserResponse


router = APIRouter(
    prefix="/api/v1/auth",
    tags=["authentication"]
)


# =========================
# Password Hashing
# =========================

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


# =========================
# JWT Settings
# =========================

SECRET_KEY = "cyberverse-super-secret-key-change-later"

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60


# =========================
# OAuth2
# =========================

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/api/v1/auth/token"
)


# =========================
# Create JWT Token
# =========================

def create_access_token(data: dict):

    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({
        "exp": expire
    })

    token = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return token


# =========================
# Get Current User
# =========================

async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):

    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={
            "WWW-Authenticate": "Bearer"
        }
    )

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        user_id = payload.get("sub")

        if user_id is None:
            raise credentials_exception

    except JWTError:

        raise credentials_exception

    try:

        user_id = int(user_id)

    except (TypeError, ValueError):

        raise credentials_exception

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if user is None:
        raise credentials_exception

    return user


# =========================
# Register
# =========================

@router.post(
    "/register",
    response_model=UserResponse
)
async def register(
    user: UserRegister,
    db: Session = Depends(get_db)
):

    # Check username

    existing_username = db.query(User).filter(
        User.username == user.username
    ).first()

    if existing_username:

        raise HTTPException(
            status_code=400,
            detail="Username already registered"
        )


    # Check email

    existing_email = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_email:

        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )


    # Hash password

    hashed_password = pwd_context.hash(
        user.password
    )


    # Create user

    new_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hashed_password
    )


    db.add(new_user)

    db.commit()

    db.refresh(new_user)


    return new_user


# =========================
# Login - JSON
# =========================

@router.post("/login")
async def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()


    if not existing_user:

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )


    if not pwd_context.verify(
        user.password,
        existing_user.hashed_password
    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )


    access_token = create_access_token({

        "sub": str(existing_user.id),

        "email": existing_user.email

    })


    return {

        "access_token": access_token,

        "token_type": "bearer",

        "user": {

            "id": existing_user.id,

            "username": existing_user.username,

            "email": existing_user.email

        }

    }


# =========================
# OAuth2 Token - Swagger
# =========================

@router.post("/token")
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):

    # Swagger sends the email inside "username"

    existing_user = db.query(User).filter(
        User.email == form_data.username
    ).first()


    if not existing_user:

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
            headers={
                "WWW-Authenticate": "Bearer"
            }
        )


    if not pwd_context.verify(
        form_data.password,
        existing_user.hashed_password
    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
            headers={
                "WWW-Authenticate": "Bearer"
            }
        )


    access_token = create_access_token({

        "sub": str(existing_user.id),

        "email": existing_user.email

    })


    return {

        "access_token": access_token,

        "token_type": "bearer"

    }


# =========================
# Current User
# =========================

@router.get(
    "/me",
    response_model=UserResponse
)
async def get_me(
    current_user: User = Depends(get_current_user)
):

    return current_user