import { useState } from "react";
import Navbar from "../components/Navbar";
import "./CryptographyLab.css";

function CryptographyLab() {

  const questions = [

    {
      id: 1,
      title: "Caesar Cipher",
      question:
        "Decrypt the following text: KHOOR",

      options: [
        "WORLD",
        "HELLO",
        "APPLE",
        "CYBER"
      ],

      answer: "HELLO",

      hint:
        "Caesar Cipher shifts letters by 3 positions.",

      xp: 100
    },

    {
      id: 2,
      title: "Base64",

      question:
        "Decode the following Base64 string: SGVsbG8=",

      options: [
        "World",
        "Hello",
        "Cyber",
        "Admin"
      ],

      answer: "Hello",

      hint:
        "Base64 is encoding, not encryption.",

      xp: 100
    },

    {
      id: 3,
      title: "Hash Identification",

      question:
        "Identify this hash:\n5d41402abc4b2a76b9719d911017c592",

      options: [
        "SHA1",
        "SHA256",
        "MD5",
        "bcrypt"
      ],

      answer: "MD5",

      hint:
        "It's a 32-character hexadecimal hash.",

      xp: 100
    },

    {
      id: 4,
      title: "AES Basics",

      question:
        "AES is which type of algorithm?",

      options: [
        "Asymmetric",
        "Symmetric",
        "Hash Function",
        "Encoding"
      ],

      answer: "Symmetric",

      hint:
        "AES uses the same key for encryption and decryption.",

      xp: 100
    }

  ];

  const [current, setCurrent] = useState(0);

  const [result, setResult] = useState("");

  const [completed, setCompleted] = useState(false);

  const [showHint, setShowHint] = useState(false);

  const [earnedXP, setEarnedXP] = useState(0);

  const [answered, setAnswered] = useState([]);

  const progress =
    ((current + 1) / questions.length) * 100;

  const currentQuestion =
    questions[current];

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
        earnedXP + currentQuestion.xp
      );

      setAnswered([
        ...answered,
        current
      ]);

      setResult(
        `✅ Correct!\n\n+${currentQuestion.xp} XP`
      );

    } else {

      setResult(
        "❌ Wrong Answer"
      );

    }

  }

  function nextQuestion() {

    if (current < questions.length - 1) {

      setCurrent(current + 1);

      setResult("");

      setShowHint(false);

    } else {

      localStorage.setItem(
        "cryptoLabCompleted",
        "true"
      );

      localStorage.setItem(
        "cryptoBadge",
        "Cryptography Explorer"
      );

      setCompleted(true);

      setResult(
        "🎉 Cryptography Lab Completed!"
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

      <div className="crypto-container">

        <div className="crypto-card">

          <h1>🔐 Cryptography Lab</h1>

          <p className="subtitle">
            Complete all cryptography challenges.
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

                <p>
                  {currentQuestion.question}
                </p>

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
                onClick={() =>
                  setShowHint(!showHint)
                }
              >
                💡 {showHint ? "Hide Hint" : "Show Hint"}
              </button>

              {showHint && (

                <div className="hint-box">

                  <p>
                    {currentQuestion.hint}
                  </p>

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
                🎉 Congratulations!
              </h2>

              <p>
                You completed the Cryptography Lab.
              </p>

              <h3>
                🏆 +{earnedXP} XP
              </h3>

              <h3>
                🏅 Cryptography Explorer
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

export default CryptographyLab;