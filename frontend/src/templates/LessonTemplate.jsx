import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";

import Quiz from "../components/Quiz/Quiz";
import Popup from "../components/Popup/Popup";

import courses from "../academy/config/courses";

import "../styles/Lesson.css";
import { playComplete } from "../utils/soundManager";
import {

    isLessonUnlocked,

    completeLesson,

    saveCurrentLesson

} from "../utils/lessonProgress";
import { playClick } from "../utils/soundManager";
function LessonTemplate({ course }) {

    const { id } = useParams();

    const navigate = useNavigate();

    const [showPopup, setShowPopup] = useState(false);

    const data = courses[course];

    if (!data) {

        return (

            <>

                <Navbar />

                <h1
                    style={{
                        color:"white",
                        textAlign:"center",
                        marginTop:"100px"
                    }}
                >
                    Course Not Found
                </h1>

            </>

        );

    }

    const lessons = data.lessons;

    const lesson =
        lessons.find(
            item => item.id === Number(id)
        ) || lessons[0];

    const currentIndex =
        lessons.findIndex(
            item => item.id === Number(id)
        );

    const previousLesson =
        currentIndex > 0
            ? lessons[currentIndex - 1]
            : null;

    const nextLesson =
        currentIndex < lessons.length - 1
            ? lessons[currentIndex + 1]
            : null;
            return (

    <>

        <Navbar />

        <div className="lesson-page">

            <aside className="lesson-sidebar">

                <h2>

                    {data.icon} {data.title}

                </h2>

                {

                    lessons.map(item=>{

                        const unlocked =
                            isLessonUnlocked(
                                course,
                                item.id
                            );

                        return(

                            <div

                                key={item.id}

                                className={`lesson-menu ${
                                    item.id===lesson.id
                                        ? "active"
                                        : ""
                                } ${
                                    !unlocked
                                        ? "locked"
                                        : ""
                                }`}

                                onClick={()=>{

                                    if(unlocked){

                                        navigate(

                                            `/academy/${course}/lesson/${item.id}`

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

                                {

                                    unlocked
                                        ? "🔓"
                                        : "🔒"

                                }

                                {" "}

                                {item.title}

                            </div>

                        );

                    })

                }

            </aside>

            <main className="lesson-content">
                <h1>

    {lesson.title}

</h1>

<p>

    {lesson.content}

</p>

<div className="lesson-box">

    <h2>

        📖 What you will learn

    </h2>

    <ul>

        {

            lesson.objectives.map(

                (item,index)=>(

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

<div
    style={{
        marginTop:"60px"
    }}
>

 <Quiz
    questions={
        data.quiz[lesson.id] || []
    }
/>

</div>
<div className="buttons">

    <button
        disabled={!previousLesson}
        onClick={() => {

            if (previousLesson) {

                navigate(
                    `/academy/${course}/lesson/${previousLesson.id}`
                );

            }

        }}
    >

        ← Previous

    </button>

    <button
        onClick={() => {

    playClick();

    if (nextLesson) {

        navigate(
            `/academy/${course}/lesson/${nextLesson.id}`
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
                course,
                nextLesson
                    ? nextLesson.id
                    : lesson.id
            );

                completeLesson(
    course,
    lesson.id,
    lesson.xp
);

playComplete();

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
                `/academy/${course}/lesson/${nextLesson.id}`
            );

        } else {

            navigate(
                `/academy/${course}/final`
            );

        }

    }}
/>

</>

);

}

export default LessonTemplate;