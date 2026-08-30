import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "./NetworkLab.css";

function NetworkLab() {
  const [challenge, setChallenge] = useState(1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [completed, setCompleted] = useState(false);

  const progress = challenge === 1 ? 50 : 100;

  function checkAnswer() {
    if (challenge === 1) {
      if (answer.trim() === "22") {
        const xp = Number(localStorage.getItem("xp")) || 0;

        localStorage.setItem("xp", xp + 150);

        setResult("✅ Correct!\n\n🏆 +150 XP");
        setAnswer("");
        setChallenge(2);

      } else {

        setResult("❌ Wrong Answer");

      }

    } else {

      if (answer.trim() === "80") {

        const xp =
          Number(localStorage.getItem("xp")) || 0;

        localStorage.setItem("xp", xp + 200);

        localStorage.setItem(
          "networkLabCompleted",
          "true"
        );

        localStorage.setItem(
          "networkBadge",
          "Network Explorer"
        );

        setCompleted(true);

        setResult(
          "🎉 Network Lab Completed!\n\n🏆 +200 XP\n\n🏅 Network Explorer"
        );

      } else {

        setResult("❌ Wrong Answer");

      }
    }
  }

  return (

    <MainLayout>

      <div className="lab-container">

        <div className="lab-card">

          <h1>🌐 Network Lab</h1>

          <h3>
            Challenge {challenge} / 2
          </h3>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

          <div className="question">

            {challenge === 1 ? (

              <>

                <h2>Challenge 1</h2>

                <p>
                  Which port does SSH use by default?
                </p>

              </>

            ) : (

              <>

                <h2>Challenge 2</h2>

                <p>
                  Which port does HTTP use by default?
                </p>

              </>

            )}

          </div>

          <input
            className="answer-input"
            type="text"
            placeholder="Enter your answer..."
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
          />

          <br />

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
                ? "SSH is a secure remote login protocol."
                : "HTTP is the default protocol for websites."}

            </p>

          </div>

          <div className="result">

            <p
              style={{
                whiteSpace: "pre-line",
                color: "#22c55e",
                fontWeight: "bold",
              }}
            >
              {result}
            </p>

          </div>

          {completed && (

            <div className="complete-box">

              <h2>
                🎉 Network Lab Completed!
              </h2>

              <p>
                Congratulations! You completed all challenges.
              </p>

              <h3>Rewards</h3>

              <p>🏆 +350 XP</p>

              <p>🏅 Network Explorer Badge</p>

            </div>

          )}

        </div>

      </div>

    </MainLayout>

  );
}

export default NetworkLab;