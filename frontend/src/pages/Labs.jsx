
import Navbar from "../components/Navbar";
import "./Labs.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useSettings } from "../context/SettingsContext.jsx";

function Labs() {

  const [search, setSearch] = useState("");

  const { language, t } = useSettings();

  const isArabic = language === "ar";


  const labs = [
    {
      title: "🐧 Linux Lab",
      titleAr: "🐧 مختبر Linux",
      path: "/labs/linux/challenge/1",
      category: "Linux",
      xp: 1000,
      difficulty: "Easy",
      time: "20 min",
      completed:
        localStorage.getItem("linuxLabCompleted") === "true"
    },

    {
      title: "🌐 Web Security Lab",
      titleAr: "🌐 مختبر أمن الويب",
      path: "/labs/web-security",
      category: "Web",
      xp: 350,
      difficulty: "Medium",
      time: "15 min",
      completed:
        localStorage.getItem("webLabFinished") === "true"
    },

    {
      title: "🌍 Network Lab",
      titleAr: "🌍 مختبر الشبكات",
      path: "/labs/network",
      category: "Network",
      xp: 350,
      difficulty: "Easy",
      time: "15 min",
      completed:
        localStorage.getItem("networkLabCompleted") === "true"
    },

    {
      title: "🔐 Cryptography Lab",
      titleAr: "🔐 مختبر التشفير",
      path: "/labs/cryptography",
      category: "Crypto",
      xp: 400,
      difficulty: "Medium",
      time: "20 min",
      completed:
        localStorage.getItem("cryptoLabCompleted") === "true"
    },

    {
      title: "🛠 Reverse Engineering Lab",
      titleAr: "🛠 مختبر الهندسة العكسية",
      path: "/labs/reverse",
      category: "Reverse",
      xp: 400,
      difficulty: "Hard",
      time: "25 min",
      completed:
        localStorage.getItem("reverseLabCompleted") === "true"
    },

    {
      title: "🕵️ Digital Forensics Lab",
      titleAr: "🕵️ مختبر الأدلة الجنائية الرقمية",
      path: "/labs/forensics",
      category: "Forensics",
      xp: 400,
      difficulty: "Medium",
      time: "20 min",
      completed:
        localStorage.getItem("forensicsLabCompleted") === "true"
    },

    {
      title: "🔑 Password Security Lab",
      titleAr: "🔑 مختبر أمان كلمات المرور",
      path: "/labs/password",
      category: "Password",
      xp: 400,
      difficulty: "Easy",
      time: "15 min",
      completed:
        localStorage.getItem("passwordLabCompleted") === "true"
    }
  ];


  const filteredLabs = labs.filter((lab) => {

    const title =
      isArabic ? lab.titleAr : lab.title;

    return title
      .toLowerCase()
      .includes(search.toLowerCase());

  });


  const completedLabs =
    labs.filter((lab) => lab.completed).length;


  return (
    <>
      <Navbar />

      <div
        className="labs-page"
        dir={isArabic ? "rtl" : "ltr"}
      >

        {/* =========================
            Header
        ========================= */}

        <h1>
          🧪 {t("labs", "title")}
        </h1>

        <p>
          {t("labs", "description")}
        </p>


        {/* =========================
            Completed Labs
        ========================= */}

        <div
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            color: "#22c55e",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          ✅ {t("labs", "completedLabs")}:{" "}
          {completedLabs} / {labs.length}
        </div>


        {/* =========================
            Search
        ========================= */}

        <div className="search-box">

          <input
            type="text"
            placeholder={`🔍 ${t(
              "labs",
              "searchPlaceholder"
            )}`}
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        {/* =========================
            Labs Cards
        ========================= */}

        <div className="cards">

          {filteredLabs.map((lab, index) => {

            const title =
              isArabic
                ? lab.titleAr
                : lab.title;

            return (

              <Link
                key={index}
                to={lab.path}
                style={{
                  textDecoration: "none"
                }}
              >

                <div className="card">

                  <h2>
                    {title}
                  </h2>

                  <p>
                    📂 {t("labs", "category")}:{" "}
                    {lab.category}
                  </p>

                  <p>
                    ⭐ {lab.xp} XP
                  </p>


                  <p
                    className={
                      lab.completed
                        ? "status completed"
                        : "status progress"
                    }
                  >
                    {lab.completed
                      ? `🟢 ${t(
                          "labs",
                          "completed"
                        )}`
                      : `🟡 ${t(
                          "labs",
                          "inProgress"
                        )}`}
                  </p>


                  <p>
                    ⏱ {lab.time}
                  </p>


                  <p>

                    {t(
                      "labs",
                      "difficulty"
                    )}:

                    <span
                      className={`difficulty ${lab.difficulty.toLowerCase()}`}
                    >
                      {t(
                        "labs",
                        lab.difficulty.toLowerCase()
                      )}
                    </span>

                  </p>


                  <button>
                    🚀 {t(
                      "labs",
                      "startLab"
                    )}
                  </button>

                </div>

              </Link>

            );

          })}

        </div>

      </div>
    </>
  );
}

export default Labs;

