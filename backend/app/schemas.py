from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr


class CyberNewsResponse(BaseModel):
    id: int
    title: str
    summary: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    severity: Optional[str] = None
    source: Optional[str] = None
    image_url: Optional[str] = None
    is_featured: bool = False
    published_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)


class UserRegister(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str



class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr

    model_config = ConfigDict(from_attributes=True)