
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

import { getXP, getLevel } from "../utils/xpSystem";
import { useSettings } from "../context/SettingsContext.jsx";

function Dashboard() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const { language, t } = useSettings();

  const isArabic = language === "ar";

  // =========================
  // Get logged-in user
  // =========================

  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem("cyberverseUser")
    );

    setUser(savedUser);
  }, []);

  // =========================
  // Logout
  // =========================

  function handleLogout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("cyberverseUser");

    navigate("/login");
  }

  // =========================
  // XP
  // =========================

  const xp = getXP();
  const level = getLevel();

  const progress = (xp % 500) / 5;

  // =========================
  // Labs
  // =========================

  const linux =
    localStorage.getItem("linuxLabCompleted") === "true";

  const web =
    localStorage.getItem("webLabFinished") === "true";

  const network =
    localStorage.getItem("networkLabCompleted") === "true";

  const completedLabs =
    [linux, web, network].filter(Boolean).length;

  const totalLabs = 7;

  const labProgress = Math.round(
    (completedLabs / totalLabs) * 100
  );

  // =========================
  // Badges
  // =========================

  const badges = [];

  if (localStorage.getItem("linuxBadge")) {
    badges.push(
      localStorage.getItem("linuxBadge")
    );
  }

  if (localStorage.getItem("webBadge")) {
    badges.push(
      localStorage.getItem("webBadge")
    );
  }

  if (localStorage.getItem("xssBadge")) {
    badges.push(
      localStorage.getItem("xssBadge")
    );
  }

  if (localStorage.getItem("networkBadge")) {
    badges.push(
      localStorage.getItem("networkBadge")
    );
  }

  // =========================
  // Greeting
  // =========================

  const hour = new Date().getHours();

  let greeting = t(
    "dashboard",
    "goodEvening"
  );

  if (hour < 12) {
    greeting = t(
      "dashboard",
      "goodMorning"
    );
  }

  if (hour >= 12 && hour < 18) {
    greeting = t(
      "dashboard",
      "goodAfternoon"
    );
  }

  // =========================
  // UI
  // =========================

  return (
    <>
      <Sidebar />

      <div
        className="page-content"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="dashboard">

          {/* =========================
              Logout
          ========================= */}

          <div className="logout-container">
            <button
              className="logout-button"
              onClick={handleLogout}
            >
              🔓 {t("common", "logout")}
            </button>
          </div>

          {/* =========================
              Dashboard Hero
          ========================= */}

          <div className="dashboard-hero">

            <div className="hero-left">

              <h1>
                👋 {t("dashboard", "welcomeBack")}{" "}
                {user?.username ||
                  t("dashboard", "student")}
              </h1>

              <p>
                {greeting}
              </p>

              <p>
                {t(
                  "dashboard",
                  "continueLearning"
                )}
              </p>

              <div className="goal-box">

                <h3>
                  🎯{" "}
                  {t(
                    "dashboard",
                    "labsProgress"
                  )}
                </h3>

                <div className="goal-progress">

                  <div
                    className="goal-fill"
                    style={{
                      width: `${labProgress}%`
                    }}
                  />

                </div>

                <span>
                  {labProgress}%{" "}
                  {t(
                    "dashboard",
                    "completed"
                  )}
                </span>

              </div>

            </div>

            <div className="hero-right">

              <div className="hero-stat">

                <h2>
                  ⭐ {xp}
                </h2>

                <p>
                  {t(
                    "dashboard",
                    "totalXP"
                  )}
                </p>

              </div>

              <div className="hero-stat">

                <h2>
                  {t(
                    "dashboard",
                    "level"
                  )}{" "}
                  {level}
                </h2>

                <p>
                  {t(
                    "dashboard",
                    "currentLevel"
                  )}
                </p>

              </div>

            </div>

          </div>

          {/* =========================
              Statistics Cards
          ========================= */}

          <div className="cards">

            <div className="card blue">

              <h2>
                ⭐{" "}
                {t(
                  "dashboard",
                  "totalXP"
                )}
              </h2>

              <h1>
                {xp}
              </h1>

              <span>
                {t(
                  "dashboard",
                  "experiencePoints"
                )}
              </span>

            </div>

            <div className="card purple">

              <h2>
                🏆{" "}
                {t(
                  "dashboard",
                  "level"
                )}
              </h2>

              <h1>
                {level}
              </h1>

              <span>
                {t(
                  "dashboard",
                  "currentRank"
                )}
              </span>

            </div>

            <div className="card green">

              <h2>
                🧪{" "}
                {t(
                  "dashboard",
                  "labs"
                )}
              </h2>

              <h1>
                {completedLabs}/7
              </h1>

              <span>
                {t(
                  "dashboard",
                  "completed"
                )}
              </span>

            </div>

            <div className="card orange">

              <h2>
                🏅{" "}
                {t(
                  "dashboard",
                  "badges"
                )}
              </h2>

              <h1>
                {badges.length}
              </h1>

              <span>
                {t(
                  "dashboard",
                  "achievements"
                )}
              </span>

            </div>

          </div>

          {/* =========================
              Level Progress
          ========================= */}

          <div className="progress-section">

            <h2>
              📈{" "}
              {t(
                "dashboard",
                "levelProgress"
              )}
            </h2>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`
                }}
              />

            </div>

            <p>
              {Math.floor(progress)}%{" "}
              {t(
                "dashboard",
                "toNextLevel"
              )}
            </p>

          </div>

          {/* =========================
              Activity + Badges
          ========================= */}

          <div className="dashboard-grid">

            <div className="activity">

              <h2>
                📜{" "}
                {t(
                  "dashboard",
                  "recentActivity"
                )}
              </h2>

              <p>
                {linux
                  ? `✅ ${t(
                      "dashboard",
                      "linuxLab"
                    )} ${t(
                      "dashboard",
                      "completedStatus"
                    )}`
                  : `🔒 ${t(
                      "dashboard",
                      "linuxLab"
                    )}`}
              </p>

              <p>
                {web
                  ? `✅ ${t(
                      "dashboard",
                      "webSecurityLab"
                    )} ${t(
                      "dashboard",
                      "completedStatus"
                    )}`
                  : `🔒 ${t(
                      "dashboard",
                      "webSecurityLab"
                    )}`}
              </p>

              <p>
                {network
                  ? `✅ ${t(
                      "dashboard",
                      "networkLab"
                    )} ${t(
                      "dashboard",
                      "completedStatus"
                    )}`
                  : `🔒 ${t(
                      "dashboard",
                      "networkLab"
                    )}`}
              </p>

            </div>

            <div className="badges">

              <h2>
                🏅{" "}
                {t(
                  "dashboard",
                  "badges"
                )}
              </h2>

              {badges.length === 0 ? (

                <p>
                  {t(
                    "dashboard",
                    "noBadges"
                  )}
                </p>

              ) : (

                badges.map(
                  (badge, index) => (
                    <div
                      key={index}
                      className="badge"
                    >
                      🏅 {badge}
                    </div>
                  )
                )

              )}

            </div>

          </div>

          {/* =========================
              Quick Actions
          ========================= */}

          <div className="quick-actions">

            <Link
              to="/academy"
              style={{
                textDecoration: "none"
              }}
            >
              <div className="quick-card">

                <span>
                  📚
                </span>

                <h3>
                  {t(
                    "dashboard",
                    "academy"
                  )}
                </h3>

                <button>
                  {t(
                    "dashboard",
                    "open"
                  )}
                </button>

              </div>
            </Link>

            <Link
              to="/labs"
              style={{
                textDecoration: "none"
              }}
            >
              <div className="quick-card">

                <span>
                  🧪
                </span>

                <h3>
                  {t(
                    "dashboard",
                    "labs"
                  )}
                </h3>

                <button>
                  {t(
                    "dashboard",
                    "open"
                  )}
                </button>

              </div>
            </Link>

            <Link
              to="/profile"
              style={{
                textDecoration: "none"
              }}
            >
              <div className="quick-card">

                <span>
                  👤
                </span>

                <h3>
                  {t(
                    "dashboard",
                    "profile"
                  )}
                </h3>

                <button>
                  {t(
                    "dashboard",
                    "open"
                  )}
                </button>

              </div>
            </Link>

          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;

