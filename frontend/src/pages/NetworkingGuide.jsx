import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import networkingGuideConfig from "../data/networkingGuideConfig";
import "./NetworkingGuide.css";

// ============================================================
// NETWORKING GUIDE
// ============================================================

function NetworkingGuide() {

    const navigate = useNavigate();

    const [openModules, setOpenModules] = useState({
        1: true,
    });

    // ========================================================
    // TOGGLE MODULE
    // ========================================================

    function toggleModule(moduleId) {

        setOpenModules((prev) => ({
            ...prev,
            [moduleId]: !prev[moduleId],
        }));

    }

    // ========================================================
    // LESSON PROGRESS
    // ========================================================

    function isLessonCompleted(lessonId) {

        return (
            localStorage.getItem(
                `networkingLesson${lessonId}`
            ) === "true"
        );

    }

    // ========================================================
    // LESSON UNLOCK
    // ========================================================

    function isLessonUnlocked(moduleId, lessonId) {

        // First lesson is always unlocked
        if (moduleId === 1 && lessonId === 1) {
            return true;
        }

        // Find current module
        const currentModule =
            networkingGuideConfig.find(
                (module) => module.id === moduleId
            );

        if (!currentModule) {
            return false;
        }

        // First lesson of a module
        // requires the previous module's final lesson
        if (lessonId === currentModule.lessons[0].id) {

            const previousModule =
                networkingGuideConfig.find(
                    (module) => module.id === moduleId - 1
                );

            if (!previousModule) {
                return true;
            }

            const previousLesson =
                previousModule.lessons[
                    previousModule.lessons.length - 1
                ];

            return isLessonCompleted(
                previousLesson.id
            );
        }

        // Find previous lesson inside current module
        const lessonIndex =
            currentModule.lessons.findIndex(
                (lesson) => lesson.id === lessonId
            );

        if (lessonIndex === -1) {
            return false;
        }

        if (lessonIndex === 0) {
            return true;
        }

        const previousLesson =
            currentModule.lessons[lessonIndex - 1];

        return isLessonCompleted(
            previousLesson.id
        );
    }

    // ========================================================
    // OPEN LESSON
    // ========================================================

    function openLesson(moduleId, lessonId) {

        if (
            !isLessonUnlocked(
                moduleId,
                lessonId
            )
        ) {
            return;
        }

        navigate(
            `/networking-guide/${lessonId}`
        );

    }

    // ========================================================
    // STATISTICS
    // ========================================================

    const totalLessons =
        networkingGuideConfig.reduce(
            (total, module) =>
                total + module.lessons.length,
            0
        );

    const completedLessons =
        networkingGuideConfig.reduce(
            (total, module) =>
                total +
                module.lessons.filter(
                    (lesson) =>
                        isLessonCompleted(
                            lesson.id
                        )
                ).length,
            0
        );

    const progress =
        totalLessons === 0
            ? 0
            : Math.round(
                (completedLessons /
                    totalLessons) *
                100
            );

    // ========================================================
    // RENDER
    // ========================================================

    return (

        <div className="networking-guide-page">

            <Navbar />

            <main className="networking-guide">

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <section className="networking-guide-header">

                    <div className="networking-guide-badge">
                        NETWORKING
                    </div>

                    <h1>
                        Networking Guide
                    </h1>

                    <p>
                        Master computer networking fundamentals,
                        protocols, IP addressing, network security,
                        and practical Linux networking skills.
                    </p>

                    {/* ================================================= */}
                    {/* PROGRESS */}
                    {/* ================================================= */}

                    <div className="networking-progress-card">

                        <div className="networking-progress-info">

                            <span>
                                Your Progress
                            </span>

                            <strong>
                                {completedLessons} / {totalLessons}
                            </strong>

                        </div>

                        <div className="networking-progress-bar">

                            <div
                                className="networking-progress-fill"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>

                        <div className="networking-progress-percent">
                            {progress}% Complete
                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* MODULES */}
                {/* ================================================= */}

                <section className="networking-modules">

                    {networkingGuideConfig.map(
                        (module) => {

                            const moduleCompleted =
                                module.lessons.filter(
                                    (lesson) =>
                                        isLessonCompleted(
                                            lesson.id
                                        )
                                ).length;

                            const isOpen =
                                openModules[module.id] === true;

                            return (

                                <div
                                    className="networking-module"
                                    key={module.id}
                                >

                                    {/* ================================================= */}
                                    {/* MODULE HEADER */}
                                    {/* ================================================= */}

                                    <button
                                        className="networking-module-header"
                                        onClick={() =>
                                            toggleModule(
                                                module.id
                                            )
                                        }
                                    >

                                        <div className="networking-module-number">
                                            {String(
                                                module.id
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                        </div>

                                        <div className="networking-module-info">

                                            <h2>
                                                {module.title}
                                            </h2>

                                            <p>
                                                {module.description}
                                            </p>

                                        </div>

                                        <div className="networking-module-progress">

                                            <span>
                                                {moduleCompleted}/
                                                {module.lessons.length}
                                            </span>

                                            <span
                                                className={`networking-module-arrow ${
                                                    isOpen
                                                        ? "open"
                                                        : ""
                                                }`}
                                            >
                                                ▼
                                            </span>

                                        </div>

                                    </button>


                                    {/* ================================================= */}
                                    {/* LESSONS */}
                                    {/* ================================================= */}

                                    {isOpen && (

                                        <div className="networking-lessons">

                                            {module.lessons.map(
                                                (
                                                    lesson,
                                                    index
                                                ) => {

                                                    const completed =
                                                        isLessonCompleted(
                                                            lesson.id
                                                        );

                                                    const unlocked =
                                                        isLessonUnlocked(
                                                            module.id,
                                                            lesson.id
                                                        );

                                                    return (

                                                        <button
                                                            key={lesson.id}
                                                            className={`networking-lesson ${
                                                                completed
                                                                    ? "completed"
                                                                    : ""
                                                            } ${
                                                                !unlocked
                                                                    ? "locked"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                openLesson(
                                                                    module.id,
                                                                    lesson.id
                                                                )
                                                            }
                                                            disabled={
                                                                !unlocked
                                                            }
                                                        >

                                                            {/* Lesson number */}

                                                            <div className="networking-lesson-number">

                                                                {completed
                                                                    ? "✓"
                                                                    : String(
                                                                        index +
                                                                        1
                                                                    ).padStart(
                                                                        2,
                                                                        "0"
                                                                    )}

                                                            </div>


                                                            {/* Lesson information */}

                                                            <div className="networking-lesson-info">

                                                                <span className="networking-lesson-label">
                                                                    LESSON{" "}
                                                                    {String(
                                                                        index +
                                                                        1
                                                                    ).padStart(
                                                                        2,
                                                                        "0"
                                                                    )}
                                                                </span>

                                                                <h3>
                                                                    {
                                                                        lesson.title
                                                                    }
                                                                </h3>

                                                            </div>


                                                            {/* XP */}

                                                            <div className="networking-lesson-xp">

                                                                +
                                                                {
                                                                    lesson.xp
                                                                }{" "}
                                                                XP

                                                            </div>


                                                            {/* Status */}

                                                            <div className="networking-lesson-status">

                                                                {completed
                                                                    ? "COMPLETED"
                                                                    : unlocked
                                                                        ? "START"
                                                                        : "LOCKED"}

                                                            </div>

                                                        </button>

                                                    );

                                                }
                                            )}

                                        </div>

                                    )}

                                </div>

                            );

                        }
                    )}

                </section>

            </main>

        </div>

    );

}

export default NetworkingGuide;