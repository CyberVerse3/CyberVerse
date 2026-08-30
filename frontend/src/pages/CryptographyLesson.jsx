import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import "../styles/Lesson.css";

import cryptographyLessons from "../academy/lessons/cryptography";
import cryptographyQuiz from "../academy/quizzes/cryptographyQuiz";

import Quiz from "../components/Quiz/Quiz";
import Popup from "../components/Popup/Popup";

import {
    isLessonUnlocked,
    completeLesson,
    saveCurrentLesson
} from "../utils/lessonProgress";

function CryptographyLesson() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [showPopup, setShowPopup] = useState(false);

    const lesson =
        cryptographyLessons.find(
            item => item.id === Number(id)
        ) || cryptographyLessons[0];

    const currentIndex =
        cryptographyLessons.findIndex(
            item => item.id === Number(id)
        );

    const previousLesson =
        currentIndex > 0
            ? cryptographyLessons[currentIndex - 1]
            : null;

    const nextLesson =
        currentIndex < cryptographyLessons.length - 1
            ? cryptographyLessons[currentIndex + 1]
            : null;

    return (

        <>

            <Navbar />

            <div className="lesson-page">

                <aside className="lesson-sidebar">

                    <h2>🔐 Cryptography</h2>

                    {

                        cryptographyLessons.map(item => {

                            const unlocked =
                                isLessonUnlocked(item.id);

                            return (

                                <div

                                    key={item.id}

                                    className={`lesson-menu ${

                                        item.id === lesson.id
                                            ? "active"
                                            : ""

                                    } ${

                                        !unlocked
                                            ? "locked"
                                            : ""

                                    }`}

                                    onClick={() => {

                                        if (unlocked) {

                                            navigate(
                                                `/academy/crypto/lesson/${item.id}`
                                            );

                                        }

                                    }}

                                    style={{
                                        cursor:
                                            unlocked
                                                ? "pointer"
                                                : "not-allowed"
                                    }}

                                >

                                    {unlocked ? "🔓" : "🔒"}

                                    {" "}

                                    {item.title}

                                </div>

                            );

                        })

                    }

                </aside>

                <main className="lesson-content">

                    <h1>{lesson.title}</h1>

                    <p>{lesson.content}</p>

                    <div className="lesson-box">

                        <h2>📖 What you will learn</h2>

                        <ul>

                            {

                                lesson.objectives.map(

                                    (item, index) => (

                                        <li key={index}>

                                            {item}

                                        </li>

                                    )

                                )

                            }

                        </ul>

                    </div>

                    <div className="terminal">

                        <pre>

                            {lesson.commands.join("\n")}

                        </pre>

                    </div>

                    <div style={{ marginTop: "60px" }}>

                        <Quiz
                            questions={cryptographyQuiz}
                        />

                    </div>
                                        <div className="buttons">

                        <button

                            disabled={!previousLesson}

                            onClick={() => {

                                if (previousLesson) {

                                    navigate(

                                        `/academy/crypto/lesson/${previousLesson.id}`

                                    );

                                }

                            }}

                        >

                            ← Previous

                        </button>

                        <button

                            disabled={!nextLesson}

                            onClick={() => {

                                if (nextLesson) {

                                    navigate(

                                        `/academy/crypto/lesson/${nextLesson.id}`

                                    );

                                }

                            }}

                        >

                            Next →

                        </button>

                        <button

                            className="complete-btn"

                            onClick={() => {

                                saveCurrentLesson(

                                    nextLesson
                                        ? nextLesson.id
                                        : lesson.id

                                );

                                completeLesson(

                                    lesson.id,

                                    lesson.xp

                                );

                                setShowPopup(true);

                            }}

                        >

                            ✅ Complete Lesson

                        </button>

                    </div>

                </main>

            </div>
                        <Popup

                show={showPopup}

                title="Great Job!"

                message="Lesson Completed Successfully"

                xp={lesson.xp}

                onClose={() => {

                    setShowPopup(false);

                    if (nextLesson) {

                        navigate(

                            `/academy/crypto/lesson/${nextLesson.id}`

                        );

                    } else {

                        navigate(

                            "/academy/crypto/final"

                        );

                    }

                }}

            />

        </>

    );

}

export default CryptographyLesson;