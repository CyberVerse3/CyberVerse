import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import "../styles/Lesson.css";

import linuxLessons from "../academy/lessons/linux";

import Quiz from "../components/Quiz/Quiz";

import linuxQuiz from "../academy/quizzes/linuxQuiz";
import { isLessonUnlocked } from "../utils/lessonProgress";

import { useState } from "react";
import Popup from "../components/Popup/Popup";


import {
    completeLesson,
    saveCurrentLesson
} from "../utils/lessonProgress";



function Lesson() {

    const { id } = useParams();
const navigate = useNavigate();
const [showPopup, setShowPopup] = useState(false);
    const lesson =
        linuxLessons.find(
            (item) => item.id === Number(id)
        ) || linuxLessons[0];
const currentIndex = linuxLessons.findIndex(
    (item) => item.id === Number(id)
);

const previousLesson =
    currentIndex > 0
        ? linuxLessons[currentIndex - 1]
        : null;

const nextLesson =
    currentIndex < linuxLessons.length - 1
        ? linuxLessons[currentIndex + 1]
        : null;

        
    return (

        <>

            <Navbar />

            <div className="lesson-page">

                <aside className="lesson-sidebar">

                    <h2>🐧 Linux Course</h2>

                    {linuxLessons.map((item) => {

    const unlocked = isLessonUnlocked(item.id);

    return(

        <div
    key={item.id}
    className={`lesson-menu ${
        item.id === lesson.id ? "active" : ""
    } ${
        !unlocked ? "locked" : ""
    }`}

    onClick={() => {

        if (unlocked) {

            navigate(
                `/academy/linux/lesson/${item.id}`
            );

        }

    }}

    style={{
        cursor: unlocked
            ? "pointer"
            : "not-allowed"
    }}
>

    {unlocked ? "🔓" : "🔒"}

    {" "}

    {item.title}

</div>

    );

})}

                       

                    

                </aside>

                <main className="lesson-content">

                    <h1>{lesson.title}</h1>

                    <p>

                        {lesson.content}

                    </p>

                    <div className="lesson-box">

                        <h2>📖 What you will learn</h2>

                        <ul>

                            {lesson.objectives.map((item, index) => (

                                <li key={index}>

                                    {item}

                                </li>

                            ))}

                        </ul>

                    </div>

                    <div className="terminal">

                        <pre>

                            {lesson.commands.join("\n")}

                        </pre>

                    </div>

                    <div style={{ marginTop: "60px" }}>

                        <Quiz questions={linuxQuiz} />

                    </div>

                   <div className="buttons">

    <button
        disabled={!previousLesson}
        onClick={() => {

            if (previousLesson) {

                navigate(
                    `/academy/linux/lesson/${previousLesson.id}`
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
                    `/academy/linux/lesson/${nextLesson.id}`
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







    if (nextLesson) {

        navigate(
            `/academy/linux/lesson/${nextLesson.id}`
        );

    } else {

    navigate("/academy/linux/final");

}

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
                `/academy/linux/lesson/${nextLesson.id}`
            );

        } else {

           navigate("/academy/linux/final");

        }

    }}

/>
        </>

    );

}

export default Lesson;