import { useState } from "react";
import Navbar from "../components/Navbar";
import "./CryptographyLab.css";

function CryptographyLab() {
  const [challenge, setChallenge] = useState(1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [completed, setCompleted] = useState(false);

  const progress = challenge === 1 ? 50 : 100;

  function checkAnswer() {
    if (challenge === 1) {
      if (answer.trim().toUpperCase() === "HELLO") {
        const xp = Number(localStorage.getItem("xp")) || 0;

        localStorage.setItem("xp", xp + 150);

        setResult("✅ Correct!\n\n🏆 +150 XP");
        setAnswer("");
        setChallenge(2);

      } else {

        setResult("❌ Wrong Answer");

      }

    } else {

      if (answer.trim() === "CyberVerse") {

        const xp = Number(localStorage.getItem("xp")) || 0;

        localStorage.setItem("xp", xp + 200);

        localStorage.setItem(
          "cryptoLabCompleted",
          "true"
        );

        localStorage.setItem(
          "cryptoBadge",
          "Crypto Explorer"
        );

        setCompleted(true);

        setResult(
          "🎉 Cryptography Lab Completed!\n\n🏆 +200 XP\n\n🏅 Crypto Explorer"
        );

      } else {

        setResult("❌ Wrong Answer");

      }

    }
  }

  return (
    <>
      <Navbar />

      <div className="crypto-container">

        <div className="crypto-card">

          <h1>🔐 Cryptography Lab</h1>

          <h3>
            Challenge {challenge} / 2
          </h3>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`
              }}
            ></div>

          </div>

          {challenge === 1 ? (

            <>

              <h2>Challenge 1</h2>

              <p>
                Decode this Caesar Cipher:
              </p>

              <h1 className="cipher">
                KHOOR
              </h1>

            </>

          ) : (

            <>

              <h2>Challenge 2</h2>

              <p>
                Decode this Base64 string:
              </p>

              <h1 className="cipher">
                Q3liZXJWZXJzZQ==
              </h1>

            </>

          )}

          <input
            className="answer-input"
            type="text"
            placeholder="Your Answer..."
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
          />

          <button
            className="submit-btn"
            onClick={checkAnswer}
          >
            Submit Answer
          </button>

          <div className="hint-box">

            <h3>💡 Hint</h3>

            <p>
              {challenge === 1
                ? "Think about shifting each letter backward."
                : "Try decoding using Base64."}
            </p>

          </div>

          <p
            style={{
              marginTop: "20px",
              whiteSpace: "pre-line",
              color: "#22c55e",
              fontWeight: "bold"
            }}
          >
            {result}
          </p>

          {completed && (

            <div className="complete-box">

              <h2>
                🎉 Congratulations!
              </h2>

              <p>
                You completed the Cryptography Lab.
              </p>

              <p>
                🏆 Total Reward: 350 XP
              </p>

              <p>
                🏅 Crypto Explorer Badge
              </p>

            </div>

          )}

        </div>

      </div>

    </>
  );
}

export default CryptographyLab;