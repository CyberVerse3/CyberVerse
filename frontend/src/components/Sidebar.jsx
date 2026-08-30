
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaFlask,
  FaFlag,
  FaUser,
  FaCertificate,
  FaCog,
  FaSignOutAlt,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

import { useSettings } from "../context/SettingsContext.jsx";

import "./Sidebar.css";

function Sidebar() {
  const { language } = useSettings();

  const isArabic = language === "ar";

  const xp =
    Number(localStorage.getItem("xp")) || 0;

  let level = "Beginner";

  if (xp >= 500) level = "Intermediate";
  if (xp >= 1000) level = "Advanced";
  if (xp >= 2000) level = "Cyber Expert";

  const text = {
    dashboard: isArabic ? "لوحة التحكم" : "Dashboard",
    courses: isArabic ? "الدورات" : "Courses",
    labs: isArabic ? "المختبرات" : "Labs",
    ctf: isArabic ? "ساحة CTF" : "CTF Arena",
    profile: isArabic ? "الملف الشخصي" : "Profile",
    certificates: isArabic ? "الشهادات" : "Certificates",
    settings: isArabic ? "الإعدادات" : "Settings",
    logout: isArabic ? "تسجيل الخروج" : "Logout",
    learn: isArabic
      ? "تعلّم • اختبر • دافع"
      : "Learn • Hack • Defend",
    xp: "XP",
  };

  return (
    <aside
      className="sidebar"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div>

        <div className="logo">

          <FaShieldAlt className="logo-icon" />

          <div>
            <h2>CyberVerse</h2>

            <span>{text.learn}</span>
          </div>

        </div>

        <nav>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <FaHome />
            {text.dashboard}
          </NavLink>

        

          <NavLink
            to="/labs"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <FaFlask />
            {text.labs}
          </NavLink>

          <NavLink
            to="/ctf"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <FaFlag />
            {text.ctf}
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <FaUser />
            {text.profile}
          </NavLink>

          

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <FaCog />
            {text.settings}
          </NavLink>

        </nav>

      </div>

      <div>

        <div className="xp-card">

          <h3>
            <FaStar />
            {text.xp}
          </h3>

          <h2>{xp}</h2>

          <p>{level}</p>

        </div>

        <button className="logout-btn">

          <FaSignOutAlt />
          {text.logout}

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;

