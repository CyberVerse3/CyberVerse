
import Navbar from "../components/Navbar";
import "../styles/Academy.css";
import { Link } from "react-router-dom";
import { useSettings } from "../context/SettingsContext.jsx";

function Academy() {

  const { language, t } = useSettings();

  const isArabic = language === "ar";

  const courses = [
    {
      title: "Linux Fundamentals",
      icon: "🐧",
      lessons: 20,
      difficulty: "Beginner",
      xp: 1200,
      progress: 0,
      path: "/academy/linux"
    },

    {
      title: "Networking",
      icon: "🌐",
      lessons: 18,
      difficulty: "Beginner",
      xp: 1000,
      progress: 0,
      path: "/academy/networking"
    },

    {
      title: "Web Security",
      icon: "🕷️",
      lessons: 22,
      difficulty: "Intermediate",
      xp: 1500,
      progress: 0,
      path: "/academy/web"
    },

    {
      title: "Python for Security",
      icon: "🐍",
      lessons: 25,
      difficulty: "Intermediate",
      xp: 1800,
      progress: 0,
      path: "/academy/python"
    },

    {
      title: "Cryptography",
      icon: "🔐",
      lessons: 18,
      difficulty: "Intermediate",
      xp: 1200,
      progress: 0,
      path: "/academy/crypto"
    },

    {
      title: "Reverse Engineering",
      icon: "⚙️",
      lessons: 20,
      difficulty: "Advanced",
      xp: 2000,
      progress: 0,
      path: "/academy/reverse"
    },

    {
      title: "Digital Forensics",
      icon: "🕵️",
      lessons: 18,
      difficulty: "Advanced",
      xp: 1800,
      progress: 0,
      path: "/academy/forensics"
    }
  ];

  const academyUnlocked =
    localStorage.getItem("linuxCertificate") &&
    localStorage.getItem("networkingCertificate") &&
    localStorage.getItem("webCertificate") &&
    localStorage.getItem("pythonCertificate") &&
    localStorage.getItem("cryptographyCertificate") &&
    localStorage.getItem("reverseCertificate") &&
    localStorage.getItem("forensicsCertificate");

  return (
    <>
      <Navbar />

      <div
        className="academy"
        dir={isArabic ? "rtl" : "ltr"}
      >

        {/* =========================
            Hero
        ========================= */}

        <div className="academy-hero">

          <h1>
            🎓 {t("academy", "title")}
          </h1>

          <p>
            {t("academy", "description")}
          </p>

          <div className="academy-stats">

            <div className="academy-stat">
              <h2>7</h2>
              <span>
                {t("academy", "courses")}
              </span>
            </div>

            <div className="academy-stat">
              <h2>143</h2>
              <span>
                {t("academy", "lessons")}
              </span>
            </div>

            <div className="academy-stat">
              <h2>9100+</h2>
              <span>
                {t("academy", "totalXP")}
              </span>
            </div>

            <div className="academy-stat">
              <h2>7</h2>
              <span>
                {t("academy", "certificates")}
              </span>
            </div>

          </div>

        </div>


        {/* =========================
            Learning Paths
        ========================= */}

        <h2 className="section-title">
          🛣 {t("academy", "learningPaths")}
        </h2>

        <div className="path-grid">

          <div className="path-card beginner">

            <h2>
              🟢 {t("academy", "beginner")}
            </h2>

            <p>
              {t("academy", "beginnerPath")}
            </p>

          </div>


          <div className="path-card intermediate">

            <h2>
              🟡 {t("academy", "intermediate")}
            </h2>

            <p>
              {t("academy", "intermediatePath")}
            </p>

          </div>


          <div className="path-card advanced">

            <h2>
              🔴 {t("academy", "advanced")}
            </h2>

            <p>
              {t("academy", "advancedPath")}
            </p>

          </div>

        </div>


        {/* =========================
            Available Courses
        ========================= */}

        <h2 className="section-title">
          📚 {t("academy", "availableCourses")}
        </h2>


        <div className="course-grid">

          {courses.map((course, index) => (

            <Link
              key={index}
              to={course.path}
              style={{
                textDecoration: "none"
              }}
            >

              <div className="course-card">

                <h1>
                  {course.icon}
                </h1>

                <h2>
                  {course.title}
                </h2>

                <p>
                  📖 {course.lessons}{" "}
                  {t("academy", "lessons")}
                </p>

                <p>
                  ⭐ {course.xp} XP
                </p>

                <p>
                  🎯{" "}
                  {t(
                    "academy",
                    course.difficulty.toLowerCase()
                  )}
                </p>

                <div className="academy-progress">

                  <div
                    className="academy-progress-fill"
                    style={{
                      width: `${course.progress}%`
                    }}
                  />

                </div>

                <button>
                  {t("academy", "startLearning")} 🚀
                </button>

              </div>

            </Link>

          ))}

        </div>


        {/* =========================
            Academy Final Exam
        ========================= */}

        <div
          style={{
            marginTop: "60px",
            textAlign: "center"
          }}
        >

          <h2>
            🎓 {t("academy", "finalExam")}
          </h2>

          <p>
            {t("academy", "finalExamDescription")}
          </p>


          {academyUnlocked ? (

            <Link
              to="/academy/final"
              style={{
                textDecoration: "none"
              }}
            >

              <button
                style={{
                  padding: "15px 40px",
                  fontSize: "18px",
                  marginTop: "20px"
                }}
              >
                🚀 {t("academy", "startFinalExam")}
              </button>

            </Link>

          ) : (

            <button
              disabled
              style={{
                padding: "15px 40px",
                fontSize: "18px",
                marginTop: "20px",
                opacity: 0.6,
                cursor: "not-allowed"
              }}
            >
              🔒 {t("academy", "completeCoursesFirst")}
            </button>

          )}

        </div>

      </div>
    </>
  );
}

export default Academy;

