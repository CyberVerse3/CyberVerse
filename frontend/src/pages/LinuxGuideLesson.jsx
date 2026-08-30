import { useState } from "react";
import {
    Link,
    useParams,
    useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import linuxGuideConfig from "../linuxGuide/config/linuxGuideConfig";

import {
    completeLesson,
    isLessonCompleted,
} from "../linuxGuide/utils/linuxGuideProgress";

import "../styles/linuxGuideLesson.css";

function LinuxGuideLesson() {

    // =========================================
    // ROUTER
    // =========================================

    const { lessonId } = useParams();

    const navigate = useNavigate();

    // =========================================
    // LESSON ID
    // =========================================

    const lessonNumber = Number(lessonId);

    // =========================================
    // ALL LESSONS
    // =========================================

    const allLessons = linuxGuideConfig.flatMap(
        (module) =>
            module.lessons.map((lesson) => ({
                ...lesson,
                moduleId: module.id,
                moduleTitle: module.title,
            }))
    );

    // =========================================
    // FIND CURRENT LESSON
    // =========================================

    const lessonIndex = allLessons.findIndex(
        (lesson) =>
            Number(lesson.id) === lessonNumber
    );

    const lesson =
        lessonIndex !== -1
            ? allLessons[lessonIndex]
            : null;

    // =========================================
    // COMPLETED STATE
    // =========================================

    const [completed, setCompleted] = useState(
        () =>
            lesson
                ? isLessonCompleted(lesson.id)
                : false
    );

    // =========================================
    // PREVIOUS LESSON
    // =========================================

    const previousLesson =
        lessonIndex > 0
            ? allLessons[lessonIndex - 1]
            : null;

    // =========================================
    // NEXT LESSON
    // =========================================

    const nextLesson =
        lessonIndex !== -1 &&
        lessonIndex < allLessons.length - 1
            ? allLessons[lessonIndex + 1]
            : null;

    // =========================================
    // COMPLETE LESSON
    // =========================================

    function handleComplete() {

        if (!lesson) {
            return;
        }

        if (completed) {
            return;
        }

        completeLesson(
            lesson.id,
            lesson.xp
        );

        setCompleted(true);
    }

    // =========================================
    // NEXT LESSON
    // =========================================

    function handleNextLesson() {

        if (!completed) {
            return;
        }

        if (!nextLesson) {

            navigate(
                "/linux-guide"
            );

            return;
        }

        navigate(
            `/linux-guide/lesson/${nextLesson.id}`
        );
    }

    // =========================================
    // LESSON NOT FOUND
    // =========================================

    if (!lesson) {

        return (
            <>
                <Navbar />

                <main className="linux-lesson-page">

                    <section className="linux-lesson-not-found">

                        <div className="linux-lesson-not-found-icon">
                            🐧
                        </div>

                        <h1>
                            Lesson Not Found
                        </h1>

                        <p>
                            This Linux Guide lesson
                            does not exist.
                        </p>

                        <Link
                            to="/linux-guide"
                            className="linux-lesson-back-btn"
                        >
                            ← Back to Linux Guide
                        </Link>

                    </section>

                </main>
            </>
        );
    }

    // =========================================
    // LESSON CONTENT
    // =========================================

    const content = lesson.content;

    // =========================================
    // RENDER
    // =========================================

    return (
        <>
            <Navbar />

            <main className="linux-lesson-page">

                {/* =================================
                    TOP BAR
                ================================= */}

                <div className="linux-lesson-topbar">

                    <Link
                        to="/linux-guide"
                        className="linux-lesson-back"
                    >
                        ← Linux Guide
                    </Link>

                    <span>
                        Module {lesson.moduleId}
                    </span>

                </div>


                {/* =================================
                    PROGRESS
                ================================= */}

                <div className="linux-lesson-progress">

                    <div className="linux-lesson-progress-info">

                        <span>
                            Lesson {lessonIndex + 1}
                        </span>

                        <span>
                            {allLessons.length} Lessons
                        </span>

                    </div>

                    <div className="linux-lesson-progress-bar">

                        <div
                            style={{
                                width: `${
                                    ((lessonIndex + 1) /
                                        allLessons.length) *
                                    100
                                }%`,
                            }}
                        />

                    </div>

                </div>


                {/* =================================
                    HEADER
                ================================= */}

                <section className="linux-lesson-header">

                    <span className="linux-lesson-module">

                        {lesson.moduleId === 1 && "🐧"}
                        {lesson.moduleId === 2 && "💿"}
                        {lesson.moduleId === 3 && "⚔️"}
                        {lesson.moduleId === 4 && "💻"}
                        {lesson.moduleId === 5 && "⌨️"}
                        {lesson.moduleId === 6 && "📁"}
                        {lesson.moduleId === 7 && "🔐"}
                        {lesson.moduleId === 8 && "⚙️"}
                        {lesson.moduleId === 9 && "🌐"}
                        {lesson.moduleId === 10 && "🛡️"}

                        {" "}

                        {lesson.moduleTitle}

                    </span>


                    <h1>
                        {lesson.title}
                    </h1>


                    <p>
                        {content.introduction}
                    </p>


                    <div className="linux-lesson-meta">

                        <span>
                            ⚡ {lesson.xp} XP
                        </span>

                        <span>
                            📖 Beginner
                        </span>

                        <span>
                            ⏱️ 5 min
                        </span>

                    </div>

                </section>


                {/* =================================
                    CONTENT
                ================================= */}

                <section className="linux-lesson-content">

                    {/* =================================
                        LESSON SECTIONS
                    ================================= */}

                    {content.sections?.map(
                        (section, index) => (

                            <article
                                className="linux-lesson-card"
                                key={index}
                            >

                                <h2>
                                    {section.title}
                                </h2>

                                <p>
                                    {section.text}
                                </p>

                            </article>

                        )
                    )}


                    {/* =================================
                        KEY POINTS
                    ================================= */}

                    {content.keyPoints?.length > 0 && (

                        <article className="linux-lesson-card">

                            <h2>
                                🧠 Key Points
                            </h2>

                            <ul className="linux-lesson-list">

                                {content.keyPoints.map(
                                    (point, index) => (

                                        <li key={index}>
                                            {point}
                                        </li>

                                    )
                                )}

                            </ul>

                        </article>

                    )}


                    {/* =================================
                        COMMANDS
                    ================================= */}

                    {content.commands?.length > 0 && (

                        <article className="linux-lesson-card">

                            <h2>
                                💻 Practice Commands
                            </h2>

                            <p>
                                Try these commands in the
                                CyberVerse Terminal.
                            </p>

                            <div className="linux-lesson-commands">

                                {content.commands.map(
                                    (command, index) => (

                                        <code key={index}>
                                            {command}
                                        </code>

                                    )
                                )}

                            </div>

                        </article>

                    )}


                    {/* =================================
                        KNOWLEDGE CHECK
                    ================================= */}

                    <article className="linux-lesson-check">

                        <div>

                            <span>
                                🧠 KNOWLEDGE CHECK
                            </span>

                            <h2>
                                Ready to continue?
                            </h2>

                            <p>
                                Complete this lesson after
                                understanding the material.
                            </p>

                        </div>


                        <button
                            className={
                                completed
                                    ? "linux-lesson-complete completed"
                                    : "linux-lesson-complete"
                            }
                            onClick={handleComplete}
                            disabled={completed}
                        >

                            {completed
                                ? "✓ Completed"
                                : `Complete Lesson +${lesson.xp} XP`}

                        </button>

                    </article>

                </section>


                {/* =================================
                    NAVIGATION
                ================================= */}

                <div className="linux-lesson-navigation">

                    {/* PREVIOUS */}

                    {previousLesson ? (

                        <Link
                            to={`/linux-guide/lesson/${previousLesson.id}`}
                            className="linux-lesson-nav-btn"
                        >
                            ← Previous
                        </Link>

                    ) : (

                        <Link
                            to="/linux-guide"
                            className="linux-lesson-nav-btn"
                        >
                            ← Linux Guide
                        </Link>

                    )}


                    {/* NEXT */}

                    {nextLesson ? (

                        <button
                            type="button"
                            className={
                                completed
                                    ? "linux-lesson-nav-btn next"
                                    : "linux-lesson-nav-btn next disabled"
                            }
                            onClick={handleNextLesson}
                            disabled={!completed}
                        >

                            {completed
                                ? "Next Lesson →"
                                : "Complete Lesson First →"}

                        </button>

                    ) : (

                        <button
                            type="button"
                            className="linux-lesson-nav-btn next"
                            onClick={() =>
                                navigate(
                                    "/linux-guide"
                                )
                            }
                        >
                            Finish Guide 🎉
                        </button>

                    )}

                </div>

            </main>
        </>
    );
}

export default LinuxGuideLesson;