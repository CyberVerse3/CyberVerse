import { useState } from "react";
import Navbar from "../components/Navbar";
import linuxFinalExam from "../academy/exams/linuxFinalExam";
import "../styles/FinalExam.css";
import { Navigate } from "react-router-dom";
import linuxLessons from "../academy/lessons/linux";
import { getCourseProgress } from "../utils/courseProgress";
function FinalExam() {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0);

    const [finished, setFinished] = useState(false);

    const question = linuxFinalExam[currentQuestion];
    function selectAnswer(option) {

    if (option === question.answer) {

        setScore(score + 1);

    }

    if (currentQuestion + 1 < linuxFinalExam.length) {

        setCurrentQuestion(currentQuestion + 1);

    } else {

        setFinished(true);

    }

}
if (finished) {

    const percent = Math.round(

        (score / linuxFinalExam.length) * 100

    );
const progress = getCourseProgress(linuxLessons.length);

if (progress < 100) {

    return <Navigate to="/academy/linux" replace />;

}
    return (

        <>
            <Navbar />

            <div className="exam-result">

                <h1>Final Exam Result</h1>

                <h2>{percent}%</h2>
<h3>

    {percent >= 80

        ? "🎉 PASS"

        : "❌ FAILED"}

</h3>

{

    percent >= 80 ? (

        <button

            onClick={() => {

                localStorage.setItem(

                    "linuxFinalExam",

                    "true"

                );

                localStorage.setItem(

                    "linuxCertificate",

                    "true"

                );

                window.location.href="/profile";

            }}

        >

            🎓 Claim Certificate

        </button>

    ) : (

        <button

            onClick={() => {

                window.location.reload();

            }}

        >

            🔄 Retry Exam

        </button>

    )

}
                  

            </div>

        </>

    );

}
return (

    <>

        <Navbar />

        <div className="exam-page">

            <div className="exam-card">

                <h1>🐧 Linux Final Exam</h1>

                <p>

                    Question {currentQuestion + 1} of {linuxFinalExam.length}

                </p>

                <div className="progress-bar">

                    <div
                        className="progress-fill"
                        style={{
                            width: `${((currentQuestion + 1) / linuxFinalExam.length) * 100}%`
                        }}
                    ></div>

                </div>

                <h2>

                    {question.question}

                </h2>

                <div className="answers">

                    {question.options.map((option, index) => (

                        <button

                            key={index}

                            onClick={() => selectAnswer(option)}

                            className="answer-btn"

                        >

                            {option}

                        </button>

                    ))}

                </div>

            </div>

        </div>

    </>

);

}

export default FinalExam;