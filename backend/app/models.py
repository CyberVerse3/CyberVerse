from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from datetime import datetime

from app.database import Base


class CyberNews(Base):
    __tablename__ = "cyber_news"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)
    summary = Column(Text, nullable=True)
    content = Column(Text, nullable=True)

    category = Column(String(100), nullable=True)
    severity = Column(String(50), nullable=True)

    source = Column(String(255), nullable=True)
    image_url = Column(String(500), nullable=True)

    is_featured = Column(Boolean, default=False)

    published_at = Column(
        DateTime,
        default=datetime.utcnow
    )


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(String(100), unique=True, nullable=False, index=True)

    email = Column(String(255), unique=True, nullable=False, index=True)

    hashed_password = Column(String(255), nullable=False)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )