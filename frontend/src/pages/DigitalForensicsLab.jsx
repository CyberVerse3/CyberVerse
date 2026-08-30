import { useState } from "react";
import Navbar from "../components/Navbar";
import "./DigitalForensicsLab.css";

function DigitalForensicsLab() {

  const questions = [

    {
      title: "Metadata Analysis",

      question:
`Image Information

Filename : evidence.jpg

Camera : Canon EOS 90D

Location : Baghdad

Date : 2025-04-10

Question:
Which city was the image taken in?`,

      options: [
        "Basra",
        "Baghdad",
        "Mosul",
        "Erbil"
      ],

      answer: "Baghdad",

      hint:
        "Read the metadata carefully.",

      xp:100

    },

    {
      title:"Log Analysis",

      question:
`System Log

08:30 User Login

08:45 USB Inserted

08:47 Secret.docx Copied

08:50 USB Removed

Question:
What happened at 08:47?`,

      options:[
        "USB Removed",
        "User Logout",
        "Secret.docx Copied",
        "System Shutdown"
      ],

      answer:"Secret.docx Copied",

      hint:
      "Look at the timeline.",

      xp:100

    },

    {
      title:"USB Investigation",

      question:
`Connected Devices

Kingston USB

SanDisk USB

External HDD

Question:
Which USB device appears in the investigation?`,

      options:[
        "Logitech",
        "Kingston USB",
        "Samsung SSD",
        "WD HDD"
      ],

      answer:"Kingston USB",

      hint:
      "Read the device list carefully.",

      xp:100

    },

    {
      title:"Timeline Analysis",

      question:
`Timeline

10:10 File Created

10:20 File Modified

10:40 File Deleted

Question:
When was the file deleted?`,

      options:[
        "10:10",
        "10:20",
        "10:30",
        "10:40"
      ],

      answer:"10:40",

      hint:
      "Find the delete event.",

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
        "forensicsLabCompleted",
        "true"
      );

      localStorage.setItem(
        "forensicsBadge",
        "Digital Detective"
      );

      setCompleted(true);

      setResult(
        "🎉 Digital Forensics Lab Completed!"
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

      <div className="forensics-container">

        <div className="forensics-card">

          <h1>🕵️ Digital Forensics Lab</h1>

          <p className="subtitle">
            Investigate digital evidence and solve forensic challenges.
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
                🎉 Digital Forensics Lab Completed!
              </h2>

              <p>
                Great job investigating the evidence!
              </p>

              <h3>
                🏆 +{earnedXP} XP
              </h3>

              <h3>
                🏅 Digital Detective Badge
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

export default DigitalForensicsLab;