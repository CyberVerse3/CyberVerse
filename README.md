# 🛡️ CyberVerse
## The All-in-One Cybersecurity Learning & Intelligence Platform

![CyberVerse](https://img.shields.io/badge/CyberVerse-v1.0.0-blue)
![Status](https://img.shields.io/badge/Status-Under_Development-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 نظرة عامة

**CyberVerse** منصة ويب متكاملة لتعليم الأمن السيبراني توفر:

✅ **Academy** - مسارات وكورسات شاملة للأمن السيبراني  
✅ **Security Tools** - أدوات أمنية مدمجة (20+ أداة)  
✅ **AI Cyber Mentor** - مساعد ذكي يشرح ويحلل  
✅ **Cyber Labs** - مختبرات عملية تفاعلية  
✅ **CTF Challenges** - تحديات أمنية متدرجة  
✅ **Cyber News** - أخبار وتهديدات أمنية فورية  
✅ **Gamification** - نقاط وشارات وترتيب عالمي  
✅ **Bilingual Support** - دعم كامل للعربية والإنجليزية 🇸🇦🇺🇸

---

## 🚀 الميزات الرئيسية

### 📚 Academy (التعليم)
- **12+ مسارات تعلم** متخصصة (Networking, Linux, Python, Web Security, etc)
- **150+ كورس** مع دروس فيديو ومقالات
- **نظام شهادات** رسمية مع كود تحقق
- **اختبارات تفاعلية** وامتحانات شاملة
- **متابعة تقدم شاملة** مع إحصائيات مفصلة

### 🛠️ Security Tools
```
🔗 Network Tools: Port Scanner, IP Info, DNS Lookup, SSL Checker
🔐 Crypto Tools: Hash Generator, Base64 Encoder, URL Decoder
📊 Analysis Tools: Password Strength, Link Scanner, Email Analyzer
📱 Mobile Tools: APK Analyzer, QR Scanner
```

### 🤖 AI Cyber Mentor
- شرح المفاهيم الأمنية
- تحليل الأكواد والملفات
- اقتراح خطط تعلم مخصصة
- حل الأسئلة والتوضيحات
- مساعدة في CTF Challenges

### 📰 Cyber News & Threat Intelligence
- أخبار الأمن السيبراني الفورية
- تنبيهات عن الثغرات الجديدة (CVEs)
- تقارير الذكاء الأمني
- Malware Alerts
- Weekly/Monthly Reports

### 🎮 Gamification System
- XP Points و Levels (1-100+)
- 20+ Badges و Achievements
- Daily/Weekly/Monthly Challenges
- Global Leaderboard
- Learning Streak Tracker

---

## 💻 البنية التقنية

### Frontend
```
├── Next.js 14+ (React)
├── TypeScript
├── Tailwind CSS
├── next-intl (العربية/الإنجليزية)
├── Shadcn/ui Components
├── TanStack Query (React Query)
└── Zustand (State Management)
```

### Backend
```
├── FastAPI (Python 3.11+)
├── SQLAlchemy ORM
├── PostgreSQL Database
├── Redis Cache
├── JWT Authentication
└── OAuth2 Support
```

### Infrastructure
```
├── Docker & Docker Compose
├── Nginx Web Server
├── GitHub Actions (CI/CD)
├── PostgreSQL Database
└── Redis Cache
```

---

## 📁 هيكل المشروع

```
CyberVerse/
├── frontend/                 # Next.js Application
│   ├── app/                 # App Router
│   ├── components/          # Reusable Components
│   ├── lib/                 # Utilities & Helpers
│   ├── public/              # Static Files
│   ├── styles/              # Global Styles
│   ├── locales/             # i18n Translations
│   └── package.json
│
├── backend/                  # FastAPI Application
│   ├── app/
│   │   ├── api/            # API Routes
│   │   ├── models/         # Database Models
│   │   ├── schemas/        # Pydantic Schemas
│   │   ├── services/       # Business Logic
│   │   └── main.py         # FastAPI App
│   ├── migrations/          # Database Migrations
│   ├── tests/              # Unit Tests
│   ├── requirements.txt
│   └── .env.example
│
├── docker-compose.yml       # Docker Orchestration
├── nginx.conf              # Nginx Configuration
├── .github/
│   └── workflows/          # GitHub Actions
│
├── docs/                   # Documentation
├── PROJECT_FOUNDATION.md   # Project Blueprint
└── README.md              # This File
```

---

## 🔧 المتطلبات

### تطوير محلي
```
Node.js 18+ & npm/yarn
Python 3.11+
PostgreSQL 15+
Redis 7+
Docker & Docker Compose (اختياري)
```

### السحابة
```
AWS / Google Cloud / DigitalOcean
PostgreSQL Managed Database
Redis Managed Cache
S3 / R2 for File Storage
```

---

## 🚀 البدء السريع

### 1️⃣ استنساخ المستودع
```bash
git clone https://github.com/assaldurgham-gif/CyberVerse.git
cd CyberVerse
```

### 2️⃣ إعداد Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
# يفتح على http://localhost:3000
```

### 3️⃣ إعداد Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python -m uvicorn app.main:app --reload
# API على http://localhost:8000
# Docs على http://localhost:8000/docs
```

### 4️⃣ إعداد قاعدة البيانات
```bash
# قم بإنشاء قاعدة بيانات PostgreSQL
# ثم قم بتشغيل الترحيلات
cd backend
alembic upgrade head
```

### 5️⃣ استخدام Docker (اختياري)
```bash
docker-compose up -d
# يبدأ جميع الخدمات تلقائياً
```

---

## 🌐 الروابط المهمة

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Database**: PostgreSQL on localhost:5432
- **Redis Cache**: localhost:6379

---

## 📝 المتغيرات البيئية (.env)

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=CyberVerse
NEXT_PUBLIC_DEFAULT_LANGUAGE=en
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/cyberverse
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-secret-key-here
DEBUG=True
ENVIRONMENT=development
```

---

## 🎓 المسارات التعليمية (Phase 1)

```
1. 🔰 Cybersecurity Fundamentals
2. 🐧 Linux Administration & Security
3. 🌐 Networking & Protocols
4. 🐍 Python for Security
5. 🔐 Web Security & OWASP
6. 🟦 Active Directory Security
7. ☁️ Cloud Security (AWS/Azure/GCP)
8. 🔬 Malware Analysis
9. 🔎 Digital Forensics
10. 🔄 Reverse Engineering
11. 👁️ SOC (Security Operations)
12. 🎯 Penetration Testing
```

---

## 💳 نماذج الاشتراك

| الميزة | Free | Premium | Enterprise |
|-------|------|---------|-----------|
| الدروس | 20/month | ∞ | ∞ |
| المختبرات | 5 | ∞ | ∞ |
| أدوات الأمن | محدود | ∞ | ∞ |
| AI Mentor | 50/day | ∞ | ∞ |
| الشهادات | ❌ | ✅ | ✅ |
| الإعلانات | ✅ | ❌ | ❌ |
| السعر | مجاني | $9.99/mo | Custom |

---

## 🔐 الأمان

- ✅ HTTPS فقط
- ✅ Argon2 Password Hashing
- ✅ JWT + Refresh Tokens
- ✅ Two-Factor Authentication (2FA)
- ✅ Rate Limiting & DDoS Protection
- ✅ CSRF & XSS Prevention
- ✅ SQL Injection Prevention
- ✅ Audit Logging
- ✅ Daily Backups
- ✅ Encryption at Rest & Transit

---

## 🗂️ الملفات الرئيسية

| الملف | الوصف |
|------|-------|
| `PROJECT_FOUNDATION.md` | الوثيقة التأسيسية الشاملة |
| `docker-compose.yml` | تكوين Docker المتكامل |
| `nginx.conf` | إعدادات Nginx الأمنة |
| `.github/workflows/` | CI/CD الآلي |
| `frontend/package.json` | اعتماديات الـ Frontend |
| `backend/requirements.txt` | اعتماديات الـ Backend |

---

## 📚 التوثيق

- [المستند التأسيسي](./PROJECT_FOUNDATION.md) - خطة المشروع الكاملة
- [دليل الإعداد](./docs/SETUP.md) - خطوات الإعداد التفصيلية
- [API Documentation](http://localhost:8000/docs) - توثيق API التفاعلية
- [مساهمة في المشروع](./docs/CONTRIBUTING.md) - كيفية المساهمة

---

## 🤝 المساهمة

نرحب بمساهماتك! برجاء:

1. Fork المستودع
2. إنشاء branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى Branch (`git push origin feature/amazing-feature`)
5. فتح Pull Request

---

## 📋 Roadmap

### المرحلة 1 (الحالية)
- ✅ Academy (التعليم)
- ✅ Security Tools
- ✅ AI Cyber Mentor
- ✅ Cyber News
- ✅ User Dashboard
- ✅ Basic Labs & CTF
- ✅ Gamification

### المرحلة 2 (Q3 2026)
- 📱 Android App
- 🍎 iOS App
- 💬 Community Hub
- 👥 Live Classes

### المرحلة 3 (Q4 2026)
- 🖥️ Desktop App
- 💼 Career Hub
- 🏆 Job Board
- 👨‍🏫 Mentorship

---

## 📞 التواصل

- 📧 Email: support@cyberverse.io
- 💬 Discord: [Join Community]
- 🐦 Twitter: [@CyberVerse]
- 📱 Instagram: [@CyberVerse]

---

## 📄 الرخصة

هذا المشروع مرخص تحت [MIT License](./LICENSE)

---

## 👥 الفريق

- **المؤسس**: Assal Durgham
- **المطورين**: Community Contributors
- **المصممين**: UI/UX Team

---

## ⭐ إذا أعجبك المشروع

لا تنسى إضافة نجمة ⭐ على GitHub!

---

**آخر تحديث**: July 20, 2026  
**الإصدار**: 1.0.0-alpha  
**الحالة**: 🔨 Under Development

**Made with ❤️ for the Cybersecurity Community**
