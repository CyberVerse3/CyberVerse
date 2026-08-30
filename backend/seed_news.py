from app.database import SessionLocal
from app.models import CyberNews

db = SessionLocal()

news_items = [
    CyberNews(
        title="Major Ransomware Attack Targets Organizations",
        summary="A new ransomware campaign is targeting organizations with sophisticated attack techniques.",
        content="Cybersecurity researchers have identified a new ransomware campaign targeting organizations.",
        category="Ransomware",
        severity="Critical",
        source="CyberVerse Security",
        image_url=None,
        is_featured=True
    ),

    CyberNews(
        title="New Phishing Campaign Uses Fake Login Pages",
        summary="Security researchers discovered a phishing campaign designed to steal user credentials.",
        content="The campaign uses convincing fake login pages to capture sensitive credentials.",
        category="Phishing",
        severity="High",
        source="CyberVerse Security",
        image_url=None,
        is_featured=True
    ),

    CyberNews(
        title="AI Is Changing Modern Cybersecurity",
        summary="Artificial intelligence is becoming an important tool for detecting cyber threats.",
        content="Security teams are increasingly using AI to detect suspicious activity and respond to threats.",
        category="AI Security",
        severity="Medium",
        source="CyberVerse Research",
        image_url=None,
        is_featured=False
    ),

    CyberNews(
        title="Critical Security Vulnerability Discovered",
        summary="Researchers have discovered a critical vulnerability that requires immediate attention.",
        content="Organizations are advised to update affected systems and review their security configurations.",
        category="Vulnerabilities",
        severity="Critical",
        source="CyberVerse Security",
        image_url=None,
        is_featured=True
    ),

    CyberNews(
        title="Cybersecurity Best Practices for Students",
        summary="Essential security practices every cybersecurity student should know.",
        content="Strong passwords, multi-factor authentication and regular updates can significantly improve security.",
        category="Security",
        severity="Low",
        source="CyberVerse Academy",
        image_url=None,
        is_featured=False
    )
]

db.add_all(news_items)
db.commit()

print("5 news articles added successfully!")

db.close()