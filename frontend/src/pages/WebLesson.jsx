import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import "../styles/Lesson.css";

import webLessons from "../academy/lessons/web";
import webQuiz from "../academy/quizzes/webQuiz";

import Quiz from "../components/Quiz/Quiz";
import Popup from "../components/Popup/Popup";

import {
    isLessonUnlocked,
    completeLesson,
    saveCurrentLesson
} from "../utils/lessonProgress";




function WebLesson() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [showPopup,setShowPopup] = useState(false);

    const lesson =
        webLessons.find(
            item => item.id === Number(id)
        ) || webLessons[0];

    const currentIndex =
        webLessons.findIndex(
            item => item.id === Number(id)
        );

    const previousLesson =
        currentIndex > 0
            ? webLessons[currentIndex-1]
            : null;

    const nextLesson =
        currentIndex < webLessons.length-1
            ? webLessons[currentIndex+1]
            : null;

    return(

        <>

            <Navbar/>

            <div className="lesson-page">

                <aside className="lesson-sidebar">

                    <h2>🕷️ Web Security</h2>

                    {

                        webLessons.map(item=>{

                            const unlocked =
                                isLessonUnlocked(item.id);

                            return(

                                <div

                                    key={item.id}

                                    className={`lesson-menu ${
                                        item.id===lesson.id
                                        ?"active":""
                                    } ${
                                        !unlocked
                                        ?"locked":""
                                    }`}

                                    onClick={()=>{

                                        if(unlocked){

                                            navigate(
                                                `/academy/web/lesson/${item.id}`
                                            );

                                        }

                                    }}

                                    style={{
                                        cursor:
                                        unlocked
                                        ?"pointer"
                                        :"not-allowed"
                                    }}

                                >

                                    {

                                        unlocked
                                        ?"🔓"
                                        :"🔒"

                                    }

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

                    <div style={{marginTop:"60px"}}>

                        <Quiz
                            questions={webQuiz}
                        />

                    </div>

                    <div className="buttons">

                        <button

                            disabled={!previousLesson}

                            onClick={()=>{

                                if(previousLesson){

                                    navigate(
                                        `/academy/web/lesson/${previousLesson.id}`
                                    );

                                }

                            }}

                        >

                            ← Previous

                        </button>

                        <button

                            disabled={!nextLesson}

                            onClick={()=>{

                                if(nextLesson){

                                    navigate(
                                        `/academy/web/lesson/${nextLesson.id}`
                                    );

                                }

                            }}

                        >

                            Next →

                        </button>

                        <button

                            className="complete-btn"

                            onClick={()=>{

                                saveCurrentLesson(

                                    nextLesson
                                    ?nextLesson.id
                                    :lesson.id

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

                onClose={()=>{

                    setShowPopup(false);

                    if(nextLesson){

                        navigate(
                            `/academy/web/lesson/${nextLesson.id}`
                        );

                    }else{

                        navigate(
                            "/academy/web/final"
                        );

                    }

                }}

            />

        </>

    );

}

export default WebLesson;