import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import "./LinuxLab.css";

function LinuxLab() {
  const questions = [
    {
      question: "Which command shows your current directory?",
      options: ["ls", "pwd", "mkdir", "rm"],
      answer: "pwd",
      hint: "Print Working Directory",
    },
    {
      question: "Which command lists files and folders?",
      options: ["cd", "ls", "touch", "nano"],
      answer: "ls",
      hint: "Lists directory contents",
    },
    {
      question: "Which command creates a new folder?",
      options: ["mkdir", "rm", "cat", "pwd"],
      answer: "mkdir",
      hint: "Make Directory",
    },
    {
      question: "Which command removes a file?",
      options: ["remove", "delete", "rm", "clear"],
      answer: "rm",
      hint: "Remove file",
    },
    {
      question: "Which command displays file content?",
      options: ["cat", "mv", "cp", "chmod"],
      answer: "cat",
      hint: "Concatenate and display file contents",
    },
    {
      question: "Which command changes directory?",
      options: ["cd", "ls", "pwd", "whoami"],
      answer: "cd",
      hint: "Change Directory",
    },
    {
      question: "Which command shows the current user?",
      options: ["whoami", "user", "idk", "name"],
      answer: "whoami",
      hint: "Show current user",
    },
    {
      question: "Which command changes file permissions?",
      options: ["chmod", "chfile", "perm", "change"],
      answer: "chmod",
      hint: "Change file permissions",
    },
    {
      question: "Which command copies files?",
      options: ["copy", "cp", "mv", "clone"],
      answer: "cp",
      hint: "Copy files",
    },
    {
      question: "Which command moves or renames files?",
      options: ["mv", "movefile", "rename", "shift"],
      answer: "mv",
      hint: "Move or rename files",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState("");
  const [badge, setBadge] = useState("");
  const [showHint, setShowHint] = useState(false);

  const [points, setPoints] = useState(
    Number(localStorage.getItem("xp")) || 0
  );

  const [completed, setCompleted] = useState([]);

  const [timeLeft, setTimeLeft] = useState(1800);

  const progress = ((current + 1) / questions.length) * 100;

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  function checkAnswer(option) {
    if (option === questions[current].answer) {
      setResult("✅ Correct! +100 XP");

      if (!completed.includes(current)) {
        const newXP = points + 100;

        setPoints(newXP);

        localStorage.setItem("xp", newXP);

        setCompleted([...completed, current]);
      }
    } else {
      setResult("❌ Incorrect, Try Again");
    }
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setResult("");
      setShowHint(false);
    } else {
      setResult("🎉 Linux Lab Completed!");

      setBadge("🏅 Linux Explorer");

      localStorage.setItem(
        "linuxLabCompleted",
        "true"
      );

      localStorage.setItem(
        "linuxBadge",
        "Linux Explorer"
      );
    }
  }

  function restartLab() {
    setCurrent(0);
    setResult("");
    setBadge("");
    setShowHint(false);
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <MainLayout>
      <div
        style={{
          color: "white",
          padding: "40px",
          minHeight: "100vh",
          background: "#020617",
        }}
      >
        <h1>🐧 Linux Lab</h1>

        <h3>
          ⏱️ Time Left: {minutes}:
          {seconds < 10 ? "0" : ""}
          {seconds}
        </h3>

        <h2>
          Question {current + 1} / {questions.length}
        </h2>

        <div className="progress">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <p>{questions[current].question}</p>

        <button
          onClick={() =>
            setShowHint(!showHint)
          }
        >
          💡{" "}
          {showHint
            ? "Hide Hint"
            : "Show Hint"}
        </button>

        {showHint && (
          <p>
            Hint: {questions[current].hint}
          </p>
        )}

        {questions[current].options.map(
          (option) => (
            <button
              key={option}
              onClick={() =>
                checkAnswer(option)
              }
              style={{
                display: "block",
                margin: "10px",
                padding: "10px",
              }}
            >
              {option}
            </button>
          )
        )}

        <h2>{result}</h2>

        {badge && (
          <>
            <h2
              style={{
                color: "#22c55e",
              }}
            >
              {badge}
            </h2>

            <button
              className="next-btn"
              onClick={restartLab}
            >
              🔄 Restart Lab
            </button>
          </>
        )}

        <button onClick={nextQuestion}>
          Next Question ➡️
        </button>

        <h3>⭐ XP: {points}</h3>
      </div>
    </MainLayout>
  );
}

export default LinuxLab;