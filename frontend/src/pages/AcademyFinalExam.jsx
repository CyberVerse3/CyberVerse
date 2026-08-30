import { useState } from "react";
import Navbar from "../components/Navbar";
import academyFinalExam from "../quizzes/academyFinalExam.js";

function AcademyFinalExam() {

    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);

    function handleNext() {

        if (current < academyFinalExam.length - 1) {

            setCurrent(current + 1);

        } else {

            let correct = 0;
     
            academyFinalExam.forEach((question) => {

    const userAnswer = (answers[question.id] || "")
        .toString()
        .trim()
        .toLowerCase();

    const correctAnswer = question.answer
        .toString()
        .trim()
        .toLowerCase();

    if (userAnswer === correctAnswer) {

        correct++;

    }

});

            setScore(correct);
            setFinished(true);

        }

    }

  if (finished) {

    const percentage = Math.round(
        (score / academyFinalExam.length) * 100
    );

    if (percentage >= 70) {

        localStorage.setItem(
            "academyGraduate",
            "true"
        );

        localStorage.setItem(
            "academyBadge",
            JSON.stringify({
                title: "Elite Graduate",
                icon: "🏆"
            })
        );

        localStorage.setItem(
            "academyCertificate",
            JSON.stringify({

                title: "CyberVerse Academy Graduate",

                date: new Date().toLocaleDateString(),

                certificateId:
                    "CV-" +
                    new Date().getFullYear() +
                    "-" +
                    Math.random()
                        .toString(36)
                        .substring(2,8)
                        .toUpperCase()

            })
        );

        alert(
            "🎉 Congratulations!\n\nYou are now a CyberVerse Academy Graduate!"
        );

        window.location.href = "/academy/certificate";

        return null;
    }

    return (

        <>
            <Navbar />

            <div className="lesson-page">

                <h1>❌ Exam Failed</h1>

                <h2>

                    Score: {score} / {academyFinalExam.length}

                </h2>

                <h3>

                    {percentage}%

                </h3>

                <button
                    onClick={() => window.location.reload()}
                >
                    🔄 Retry Exam
                </button>

            </div>

        </>

    );

}  

    const question = academyFinalExam[current];

    return (

        <>
            <Navbar />

            <div className="lesson-page">

                <h1>

                    Academy Final Exam

                </h1>

                <h2>

                    Question {current + 1} / {academyFinalExam.length}

                </h2>

                   <h3>

    {question.question}

</h3>

{question.type === "multiple" ? (

    <div
        style={{
            marginTop: "20px"
        }}
    >

        {question.options.map((option) => (

            <label
                key={option}
                style={{
                    display: "block",
                    marginBottom: "12px",
                    cursor: "pointer"
                }}
            >

                <input

                    type="radio"

                    name={`question-${question.id}`}

                    checked={answers[question.id] === option}

                    onChange={() =>

                        setAnswers({

                            ...answers,

                            [question.id]: option

                        })

                    }

                />

                {" "}

                {option}

            </label>

        ))}

    </div>

) : (

    <input

        type="text"

        placeholder="Type your answer..."

        value={answers[question.id] || ""}

        onChange={(e) =>

            setAnswers({

                ...answers,

                [question.id]: e.target.value

            })

        }

        style={{

            width: "100%",

            padding: "15px",

            marginTop: "20px",

            fontSize: "18px"

        }}

    />

)}

                <button

                    style={{

                        marginTop: "30px"

                    }}

                    onClick={handleNext}

                >

                    {current === academyFinalExam.length - 1

                        ? "Submit Exam"

                        : "Next"}

                </button>

            </div>

        </>

    );

}

export default AcademyFinalExam;