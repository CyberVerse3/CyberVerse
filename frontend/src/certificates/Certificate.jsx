import "./Certificate.css";

function Certificate() {

  const user =
    JSON.parse(localStorage.getItem("cyberverseUser")) || {};

  const xp =
    Number(localStorage.getItem("xp")) || 0;

  const date = new Date().toLocaleDateString();

  return (

    <div className="certificate-page">

      <div className="certificate">

        <div className="certificate-glow"></div>

        <div className="certificate-border">

          <div className="certificate-header">

            <h3>

              ★ CYBERVERSE ★

            </h3>

            <h1>

              CERTIFICATE

            </h1>

            <h2>

              OF COMPLETION

            </h2>

          </div>

          <div className="certificate-body">

            <p>

              This Certificate Proudly Presented To

            </p>

            <h1 className="student-name">

              {user?.name || "Cyber Student"}

            </h1>

            <p>

              For successfully completing

            </p>

            <h2 className="course-name">

              Linux Fundamentals

            </h2>

            <p>

              and demonstrating practical knowledge
              in Linux, Cyber Security Fundamentals
              and Hands-on Labs.

            </p>

          </div>

          <div className="certificate-stats">

            <div>

              <h3>⭐ XP Earned</h3>

              <p>{xp}</p>

            </div>

            <div>

              <h3>📅 Issue Date</h3>

              <p>{date}</p>

            </div>

            <div>

              <h3>🏆 Status</h3>

              <p>Certified</p>

            </div>

          </div>

          <div className="certificate-footer">

            <div>

              _______________________

              <h4>

                CyberVerse Academy

              </h4>

            </div>

            <div className="seal">

              🛡

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Certificate;