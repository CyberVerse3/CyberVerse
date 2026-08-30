
import { useState } from "react";
import {
  FaUser,
  FaPalette,
  FaGlobe,
  FaBell,
  FaShieldAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useSettings } from "../../context/SettingsContext.jsx";
import "./Settings.css";

function Settings() {
  const [activeSection, setActiveSection] = useState("account");
  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") !== "false"
  );

  const { theme, setTheme, language, setLanguage } = useSettings();

  const isArabic = language === "ar";

  const toggleNotifications = () => {
    const newValue = !notifications;
    setNotifications(newValue);
    localStorage.setItem("notifications", newValue);
  };

  const sections = [
    {
      id: "account",
      label: isArabic ? "الحساب" : "Account",
      icon: <FaUser />,
    },
    {
      id: "appearance",
      label: isArabic ? "المظهر" : "Appearance",
      icon: <FaPalette />,
    },
    {
      id: "language",
      label: isArabic ? "اللغة" : "Language",
      icon: <FaGlobe />,
    },
    {
      id: "notifications",
      label: isArabic ? "الإشعارات" : "Notifications",
      icon: <FaBell />,
    },
    {
      id: "security",
      label: isArabic ? "الأمان" : "Security",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <div className="settings-page">

      <div className="settings-header">
        <div>
          <h1>{isArabic ? "الإعدادات" : "Settings"}</h1>

          <p>
            {isArabic
              ? "إدارة حسابك وتفضيلاتك في CyberVerse."
              : "Manage your CyberVerse account and preferences."}
          </p>
        </div>
      </div>

      <div className="settings-container">

        {/* Settings Menu */}
        <div className="settings-menu">
          {sections.map((section) => (
            <button
              key={section.id}
              className={
                activeSection === section.id
                  ? "settings-menu-item active"
                  : "settings-menu-item"
              }
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="settings-content">

          {/* Account */}
          {activeSection === "account" && (
            <section className="settings-section">
              <h2>{isArabic ? "الحساب" : "Account"}</h2>

              <p className="section-description">
                {isArabic
                  ? "إدارة معلومات حسابك."
                  : "Manage your account information."}
              </p>

              <div className="setting-card">
                <label>
                  {isArabic ? "اسم المستخدم" : "Username"}
                </label>

                <input
                  type="text"
                  placeholder={
                    isArabic ? "اسم المستخدم" : "Your username"
                  }
                />
              </div>

              <div className="setting-card">
                <label>
                  {isArabic ? "البريد الإلكتروني" : "Email"}
                </label>

                <input
                  type="email"
                  placeholder={
                    isArabic
                      ? "البريد الإلكتروني"
                      : "Your email"
                  }
                />
              </div>

              <button className="save-btn">
                {isArabic ? "حفظ التغييرات" : "Save Changes"}
              </button>
            </section>
          )}

          {/* Appearance */}
          {activeSection === "appearance" && (
            <section className="settings-section">
              <h2>{isArabic ? "المظهر" : "Appearance"}</h2>

              <p className="section-description">
                {isArabic
                  ? "اختر مظهر CyberVerse."
                  : "Customize how CyberVerse looks."}
              </p>

              <div className="theme-options">

                <button
                  className={
                    theme === "dark"
                      ? "theme-card active"
                      : "theme-card"
                  }
                  onClick={() => setTheme("dark")}
                >
                  <FaMoon />

                  <span>
                    {isArabic ? "الوضع الليلي" : "Dark Mode"}
                  </span>
                </button>

                <button
                  className={
                    theme === "light"
                      ? "theme-card active"
                      : "theme-card"
                  }
                  onClick={() => setTheme("light")}
                >
                  <FaSun />

                  <span>
                    {isArabic ? "الوضع النهاري" : "Light Mode"}
                  </span>
                </button>

              </div>
            </section>
          )}

          {/* Language */}
          {activeSection === "language" && (
            <section className="settings-section">
              <h2>{isArabic ? "اللغة" : "Language"}</h2>

              <p className="section-description">
                {isArabic
                  ? "اختر اللغة المفضلة لديك."
                  : "Choose your preferred language."}
              </p>

              <div className="language-options">

                <button
                  className={
                    language === "en"
                      ? "language-card active"
                      : "language-card"
                  }
                  onClick={() => setLanguage("en")}
                >
                  🇬🇧
                  <span>English</span>
                </button>

                <button
                  className={
                    language === "ar"
                      ? "language-card active"
                      : "language-card"
                  }
                  onClick={() => setLanguage("ar")}
                >
                  🇮🇶
                  <span>العربية</span>
                </button>

              </div>
            </section>
          )}

          {/* Notifications */}
          {activeSection === "notifications" && (
            <section className="settings-section">
              <h2>
                {isArabic ? "الإشعارات" : "Notifications"}
              </h2>

              <p className="section-description">
                {isArabic
                  ? "تحكم بإشعارات CyberVerse."
                  : "Control your CyberVerse notifications."}
              </p>

              <div className="toggle-card">
                <div>
                  <h3>
                    {isArabic ? "الإشعارات" : "Notifications"}
                  </h3>

                  <p>
                    {isArabic
                      ? "استلام التحديثات والإشعارات المهمة."
                      : "Receive updates and important CyberVerse notifications."}
                  </p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={toggleNotifications}
                  />

                  <span className="slider"></span>
                </label>
              </div>
            </section>
          )}

          {/* Security */}
          {activeSection === "security" && (
            <section className="settings-section">
              <h2>{isArabic ? "الأمان" : "Security"}</h2>

              <p className="section-description">
                {isArabic
                  ? "إدارة أمان حسابك."
                  : "Manage your account security."}
              </p>

              <div className="setting-card">
                <label>
                  {isArabic
                    ? "كلمة المرور الحالية"
                    : "Current Password"}
                </label>

                <input
                  type="password"
                  placeholder={
                    isArabic
                      ? "كلمة المرور الحالية"
                      : "Current password"
                  }
                />
              </div>

              <div className="setting-card">
                <label>
                  {isArabic
                    ? "كلمة المرور الجديدة"
                    : "New Password"}
                </label>

                <input
                  type="password"
                  placeholder={
                    isArabic
                      ? "كلمة المرور الجديدة"
                      : "New password"
                  }
                />
              </div>

              <div className="setting-card">
                <label>
                  {isArabic
                    ? "تأكيد كلمة المرور"
                    : "Confirm New Password"}
                </label>

                <input
                  type="password"
                  placeholder={
                    isArabic
                      ? "تأكيد كلمة المرور"
                      : "Confirm new password"
                  }
                />
              </div>

              <button className="save-btn">
                {isArabic
                  ? "تغيير كلمة المرور"
                  : "Change Password"}
              </button>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}

export default Settings;

