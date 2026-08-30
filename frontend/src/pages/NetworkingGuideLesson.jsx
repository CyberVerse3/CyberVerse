import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import networkingGuideConfig from "../data/networkingGuideConfig";
import { addXP } from "../utils/xpSystem";
import "./NetworkingGuideLesson.css";

// ============================================================
// NETWORKING GUIDE LESSON
// ============================================================

function NetworkingGuideLesson() {

    const { lessonId } = useParams();
    const navigate = useNavigate();

    const id = Number(lessonId);

    // ========================================================
    // FIND LESSON
    // ========================================================

    let currentLesson = null;
    let currentModule = null;

    networkingGuideConfig.forEach((module) => {

        const foundLesson = module.lessons.find(
            (lesson) => lesson.id === id
        );

        if (foundLesson) {
            currentLesson = foundLesson;
            currentModule = module;
        }

    });

    // ========================================================
    // INVALID LESSON
    // ========================================================

    if (!currentLesson) {

        return (
            <div className="networking-lesson-page">

                <Navbar />

                <main className="networking-lesson-container">

                    <div className="networking-error">

                        <h1>
                            Lesson Not Found
                        </h1>

                        <p>
                            The requested networking lesson
                            does not exist.
                        </p>

                        <button
                            onClick={() =>
                                navigate(
                                    "/networking-guide"
                                )
                            }
                        >
                            Back to Networking Guide
                        </button>

                    </div>

                </main>

            </div>
        );

    }

    // ========================================================
    // STATE
    // ========================================================

    const [selectedAnswers, setSelectedAnswers] =
        useState({});

    const [quizFinished, setQuizFinished] =
        useState(false);

    const [quizScore, setQuizScore] =
        useState(0);

    const [lessonCompleted, setLessonCompleted] =
        useState(
            localStorage.getItem(
                `networkingLesson${id}`
            ) === "true"
        );

// ========================================================
// RESET QUIZ WHEN LESSON CHANGES
// ========================================================

useEffect(() => {

    setSelectedAnswers({});
    setQuizFinished(false);
    setQuizScore(0);

}, [id]);


    // ========================================================
    // ANSWER
    // ========================================================

    function handleAnswer(
        questionIndex,
        answerIndex
    ) {

        if (quizFinished) {
            return;
        }

        setSelectedAnswers((previous) => ({
            ...previous,
            [questionIndex]: answerIndex,
        }));

    }

    // ========================================================
    // FINISH QUIZ
    // ========================================================

    function finishQuiz() {

        let score = 0;

        currentLesson.quiz.forEach(
            (question, index) => {

                if (
                    selectedAnswers[index] ===
                    question.answer
                ) {
                    score++;
                }

            }
        );

        setQuizScore(score);
        setQuizFinished(true);

    }

    // ========================================================
    // COMPLETE LESSON
    // ========================================================

    function completeLesson() {

        if (lessonCompleted) {
            return;
        }

        localStorage.setItem(
            `networkingLesson${id}`,
            "true"
        );

        addXP(currentLesson.xp);

        setLessonCompleted(true);

    }

    // ========================================================
    // NEXT LESSON
    // ========================================================

    function getNextLesson() {

        let foundCurrent = false;

        for (
            const module of networkingGuideConfig
        ) {

            for (
                const lesson of module.lessons
            ) {

                if (foundCurrent) {
                    return lesson;
                }

                if (lesson.id === id) {
                    foundCurrent = true;
                }

            }

        }

        return null;
    }

    // ========================================================
    // PREVIOUS LESSON
    // ========================================================

    function getPreviousLesson() {

        let previousLesson = null;

        for (
            const module of networkingGuideConfig
        ) {

            for (
                const lesson of module.lessons
            ) {

                if (lesson.id === id) {
                    return previousLesson;
                }

                previousLesson = lesson;

            }

        }

        return null;
    }

    const nextLesson =
        getNextLesson();

    const previousLesson =
        getPreviousLesson();

    // ========================================================
    // QUIZ PASSED
    // ========================================================

    const quizPassed =
        currentLesson.quiz.length === 0
            ? true
            : quizScore >=
              Math.ceil(
                  currentLesson.quiz.length * 0.7
              );

    // ========================================================
    // RENDER
    // ========================================================

    return (

        <div className="networking-lesson-page">

            <Navbar />

            <main className="networking-lesson-container">

                {/* ================================================= */}
                {/* BREADCRUMB */}
                {/* ================================================= */}

                <div className="networking-breadcrumb">

                    <button
                        onClick={() =>
                            navigate(
                                "/networking-guide"
                            )
                        }
                    >
                        Networking Guide
                    </button>

                    <span>
                        /
                    </span>

                    <span>
                        Module {currentModule.id}
                    </span>

                    <span>
                        /
                    </span>

                    <span>
                        Lesson {currentLesson.id}
                    </span>

                </div>


                {/* ================================================= */}
                {/* LESSON HEADER */}
                {/* ================================================= */}

                <section className="networking-lesson-header">

                    <div className="networking-lesson-module">
                        MODULE {String(
                            currentModule.id
                        ).padStart(2, "0")}
                    </div>

                    <h1>
                        {currentLesson.title}
                    </h1>

                    <p>
                        {currentModule.description}
                    </p>

                    <div className="networking-lesson-xp-badge">
                        +{currentLesson.xp} XP
                    </div>

                </section>


                {/* ================================================= */}
                {/* CONTENT */}
                {/* ================================================= */}

                <section className="networking-content-card">

                    <h2>
                        Lesson Content
                    </h2>

                    <div className="networking-content">

                        {currentLesson.content
                            .trim()
                            .split("\n")
                            .map(
                                (paragraph, index) => {

                                    const text =
                                        paragraph.trim();

                                    if (!text) {
                                        return (
                                            <div
                                                key={index}
                                                className="networking-content-space"
                                            />
                                        );
                                    }

                                    return (
                                        <p key={index}>
                                            {text}
                                        </p>
                                    );

                                }
                            )}

                    </div>

                </section>


                {/* ================================================= */}
                {/* OBJECTIVES */}
                {/* ================================================= */}

                {currentLesson.objectives &&
                    currentLesson.objectives.length >
                    0 && (

                        <section className="networking-objectives-card">

                            <h2>
                                Learning Objectives
                            </h2>

                            <div className="networking-objectives">

                                {currentLesson.objectives.map(
                                    (
                                        objective,
                                        index
                                    ) => (

                                        <div
                                            className="networking-objective"
                                            key={index}
                                        >

                                            <span>
                                                ✓
                                            </span>

                                            <p>
                                                {objective}
                                            </p>

                                        </div>

                                    )
                                )}

                            </div>

                        </section>

                    )}


                {/* ================================================= */}
                {/* COMMANDS */}
                {/* ================================================= */}

                {currentLesson.commands &&
                    currentLesson.commands.length >
                    0 && (

                        <section className="networking-commands-card">

                            <h2>
                                Useful Commands
                            </h2>

                            <p>
                                Try these commands in
                                CyberVerse Terminal.
                            </p>

                            <div className="networking-command-list">

                                {currentLesson.commands.map(
                                    (
                                        command,
                                        index
                                    ) => (

                                        <div
                                            className="networking-command"
                                            key={index}
                                        >

                                            <span>
                                                $
                                            </span>

                                            <code>
                                                {command}
                                            </code>

                                        </div>

                                    )
                                )}

                            </div>

                        </section>

                    )}


                {/* ================================================= */}
                {/* QUIZ */}
                {/* ================================================= */}

                {currentLesson.quiz &&
                    currentLesson.quiz.length >
                    0 && (

                        <section className="networking-quiz-card">

                            <div className="networking-quiz-header">

                                <div>

                                    <span>
                                        KNOWLEDGE CHECK
                                    </span>

                                    <h2>
                                        Lesson Quiz
                                    </h2>

                                </div>

                                {!quizFinished && (
                                    <div>
                                        {
                                            currentLesson.quiz.length
                                        } Questions
                                    </div>
                                )}

                            </div>


                            {/* QUESTIONS */}

                            <div className="networking-questions">

                                {currentLesson.quiz.map(
                                    (
                                        question,
                                        questionIndex
                                    ) => (

                                        <div
                                            className="networking-question"
                                            key={questionIndex}
                                        >

                                            <h3>
                                                {questionIndex + 1}.{" "}
                                                {question.question}
                                            </h3>

                                            <div className="networking-options">

                                                {question.options.map(
                                                    (
                                                        option,
                                                        optionIndex
                                                    ) => {

                                                        const selected =
                                                            selectedAnswers[
                                                                questionIndex
                                                            ] ===
                                                            optionIndex;

                                                        const correct =
                                                            quizFinished &&
                                                            optionIndex ===
                                                            question.answer;

                                                        const wrong =
                                                            quizFinished &&
                                                            selected &&
                                                            optionIndex !==
                                                            question.answer;

                                                        return (

                                                            <button
                                                                key={optionIndex}
                                                                className={`networking-option ${
                                                                    selected
                                                                        ? "selected"
                                                                        : ""
                                                                } ${
                                                                    correct
                                                                        ? "correct"
                                                                        : ""
                                                                } ${
                                                                    wrong
                                                                        ? "wrong"
                                                                        : ""
                                                                }`}
                                                                onClick={() =>
                                                                    handleAnswer(
                                                                        questionIndex,
                                                                        optionIndex
                                                                    )
                                                                }
                                                                disabled={
                                                                    quizFinished
                                                                }
                                                            >

                                                                <span>
                                                                    {String.fromCharCode(
                                                                        65 +
                                                                        optionIndex
                                                                    )}
                                                                </span>

                                                                {option}

                                                            </button>

                                                        );

                                                    }
                                                )}

                                            </div>

                                        </div>

                                    )
                                )}

                            </div>


                            {/* QUIZ BUTTON */}

                            {!quizFinished && (

                                <button
                                    className="networking-submit-quiz"
                                    onClick={finishQuiz}
                                    disabled={
                                        Object.keys(
                                            selectedAnswers
                                        ).length !==
                                        currentLesson.quiz.length
                                    }
                                >
                                    Check Answers
                                </button>

                            )}


                            {/* QUIZ RESULT */}

                            {quizFinished && (

                                <div
                                    className={`networking-quiz-result ${
                                        quizPassed
                                            ? "passed"
                                            : "failed"
                                    }`}
                                >

                                    <h3>
                                        {quizPassed
                                            ? "Quiz Passed!"
                                            : "Try Again"}
                                    </h3>

                                    <p>
                                        Score:{" "}
                                        {quizScore} /{" "}
                                        {
                                            currentLesson.quiz.length
                                        }
                                    </p>

                                    {quizPassed ? (

                                        <p>
                                            Great work! You
                                            passed the knowledge
                                            check.
                                        </p>

                                    ) : (

                                        <p>
                                            You need at least
                                            70% to pass this
                                            quiz.
                                        </p>

                                    )}

                                </div>

                            )}

                        </section>

                    )}


                {/* ================================================= */}
                {/* COMPLETE */}
                {/* ================================================= */}

                <section className="networking-complete-section">

                    {!lessonCompleted ? (

                        <button
                            className="networking-complete-button"
                            onClick={completeLesson}
                            disabled={
                                currentLesson.quiz.length >
                                    0 &&
                                !quizPassed
                            }
                        >
                            {currentLesson.quiz.length > 0 &&
                            !quizPassed
                                ? "Pass Quiz to Complete"
                                : "Complete Lesson"}
                        </button>

                    ) : (

                        <div className="networking-completed-message">
                            ✓ Lesson Completed
                        </div>

                    )}

                </section>


                {/* ================================================= */}
                {/* NAVIGATION */}
                {/* ================================================= */}

                <div className="networking-lesson-navigation">

                    {previousLesson ? (

                        <button
                            onClick={() =>
                                navigate(
                                    `/networking-guide/${previousLesson.id}`
                                )
                            }
                        >
                            ← Previous Lesson
                        </button>

                    ) : (
                        <div />
                    )}


                    {nextLesson ? (

                        <button
                            className="next"
                            disabled={!lessonCompleted}
                            onClick={() =>
                                navigate(
                                    `/networking-guide/${nextLesson.id}`
                                )
                            }
                        >
                            Next Lesson →
                        </button>

                    ) : (

                        <button
                            className="next"
                            onClick={() =>
                                navigate(
                                    "/networking-guide"
                                )
                            }
                        >
                            Finish Guide
                        </button>

                    )}

                </div>

            </main>

        </div>

    );

}

export default NetworkingGuideLesson;