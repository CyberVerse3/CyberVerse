
import { Link, useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext.jsx";

import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    const { language } = useSettings();

    const isArabic = language === "ar";

    const isLoggedIn =
        localStorage.getItem("access_token");

    const text = {
        home: isArabic ? "الرئيسية" : "Home",
        academy: isArabic ? "الأكاديمية" : "Academy",
        labs: isArabic ? "المختبرات" : "Labs",
        ctf: isArabic ? "ساحة CTF" : "CTF",
        leaderboard: isArabic ? "المتصدرين" : "Leaderboard",
        tools: isArabic ? "الأدوات" : "Tools",
        news: isArabic ? "الأخبار" : "News",
        terminal: isArabic ? "الطرفية" : "Terminal",
        linuxGuide: isArabic
            ? "🐧 دليل Linux"
            : "🐧 Linux Guide",
        networkingGuide: isArabic
            ? "🌐 دليل الشبكات"
            : "🌐 Networking Guide",
        cyberMission: isArabic
            ? "🎮 المهمة السيبرانية"
            : "🎮 Cyber Mission",
        dashboard: isArabic
            ? "لوحة التحكم"
            : "Dashboard",
        login: isArabic ? "تسجيل الدخول" : "Login",
        register: isArabic ? "إنشاء حساب" : "Register",
        logout: isArabic ? "تسجيل الخروج" : "Logout",
    };

    function logout() {

        // Remove JWT token
        localStorage.removeItem("access_token");

        // Remove login state
        localStorage.removeItem("isLoggedIn");

        // Remove saved user
        localStorage.removeItem("cyberverseUser");

        // Go to home
        navigate("/");
    }

    return (
        <nav dir={isArabic ? "rtl" : "ltr"}>

            <div className="logo">
                CyberVerse
            </div>

            <ul className="nav-links">

                <li>
                    <Link to="/">
                        {text.home}
                    </Link>
                </li>

                <li>
                    <Link to="/academy">
                        {text.academy}
                    </Link>
                </li>

                <li>
                    <Link to="/labs">
                        {text.labs}
                    </Link>
                </li>

                <li>
                    <Link to="/ctf">
                        {text.ctf}
                    </Link>
                </li>

                <li>
                    <Link to="/ctf/leaderboard">
                        {text.leaderboard}
                    </Link>
                </li>

                <li>
                    <Link to="/tools">
                        {text.tools}
                    </Link>
                </li>

                <li>
                    <Link to="/news">
                        {text.news}
                    </Link>
                </li>

                <li>
                    <Link to="/terminal">
                        {text.terminal}
                    </Link>
                </li>

                <li>
                    <Link to="/linux-guide">
                        {text.linuxGuide}
                    </Link>
                </li>

                <li>
                    <Link to="/networking-guide">
                        {text.networkingGuide}
                    </Link>
                </li>

                <li>
                    <Link to="/cyber-mission">
                        {text.cyberMission}
                    </Link>
                </li>

            </ul>

            <div className="auth">

                {isLoggedIn ? (
                    <>
                        <button
                            className="login"
                            onClick={() =>
                                navigate("/dashboard")
                            }
                        >
                            {text.dashboard}
                        </button>

                        <button
                            className="register"
                            onClick={logout}
                        >
                            {text.logout}
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="login">
                                {text.login}
                            </button>
                        </Link>

                        <Link to="/register">
                            <button className="register">
                                {text.register}
                            </button>
                        </Link>
                    </>
                )}

            </div>

        </nav>
    );
}

export default Navbar;

