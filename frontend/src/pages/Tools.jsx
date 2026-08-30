
import Navbar from "../components/Navbar";
import "./Tools.css";

import { useSettings } from "../context/SettingsContext";

function Tools() {

  const { language } = useSettings();

  const isArabic = language === "ar";

  return (
    <>
      <Navbar />

      <div className="tools-page">

        <h1>
          {isArabic
            ? "أدوات CyberVerse الأمنية 🛠"
            : "CyberVerse Security Tools 🛠"}
        </h1>

        <p>
          {isArabic
            ? "استكشف أدوات الأمن السيبراني المستخدمة من قبل محترفي الأمن."
            : "Explore cybersecurity tools used by security professionals."}
        </p>


        <div className="cards">


          {/* Nmap */}

          <div className="card">

            <h2>
              Nmap
            </h2>

            <p>
              {isArabic
                ? "أداة لفحص الشبكات وتقييم مستوى الأمان."
                : "Network scanning and security assessment tool."}
            </p>

          </div>


          {/* Wireshark */}

          <div className="card">

            <h2>
              Wireshark
            </h2>

            <p>
              {isArabic
                ? "أداة لتحليل حركة الشبكة وحزم البيانات."
                : "Analyze network traffic and packets."}
            </p>

          </div>


          {/* Metasploit */}

          <div className="card">

            <h2>
              Metasploit
            </h2>

            <p>
              {isArabic
                ? "تعلّم أطر عمل اختبار الاختراق."
                : "Learn penetration testing frameworks."}
            </p>

          </div>


        </div>

      </div>
    </>
  );
}

export default Tools;

