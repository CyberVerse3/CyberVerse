import { useState } from "react";
import Navbar from "../components/Navbar";
import "./ReverseEngineeringLab.css";

function ReverseEngineeringLab() {

  const questions = [

    {
      title: "Strings Analysis",

      question:
        "Which string looks like the hidden flag?",

      options: [

        "kernel32.dll",

        "printf",

        "flag{reverse_master}",

        "CreateFileA"

      ],

      answer: "flag{reverse_master}",

      hint:
        "Flags usually start with flag{...}",

      xp:100

    },

    {

      title:"File Analysis",

      question:
`Filename: malware.exe

Architecture: x64

Packed: Yes

What is the correct answer?`,

      options:[

        "Packed",

        "Not Packed",

        "Unknown",

        "Linux Binary"

      ],

      answer:"Packed",

      hint:
      "Read the file information carefully.",

      xp:100

    },

    {

      title:"Hex Viewer",

      question:
`4D 5A 90 00 03 00 00 00

Which executable format starts with MZ?`,

      options:[

        "ELF",

        "PDF",

        "APK",

        "PE"

      ],

      answer:"PE",

      hint:
      "Windows executables begin with MZ.",

      xp:100

    },

    {

      title:"Basic Reverse",

      question:
`if(password=="Cyber123")
{
    Access();
}

What is the correct password?`,

      options:[

        "Cyber321",

        "Password",

        "Cyber123",

        "Admin"

      ],

      answer:"Cyber123",

      hint:
      "Read the condition carefully.",

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
        "reverseLabCompleted",
        "true"
      );

      localStorage.setItem(
        "reverseBadge",
        "Reverse Engineer"
      );

      setCompleted(true);

      setResult(
        "🎉 Reverse Engineering Lab Completed!"
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

      <div className="reverse-container">

        <div className="reverse-card">

          <h1>🛠 Reverse Engineering Lab</h1>

          <p className="subtitle">
            Analyze files and solve reverse engineering challenges.
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
                🎉 Reverse Engineering Lab Completed!
              </h2>

              <p>
                Excellent work!
              </p>

              <h3>
                🏆 +{earnedXP} XP
              </h3>

              <h3>
                🏅 Reverse Engineer Badge
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

export default ReverseEngineeringLab;