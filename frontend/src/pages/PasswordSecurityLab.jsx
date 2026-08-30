import { useState } from "react";
import Navbar from "../components/Navbar";
import "./PasswordSecurityLab.css";

function PasswordSecurityLab() {

  const questions = [

    {
      title:"Password Strength",

      question:
`Which password is the strongest?`,

      options:[
        "password123",
        "12345678",
        "qwerty",
        "T9#kL@2025!"
      ],

      answer:"T9#kL@2025!",

      hint:
      "Strong passwords contain uppercase, lowercase, numbers and symbols.",

      xp:100

    },

    {

      title:"Hash Identification",

      question:
`5f4dcc3b5aa765d61d8327deb882cf99

Which hash algorithm is this?`,

      options:[
        "SHA1",
        "MD5",
        "SHA256",
        "BCrypt"
      ],

      answer:"MD5",

      hint:
      "It's one of the oldest and most common hash algorithms.",

      xp:100

    },

    {

      title:"Wordlist Attack",

      question:
`Which tool commonly performs wordlist attacks?`,

      options:[
        "Hydra",
        "Wireshark",
        "Nmap",
        "Burp Suite"
      ],

      answer:"Hydra",

      hint:
      "It is commonly used for brute-force and password attacks.",

      xp:100

    },

    {

      title:"Password Policy",

      question:
`Which password policy is considered secure?`,

      options:[
        "Minimum 4 characters",
        "Only lowercase letters",
        "12+ characters with uppercase, lowercase, numbers and symbols",
        "No symbols allowed"
      ],

      answer:
      "12+ characters with uppercase, lowercase, numbers and symbols",

      hint:
      "Long and complex passwords provide better protection.",

      xp:100

    }

  ];

  const [current,setCurrent]=useState(0);

  const [result,setResult]=useState("");

  const [completed,setCompleted]=useState(false);

  const [showHint,setShowHint]=useState(false);

  const [earnedXP,setEarnedXP]=useState(0);

  const [answered,setAnswered]=useState([]);

  const progress=((current+1)/questions.length)*100;

  const currentQuestion=questions[current];
    function checkAnswer(option) {

    if (answered.includes(current)) return;

    if (option === currentQuestion.answer) {

      const xp =
        Number(localStorage.getItem("xp")) || 0;

      localStorage.setItem(
        "xp",
        xp + currentQuestion.xp
      );

      setEarnedXP(
        prev => prev + currentQuestion.xp
      );

      setAnswered([
        ...answered,
        current
      ]);

      setResult(
        `✅ Correct!\n\n🏆 +${currentQuestion.xp} XP`
      );

    } else {

      setResult("❌ Wrong Answer");

    }

  }

  function nextQuestion() {

    if (current < questions.length - 1) {

      setCurrent(current + 1);

      setResult("");

      setShowHint(false);

    } else {

      localStorage.setItem(
        "passwordLabCompleted",
        "true"
      );

      localStorage.setItem(
        "passwordBadge",
        "Password Guardian"
      );

      setCompleted(true);

      setResult(
        "🎉 Password Security Lab Completed!"
      );

    }

  }

  function restartLab() {

    setCurrent(0);

    setCompleted(false);

    setResult("");

    setShowHint(false);

    setAnswered([]);

    setEarnedXP(0);

  }
    return (
    <>
      <Navbar />

      <div className="password-container">

        <div className="password-card">

          <h1>🔑 Password Security Lab</h1>

          <p className="subtitle">
            Learn how to create strong passwords and identify common password attacks.
          </p>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`
              }}
            ></div>

          </div>

          {!completed ? (

            <>

              <h2>
                Challenge {current + 1} / {questions.length}
              </h2>

              <div className="question-box">

                <h3>
                  {currentQuestion.title}
                </h3>

                <pre className="question-text">
                  {currentQuestion.question}
                </pre>

              </div>

              <div className="options">

                {currentQuestion.options.map((option) => (

                  <button
                    key={option}
                    className="option-btn"
                    onClick={() => checkAnswer(option)}
                  >
                    {option}
                  </button>

                ))}

              </div>

              <button
                className="hint-btn"
                onClick={() => setShowHint(!showHint)}
              >
                💡 {showHint ? "Hide Hint" : "Show Hint"}
              </button>

              {showHint && (

                <div className="hint-box">

                  <p>{currentQuestion.hint}</p>

                </div>

              )}

              {result && (

                <div className="result-box">

                  <p
                    style={{
                      whiteSpace: "pre-line"
                    }}
                  >
                    {result}
                  </p>

                </div>

              )}

              <button
                className="next-btn"
                onClick={nextQuestion}
              >
                Next Challenge →
              </button>

            </>

          ) : (

            <div className="complete-box">

              <h2>
                🎉 Password Security Lab Completed!
              </h2>

              <p>
                Excellent! You completed all password security challenges.
              </p>

              <h3>
                🏆 +{earnedXP} XP
              </h3>

              <h3>
                🏅 Password Guardian Badge
              </h3>

              <button
                className="restart-btn"
                onClick={restartLab}
              >
                🔄 Restart Lab
              </button>

            </div>

          )}

        </div>

      </div>

    </>
  );

}

export default PasswordSecurityLab;