from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.api.news import router as news_router
from app.api.auth import router as auth_router



# Create database tables
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="CyberVerse API",
    description="Backend API for CyberVerse Cybersecurity Academy",
    version="1.0.0"
)


# CORS
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes
app.include_router(news_router)
app.include_router(auth_router)

@app.get("/")
async def root():
    return {
        "message": "CyberVerse API is running!",
        "version": "1.0.0"
    }


@app.get("/health")
async def health():
    return {
        "status": "ok"
    }