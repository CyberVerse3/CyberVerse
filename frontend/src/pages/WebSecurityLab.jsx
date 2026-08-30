import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "./WebSecurityLab.css";

function WebSecurityLab() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [preview, setPreview] = useState("");
  const [challenge, setChallenge] = useState(1);
  const [result, setResult] = useState("");
  const [labCompleted, setLabCompleted] = useState(false);

  function login() {
    if (
      username === "' OR 1=1 --" ||
      username === "admin' --"
    ) {
      const xp =
        Number(localStorage.getItem("xp")) || 0;

      localStorage.setItem("xp", xp + 150);

      localStorage.setItem(
        "webLabCompleted",
        "true"
      );

      localStorage.setItem(
        "webBadge",
        "SQL Injection Explorer"
      );

      setResult(
        "🎉 Challenge 1 Completed!\n\n🏆 +150 XP"
      );

      setChallenge(2);

    } else {

      setResult("❌ Access Denied");

    }
  }

  function checkXSS() {
    if (comment.includes("<script>")) {

      const xp =
        Number(localStorage.getItem("xp")) || 0;

      localStorage.setItem("xp", xp + 200);

      localStorage.setItem(
        "xssCompleted",
        "true"
      );

      localStorage.setItem(
        "xssBadge",
        "XSS Hunter"
      );

      localStorage.setItem(
        "webLabFinished",
        "true"
      );

      setLabCompleted(true);

      setResult(
        "🎉 Challenge 2 Completed!\n\n🏆 +200 XP\n\n🏅 XSS Hunter"
      );

    } else {

      setResult("❌ No XSS Detected");

    }
  }

  return (
    <MainLayout>

      <div className="web-lab">

        <div className="browser">

          <div className="browser-header">

            <div className="browser-buttons">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>

            <div className="url-bar">
              🔒 https://cyberverse-lab.local
            </div>

          </div>

          <div className="browser-body">

            <h1>🌐 Web Security Lab</h1>

            <p className="subtitle">
              Complete all challenges to finish the lab.
            </p>

            <h3>
              Challenge {challenge} / 2
            </h3>

            {challenge === 1 && (

              <div className="login-box">

                <h2>SQL Injection</h2>

                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button onClick={login}>
                  Login
                </button>

              </div>

            )}

            {challenge === 2 && (

              <div className="login-box">

                <h2>XSS Challenge</h2>

                <textarea
                  placeholder="Write a comment..."
                  value={comment}
                  onChange={(e) =>
                    setComment(e.target.value)
                  }
                  rows="5"
                />

                <button onClick={checkXSS}>
                  Submit
                </button>

                <button
                  onClick={() => setPreview(comment)}
                  style={{ marginLeft: "10px" }}
                >
                  Preview
                </button>

                <div
                  style={{
                    marginTop: "20px",
                    padding: "15px",
                    border: "1px solid #22c55e",
                    borderRadius: "10px",
                    background: "#111827",
                  }}
                >

                  <h3>Comment Preview</h3>

                  <p>{preview}</p>

                </div>

              </div>

            )}

            <div className="mission">

              <h3>🎯 Mission</h3>

              {challenge === 1 ? (
                <p>
                  Bypass the login using SQL Injection.
                </p>
              ) : (
                <p>
                  Inject a script inside the comment box.
                </p>
              )}

              <button
                onClick={() =>
                  alert(
                    challenge === 1
                      ? "Hint: Try a classic SQL Injection payload."
                      : "Hint: Try using <script> tags."
                  )
                }
              >
                💡 Show Hint
              </button>

              <p
                style={{
                  color: "#22c55e",
                  marginTop: "20px",
                  whiteSpace: "pre-line",
                  fontWeight: "bold",
                }}
              >
                {result}
              </p>

            </div>

            {labCompleted && (

              <div
                style={{
                  marginTop: "30px",
                  padding: "20px",
                  background: "#14532d",
                  borderRadius: "12px",
                  color: "white",
                }}
              >

                <h2>
                  🎉 Web Security Lab Completed!
                </h2>

                <p>
                  Congratulations! You completed all Web Security challenges.
                </p>

                <h3>Rewards</h3>

                <p>🏆 +350 XP</p>

                <p>🏅 SQL Injection Explorer</p>

                <p>🏅 XSS Hunter</p>

              </div>

            )}

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default WebSecurityLab;