from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.schemas import CyberNewsResponse
from app.models import CyberNews

router = APIRouter(prefix="/api/v1/news", tags=["news"])

@router.get("", response_model=List[CyberNewsResponse])
async def get_news(
    skip: int = 0,
    limit: int = 20,
    category: str = None,
    severity: str = None,
    db: Session = Depends(get_db)
):
    """Get cyber news and threat intelligence"""
    query = db.query(CyberNews).order_by(CyberNews.published_at.desc())
    
    if category:
        query = query.filter(CyberNews.category == category)
    
    if severity:
        query = query.filter(CyberNews.severity == severity)
    
    news = query.offset(skip).limit(limit).all()
    return news

@router.get("/featured")
async def get_featured_news(
    limit: int = 5,
    db: Session = Depends(get_db)
):
    """Get featured cyber news"""
    news = db.query(CyberNews).filter(
        CyberNews.is_featured == True
    ).order_by(CyberNews.published_at.desc()).limit(limit).all()
    
    return news

@router.get("/categories")
async def get_news_categories(db: Session = Depends(get_db)):
    """Get all news categories"""
    categories = db.query(CyberNews.category).distinct().all()
    return [{"category": cat[0]} for cat in categories]
