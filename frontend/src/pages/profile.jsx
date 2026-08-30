import Navbar from "../components/Navbar";
import "./Profile.css";

function Profile() {

  const user =
    JSON.parse(localStorage.getItem("cyberverseUser")) || {
      name: "Cyber Student"
    };

  const xp =
    Number(localStorage.getItem("xp")) || 0;

  const linuxCertificate =
    localStorage.getItem("linuxCertificate")
      ? JSON.parse(localStorage.getItem("linuxCertificate"))
      : null;

  const badges = [
    localStorage.getItem("linuxBadge"),
    localStorage.getItem("webBadge"),
    localStorage.getItem("xssBadge"),
    localStorage.getItem("cryptoBadge"),
    localStorage.getItem("forensicsBadge")
  ].filter(Boolean);

  const completedLabs = [
    localStorage.getItem("linuxLabCompleted"),
    localStorage.getItem("webLabFinished"),
    localStorage.getItem("cryptoLabCompleted"),
    localStorage.getItem("forensicsLabCompleted")
  ].filter(value => value === "true").length;

  let level = "Beginner";

  if (xp >= 500) level = "Intermediate";
  if (xp >= 1000) level = "Advanced";
  if (xp >= 2000) level = "Cyber Expert";

  const progress = Math.min(
    Math.round((xp / 2000) * 100),
    100
  );

  return (
    <>
      <Navbar />

      <div className="profile">

        <div className="profile-header">

          <div className="avatar">
            👨‍💻
          </div>

          <h1>{user.name}</h1>

          <p>{level}</p>

        </div>
                <div className="profile-stats">

          <div className="stat-card">

            <h2>⭐ XP</h2>

            <h1>{xp}</h1>

          </div>

          <div className="stat-card">

            <h2>🏅 Badges</h2>

            <h1>{badges.length}</h1>

          </div>

          <div className="stat-card">

            <h2>📚 Labs</h2>

            <h1>{completedLabs}</h1>

          </div>

          <div className="stat-card">

            <h2>🏆 Certificates</h2>

            <h1>

              {linuxCertificate ? "1" : "0"}

            </h1>

          </div>

        </div>

        <div className="progress-box">

          <h2>Level Progress</h2>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`
              }}
            ></div>

          </div>

          <p>

            {progress}% Completed

          </p>

        </div>
                <div className="badges-box">

          <h2>🏆 My Certificates</h2>

          {linuxCertificate ? (

            <div className="badge">

              <h3>
                🐧 {linuxCertificate.title}
              </h3>

              <p>
                📅 {linuxCertificate.date}
              </p>

              <p>
                ⭐ {linuxCertificate.xp} XP
              </p>

              <button
                onClick={() => {
                  window.location.href = "/academy/linux/certificate";
                }}
              >
                View Certificate
              </button>

            </div>

          ) : (

            <p>No certificates earned yet.</p>

          )}

        </div>

        <div className="badges-box">

          <h2>🏅 Achievements</h2>

          {badges.length === 0 ? (

            <p>No badges yet.</p>

          ) : (

            badges.map((badge, index) => (

              <div
                className="badge"
                key={index}
              >
                🏅 {badge}
              </div>

            ))

          )}

        </div>

      </div>

    </>

  );

}

export default Profile;