
import Navbar from "../components/Navbar";
import "./Home.css";

import { useSettings } from "../context/SettingsContext";

function Home() {

  const { language } = useSettings();

  const isArabic = language === "ar";

  return (
    <>
      <Navbar />

      <div className="home">

        <h1>
          {isArabic ? (
            <>
              مرحباً بك في <span>CyberVerse</span>
            </>
          ) : (
            <>
              Welcome to <span>CyberVerse</span>
            </>
          )}
        </h1>

        <p>
          {isArabic
            ? "تعلّم الأمن السيبراني، مارس الاختراق الأخلاقي، وطوّر مهاراتك من خلال مختبرات عملية حقيقية."
            : "Learn Cybersecurity, Practice Ethical Hacking, and Build Your Skills Through Real Labs."
          }
        </p>

      </div>


      {/* =========================
          LEARNING PATHS
      ========================= */}

      <section className="learning">

        <h2>
          {isArabic ? "المسارات التعليمية" : "Learning Paths"}
        </h2>

        <div className="cards">

          <div className="card">

            <h3>
              {isArabic
                ? "أساسيات الأمن السيبراني"
                : "Cybersecurity Basics"}
            </h3>

            <p>
              {isArabic
                ? "تعلّم أساسيات الأمن والتهديدات وطرق الحماية."
                : "Learn security fundamentals, threats, and protection methods."}
            </p>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "أمن الشبكات"
                : "Network Security"}
            </h3>

            <p>
              {isArabic
                ? "تعرّف على الشبكات والبروتوكولات وطرق الدفاع."
                : "Understand networks, protocols, and defensive security."}
            </p>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "الاختراق الأخلاقي"
                : "Ethical Hacking"}
            </h3>

            <p>
              {isArabic
                ? "تدرّب على اختبار الاختراق ومحاكاة الهجمات الحقيقية."
                : "Practice penetration testing and real attack simulations."}
            </p>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "اختبار الاختراق"
                : "Penetration Testing"}
            </h3>

            <p>
              {isArabic
                ? "تعلّم كيف يكتشف محترفو الأمن الثغرات ويعالجونها."
                : "Learn how security professionals find and fix vulnerabilities."}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          FEATURED LABS
      ========================= */}

      <section className="labs">

        <h2>
          {isArabic ? "المختبرات المميزة" : "Featured Labs"}
        </h2>

        <div className="cards">

          <div className="card">

            <h3>
              {isArabic
                ? "مختبر أمان Linux"
                : "Linux Security Lab"}
            </h3>

            <p>
              {isArabic
                ? "تدرّب على أوامر Linux والصلاحيات ومهام الأمان."
                : "Practice Linux commands, permissions and security tasks."}
            </p>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "مختبر اختراق الويب"
                : "Web Hacking Lab"}
            </h3>

            <p>
              {isArabic
                ? "تعلّم ثغرات الويب مثل XSS و SQL Injection."
                : "Learn web vulnerabilities like XSS and SQL Injection."}
            </p>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "مختبر تحليل الشبكات"
                : "Network Analysis Lab"}
            </h3>

            <p>
              {isArabic
                ? "حلّل حركة البيانات وتعرّف على هجمات الشبكات."
                : "Analyze traffic and understand network attacks."}
            </p>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "مختبر تحليل البرمجيات الخبيثة"
                : "Malware Analysis Lab"}
            </h3>

            <p>
              {isArabic
                ? "استكشف سلوك البرمجيات الخبيثة وتقنيات الدفاع."
                : "Explore malware behavior and defense techniques."}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CTF
      ========================= */}

      <section className="ctf">

        <h2>
          {isArabic ? "تحديات CTF" : "CTF Challenges"}
        </h2>

        <div className="cards">

          <div className="card">

            <h3>
              {isArabic
                ? "CTF للمبتدئين"
                : "Beginner CTF"}
            </h3>

            <p>
              {isArabic
                ? "ابدأ رحلتك في الأمن السيبراني مع التحديات الأساسية."
                : "Start your cybersecurity journey with basic challenges."}
            </p>

            <span>⭐ 100 {isArabic ? "نقطة" : "Points"}</span>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "استغلال الويب"
                : "Web Exploitation"}
            </h3>

            <p>
              {isArabic
                ? "اكتشف الثغرات في تطبيقات الويب الضعيفة."
                : "Find vulnerabilities in vulnerable web applications."}
            </p>

            <span>⭐ 250 {isArabic ? "نقطة" : "Points"}</span>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "تحدي الشبكات"
                : "Network Challenge"}
            </h3>

            <p>
              {isArabic
                ? "حلّل الحزم وأنجز مهام أمن الشبكات."
                : "Analyze packets and solve network security tasks."}
            </p>

            <span>⭐ 300 {isArabic ? "نقطة" : "Points"}</span>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "تحدي Linux"
                : "Linux Challenge"}
            </h3>

            <p>
              {isArabic
                ? "أكمل مهام الأمن المبنية على Linux."
                : "Complete Linux based security missions."}
            </p>

            <span>⭐ 200 {isArabic ? "نقطة" : "Points"}</span>

          </div>

        </div>

      </section>


      {/* =========================
          WHY CYBERVERSE
      ========================= */}

      <section className="why">

        <h2>
          {isArabic ? "لماذا CyberVerse؟" : "Why CyberVerse?"}
        </h2>

        <div className="cards">

          <div className="card">

            <h3>
              🚀{" "}
              {isArabic
                ? "التعلم العملي"
                : "Practical Learning"}
            </h3>

            <p>
              {isArabic
                ? "تعلّم من خلال ممارسة سيناريوهات الأمن السيبراني الحقيقية والمختبرات العملية."
                : "Learn by practicing real cybersecurity scenarios and hands-on labs."}
            </p>

          </div>


          <div className="card">

            <h3>
              🔐{" "}
              {isArabic
                ? "مهارات أمن حقيقية"
                : "Real Security Skills"}
            </h3>

            <p>
              {isArabic
                ? "طوّر مهارات يستخدمها محترفو الأمن السيبراني."
                : "Build skills used by cybersecurity professionals."}
            </p>

          </div>


          <div className="card">

            <h3>
              🏆{" "}
              {isArabic
                ? "تتبع تقدمك"
                : "Track Progress"}
            </h3>

            <p>
              {isArabic
                ? "أكمل التحديات وطوّر مستواك في الأمن السيبراني."
                : "Complete challenges and improve your cybersecurity level."}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          NEWS
      ========================= */}

      <section className="news">

        <h2>
          {isArabic
            ? "أحدث الأخبار السيبرانية"
            : "Latest Cyber News"}
        </h2>

        <div className="cards">

          <div className="card">

            <h3>
              {isArabic
                ? "تهديدات أمنية جديدة"
                : "New Security Threats"}
            </h3>

            <p>
              {isArabic
                ? "ابقَ على اطلاع بأحدث الثغرات والتهديدات السيبرانية."
                : "Stay updated with the latest cybersecurity vulnerabilities."}
            </p>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "الذكاء الاصطناعي والأمن السيبراني"
                : "AI & Cybersecurity"}
            </h3>

            <p>
              {isArabic
                ? "اكتشف كيف يغيّر الذكاء الاصطناعي عالم الأمن الرقمي."
                : "Discover how artificial intelligence changes digital security."}
            </p>

          </div>


          <div className="card">

            <h3>
              {isArabic
                ? "تحديثات الصناعة"
                : "Industry Updates"}
            </h3>

            <p>
              {isArabic
                ? "تابع أهم أحداث وإعلانات الأمن السيبراني."
                : "Follow important cybersecurity events and announcements."}
            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;

