from datetime import datetime, timedelta

from app.database import SessionLocal
from app.models import CyberNews


db = SessionLocal()

news_data = [
    CyberNews(
        title="Critical Ransomware Attack Targets Healthcare Organizations",
        summary="A new ransomware campaign is targeting healthcare organizations through vulnerable systems.",
        content="Security researchers have identified a ransomware campaign targeting healthcare organizations. Organizations are advised to patch exposed systems and strengthen backup procedures.",
        category="Ransomware",
        severity="Critical",
        source="CyberVerse Security Research",
        image_url=None,
        is_featured=True,
        published_at=datetime.utcnow() - timedelta(hours=2),
    ),
    CyberNews(
        title="New Phishing Campaign Uses Fake Microsoft Login Pages",
        summary="Attackers are using convincing login pages to steal user credentials.",
        content="A phishing campaign has been discovered using fake Microsoft login pages. Users should verify URLs before entering credentials and enable multi-factor authentication.",
        category="Phishing",
        severity="High",
        source="CyberVerse Security Research",
        image_url=None,
        is_featured=True,
        published_at=datetime.utcnow() - timedelta(hours=5),
    ),
    CyberNews(
        title="Security Researchers Discover New Web Application Vulnerability",
        summary="Researchers discovered a vulnerability affecting several web applications.",
        content="Researchers have reported a new vulnerability that could allow attackers to access sensitive application data. Developers are advised to update affected components.",
        category="Vulnerability",
        severity="High",
        source="CyberVerse Security Research",
        image_url=None,
        is_featured=False,
        published_at=datetime.utcnow() - timedelta(hours=8),
    ),
    CyberNews(
        title="Cybersecurity Awareness: Protect Your Accounts With MFA",
        summary="Multi-factor authentication can significantly reduce the risk of account compromise.",
        content="Security experts recommend enabling multi-factor authentication on important accounts. MFA provides an additional security layer even when passwords are compromised.",
        category="Security Awareness",
        severity="Medium",
        source="CyberVerse Academy",
        image_url=None,
        is_featured=True,
        published_at=datetime.utcnow() - timedelta(days=1),
    ),
    CyberNews(
        title="New Malware Campaign Spreads Through Malicious Email Attachments",
        summary="A malware campaign is spreading through carefully crafted email attachments.",
        content="Security analysts have identified malicious email attachments being used to distribute malware. Users should avoid opening unexpected attachments and keep security software updated.",
        category="Malware",
        severity="High",
        source="CyberVerse Security Research",
        image_url=None,
        is_featured=False,
        published_at=datetime.utcnow() - timedelta(days=2),
    ),
]

try:
    db.add_all(news_data)
    db.commit()
    print("✅ CyberVerse news data added successfully!")

except Exception as e:
    db.rollback()
    print("❌ Error:", e)

finally:
    db.close()