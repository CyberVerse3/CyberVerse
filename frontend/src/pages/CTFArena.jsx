import Navbar from "../components/Navbar";
import "./CTFArena.css";
import ctfChallenges from "../data/ctfChallenges";

function CTFArena() {

  const completed =
    Number(localStorage.getItem("ctfCompleted")) || 0;

  const totalXP = ctfChallenges.reduce(
    (sum, challenge) => sum + challenge.xp,
    0
  );

  function startChallenge(challenge) {

    if (!challenge.unlocked) {
      alert("🔒 Complete previous challenges first.");
      return;
    }

    alert(
      `🚩 ${challenge.title}

Category: ${challenge.category}

Reward: ${challenge.xp} XP

(This challenge page will be added later.)`
    );

  }

  return (
    <>
      <Navbar />

      <div className="arena">

        <div className="arena-hero">

          <h1>🏆 CTF Arena</h1>

          <p>
            Train • Hack • Learn • Repeat
          </p>

          <div className="arena-stats">

            <div>
              <h2>{completed}</h2>
              <span>Completed</span>
            </div>

            <div>
              <h2>{ctfChallenges.length}</h2>
              <span>Total Challenges</span>
            </div>

            <div>
              <h2>{totalXP}</h2>
              <span>Total XP</span>
            </div>

          </div>

        </div>

        <div className="challenge-grid">

          {ctfChallenges.map((challenge) => (

            <div
              key={challenge.id}
              className={`challenge-card ${challenge.difficulty.toLowerCase()}`}
            >

              <span className="difficulty">
                {challenge.difficulty}
              </span>

              <h2>
                {challenge.title}
              </h2>

              <p>
                {challenge.description}
              </p>

              <div className="category">

                📂 {challenge.category}

              </div>

              <div className="bottom">

                <span>
                  🏆 {challenge.xp} XP
                </span>

                {challenge.unlocked ? (

                  <button
                    onClick={() =>
                      startChallenge(challenge)
                    }
                  >
                    ▶ Start
                  </button>

                ) : (

                  <button disabled>

                    🔒 Locked

                  </button>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </>
  );
}

export default CTFArena;