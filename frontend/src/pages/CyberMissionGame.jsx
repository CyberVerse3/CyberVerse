import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import cyberMissionConfig from "../data/cyberMissionConfig";

import {
    completeMission,
    calculateAccuracy,
    calculateMissionScore,
    isMissionUnlocked,
    getMissionData,
} from "../utils/cyberMissionSystem";

import "./CyberMissionGame.css";

// ============================================================
// CYBERVERSE — CYBER MISSION GAME
// ============================================================

function CyberMissionGame() {

    const navigate = useNavigate();
    const { missionId } = useParams();

    // ========================================================
    // FIND MISSION
    // ========================================================

    const mission = useMemo(() => {

        return cyberMissionConfig.find(
            item =>
                Number(item.id) ===
                Number(missionId)
        );

    }, [missionId]);

    // ========================================================
    // GAME STATE
    // ========================================================

    const [started, setStarted] =
        useState(false);

    const [currentChallenge, setCurrentChallenge] =
        useState(0);

    const [selectedAnswer, setSelectedAnswer] =
        useState(null);

    const [answered, setAnswered] =
        useState(false);

    const [correctAnswers, setCorrectAnswers] =
        useState(0);

    const [wrongAnswers, setWrongAnswers] =
        useState(0);

    const [score, setScore] =
        useState(0);

    const [hints, setHints] =
        useState(
            mission?.hints ?? 3
        );

    const [lives, setLives] =
        useState(
            mission?.lives ?? 3
        );

    const [timeLeft, setTimeLeft] =
        useState(
            mission?.timer?.seconds ?? 0
        );

    const [hintVisible, setHintVisible] =
        useState(false);

    const [gameFinished, setGameFinished] =
        useState(false);

    const [missionPassed, setMissionPassed] =
        useState(false);

    const [showEvent, setShowEvent] =
        useState(false);

    const [eventMessage, setEventMessage] =
        useState("");

    // ========================================================
    // CURRENT CHALLENGE
    // ========================================================

    const challenge =
        mission?.challenges?.[
            currentChallenge
        ];

    // ========================================================
    // PROGRESS
    // ========================================================

    const totalChallenges =
        mission?.challenges?.length || 0;

    const progress =
        totalChallenges === 0
            ? 0
            : Math.round(
                (
                    currentChallenge /
                    totalChallenges
                ) * 100
            );

    // ========================================================
    // MISSION NOT FOUND
    // ========================================================

    if (!mission) {

        return (
            <div className="cyber-game-page">

                <Navbar />

                <main className="cyber-game-error">

                    <div className="cyber-game-error-icon">
                        ⚠️
                    </div>

                    <h1>
                        MISSION NOT FOUND
                    </h1>

                    <p>
                        The requested operation does not exist.
                    </p>

                    <button
                        onClick={() =>
                            navigate(
                                "/cyber-mission/map"
                            )
                        }
                    >
                        ← BACK TO MISSION MAP
                    </button>

                </main>

            </div>
        );
    }

    // ========================================================
    // CHECK UNLOCK
    // ========================================================

    const unlocked =
        isMissionUnlocked(
            mission.id
        );

    if (!unlocked) {

        return (
            <div className="cyber-game-page">

                <Navbar />

                <main className="cyber-game-error">

                    <div className="cyber-game-error-icon">
                        🔒
                    </div>

                    <h1>
                        MISSION LOCKED
                    </h1>

                    <p>
                        Complete the previous operation
                        before accessing this mission.
                    </p>

                    <button
                        onClick={() =>
                            navigate(
                                "/cyber-mission/map"
                            )
                        }
                    >
                        ← BACK TO MISSION MAP
                    </button>

                </main>

            </div>
        );
    }

    // ========================================================
    // RESET MISSION
    // ========================================================

    function resetMission() {

        setStarted(false);

        setCurrentChallenge(0);

        setSelectedAnswer(null);

        setAnswered(false);

        setCorrectAnswers(0);

        setWrongAnswers(0);

        setScore(0);

        setHints(
            mission.hints ?? 3
        );

        setLives(
            mission.lives ?? 3
        );

        setTimeLeft(
            mission.timer?.seconds ?? 0
        );

        setHintVisible(false);

        setGameFinished(false);

        setMissionPassed(false);

        setShowEvent(false);

        setEventMessage("");
    }

    // ========================================================
    // TIMER
    // ========================================================

    useEffect(() => {

        if (!started) {
            return;
        }

        if (gameFinished) {
            return;
        }

        if (!mission.timer?.enabled) {
            return;
        }

        if (timeLeft <= 0) {

            finishMission(true);

            return;
        }

        const timer =
            setInterval(() => {

                setTimeLeft(
                    previous =>
                        previous - 1
                );

            }, 1000);

        return () =>
            clearInterval(timer);

    }, [
        started,
        gameFinished,
        timeLeft,
        mission.timer,
    ]);

    // ========================================================
    // FORMAT TIME
    // ========================================================

    function formatTime(seconds) {

        const safeSeconds =
            Math.max(
                0,
                Number(seconds) || 0
            );

        const minutes =
            Math.floor(
                safeSeconds / 60
            );

        const remainingSeconds =
            safeSeconds % 60;

        return `${String(
            minutes
        ).padStart(2, "0")}:${String(
            remainingSeconds
        ).padStart(2, "0")}`;

    }

    // ========================================================
    // START
    // ========================================================

    function startGame() {

        setStarted(true);

        setCurrentChallenge(0);

        setSelectedAnswer(null);

        setAnswered(false);

        setCorrectAnswers(0);

        setWrongAnswers(0);

        setScore(0);

        setHints(
            mission.hints ?? 3
        );

        setLives(
            mission.lives ?? 3
        );

        setTimeLeft(
            mission.timer?.seconds ?? 0
        );

        setHintVisible(false);

        setGameFinished(false);

        setMissionPassed(false);

    }

    // ========================================================
    // SELECT ANSWER
    // ========================================================

    function selectAnswer(index) {

        if (answered) {
            return;
        }

        setSelectedAnswer(index);

    }

    // ========================================================
    // SUBMIT ANSWER
    // ========================================================

    function submitAnswer() {

        if (
            selectedAnswer === null ||
            answered
        ) {
            return;
        }

        const isCorrect =
            selectedAnswer ===
            challenge.answer;

        setAnswered(true);

        if (isCorrect) {

            setCorrectAnswers(
                previous =>
                    previous + 1
            );

            setScore(
                previous =>
                    previous +
                    (
                        Number(
                            challenge.xp
                        ) || 0
                    )
            );

            // ================================================
            // EVENT
            // ================================================

            if (
                challenge.type === "event" &&
                challenge.event
            ) {

                setEventMessage(
                    challenge.event
                );

                setShowEvent(true);

            }

        } else {

            setWrongAnswers(
                previous =>
                    previous + 1
            );

            setLives(
                previous =>
                    Math.max(
                        0,
                        previous - 1
                    )
            );

        }

    }

    // ========================================================
    // NEXT CHALLENGE
    // ========================================================

    function nextChallenge() {

        setShowEvent(false);

        setEventMessage("");

        setSelectedAnswer(null);

        setAnswered(false);

        setHintVisible(false);

        // ====================================================
        // OUT OF LIVES
        // ====================================================

        if (lives <= 0) {

            finishMission(false);

            return;
        }

        // ====================================================
        // LAST CHALLENGE
        // ====================================================

        if (
            currentChallenge >=
            totalChallenges - 1
        ) {

            finishMission(false);

            return;
        }

        // ====================================================
        // NEXT
        // ====================================================

        setCurrentChallenge(
            previous =>
                previous + 1
        );

    }

    // ========================================================
    // HINT
    // ========================================================

    function useHint() {

        if (
            hints <= 0 ||
            hintVisible ||
            answered
        ) {
            return;
        }

        setHints(
            previous =>
                Math.max(
                    0,
                    previous - 1
                )
        );

        setHintVisible(true);

    }

    // ========================================================
    // FINISH MISSION
    // ========================================================

    function finishMission(
        timedOut = false
    ) {

        if (gameFinished) {
            return;
        }

        const finalCorrect =
            correctAnswers;

        const finalWrong =
            wrongAnswers;

        const finalTotal =
            totalChallenges;

        const accuracy =
            calculateAccuracy(
                finalCorrect,
                finalTotal
            );

        const requiredAccuracy =
            Number(
                mission.requiredAccuracy
            ) || 70;

        const passed =
            !timedOut &&
            lives > 0 &&
            accuracy >=
                requiredAccuracy;

        const calculatedScore =
            calculateMissionScore({

                correct:
                    finalCorrect,

                wrong:
                    finalWrong,

                hintsUsed:
                    (
                        mission.hints ??
                        3
                    ) - hints,

                timeRemaining:
                    timeLeft,

            });

        const finalScore =
            Math.max(
                score,
                calculatedScore
            );

        setScore(finalScore);

        setMissionPassed(
            passed
        );

        setGameFinished(true);

        // ====================================================
        // SAVE RESULT
        // ====================================================

        completeMission(
            mission.id,
            {
                score:
                    finalScore,

                xp:
                    passed
                        ? mission.xp
                        : Math.floor(
                            mission.xp * 0.25
                        ),

                accuracy,
requiredAccuracy:
    requiredAccuracy,
                time:
                    mission.timer?.enabled
                        ? (
                            mission.timer.seconds -
                            timeLeft
                        )
                        : 0,

                passed,

                correctAnswers:
                    finalCorrect,

                totalQuestions:
                    finalTotal,
            }
        );

    }

    // ========================================================
    // RESULTS
    // ========================================================

    function viewResults() {

        navigate(
            `/cyber-mission/results/${mission.id}`
        );

    }

    // ========================================================
    // BACK TO MAP
    // ========================================================

    function backToMap() {

        navigate(
            "/cyber-mission/map"
        );

    }

    // ========================================================
    // START SCREEN
    // ========================================================

    if (!started) {

        return (
            <div className="cyber-game-page">

                <Navbar />

                <main className="cyber-game-container">

                    <section className="cyber-game-briefing">

                        <div className="cyber-game-classified">
                            CYBERVERSE // CLASSIFIED OPERATION
                        </div>

                        <div className="cyber-game-mission-icon">
                            {mission.icon}
                        </div>

                        <div className="cyber-game-number">
                            MISSION{" "}
                            {String(
                                mission.id
                            ).padStart(2, "0")}
                        </div>

                        <h1>
                            {mission.title}
                        </h1>

                        <div className="cyber-game-difficulty">
                            {mission.difficulty}
                        </div>

                        <p className="cyber-game-description">
                            {mission.description}
                        </p>

                        <div className="cyber-game-story">

                            <div className="cyber-game-story-label">
                                MISSION BRIEFING
                            </div>

                            <p>
                                {mission.story}
                            </p>

                        </div>

                        <div className="cyber-game-info-grid">

                            <div>
                                <span>
                                    ❤️
                                </span>

                                <strong>
                                    {mission.lives}
                                </strong>

                                <small>
                                    Lives
                                </small>
                            </div>

                            <div>
                                <span>
                                    💡
                                </span>

                                <strong>
                                    {mission.hints}
                                </strong>

                                <small>
                                    Hints
                                </small>
                            </div>

                            <div>
                                <span>
                                    🎯
                                </span>

                                <strong>
                                    {mission.requiredAccuracy}%
                                </strong>

                                <small>
                                    Required
                                </small>
                            </div>

                            <div>
                                <span>
                                    ⚡
                                </span>

                                <strong>
                                    {mission.xp}
                                </strong>

                                <small>
                                    XP
                                </small>
                            </div>

                        </div>

                        {mission.timer?.enabled && (

                            <div className="cyber-game-timer-info">
                                ⏱️ TIME LIMIT{" "}
                                {formatTime(
                                    mission.timer.seconds
                                )}
                            </div>

                        )}

                        <div className="cyber-game-briefing-actions">

                            <button
                                className="cyber-game-secondary"
                                onClick={
                                    backToMap
                                }
                            >
                                ← MISSION MAP
                            </button>

                            <button
                                className="cyber-game-primary"
                                onClick={
                                    startGame
                                }
                            >
                                ▶ START MISSION
                            </button>

                        </div>

                    </section>

                </main>

            </div>
        );
    }

    // ========================================================
    // FINISHED SCREEN
    // ========================================================

    if (gameFinished) {

        const accuracy =
            calculateAccuracy(
                correctAnswers,
                totalChallenges
            );

        return (
            <div className="cyber-game-page">

                <Navbar />

                <main className="cyber-game-container">

                    <section
                        className={`
                            cyber-game-results
                            ${
                                missionPassed
                                    ? "mission-success"
                                    : "mission-failed"
                            }
                        `}
                    >

                        <div className="cyber-game-result-icon">

                            {missionPassed
                                ? "🏆"
                                : "💀"}

                        </div>

                        <div className="cyber-game-classified">
                            CYBERVERSE // OPERATION REPORT
                        </div>

                        <h1>

                            {missionPassed
                                ? "MISSION COMPLETED"
                                : "MISSION FAILED"}

                        </h1>

                        <p>

                            {missionPassed
                                ? "Excellent work, Cyber Analyst. The operation was successful."
                                : "The operation was not completed successfully. Review your decisions and try again."}

                        </p>

                        <div className="cyber-game-result-stats">

                            <div>
                                <span>
                                    ⭐
                                </span>

                                <strong>
                                    {score}
                                </strong>

                                <small>
                                    Score
                                </small>
                            </div>

                            <div>
                                <span>
                                    🎯
                                </span>

                                <strong>
                                    {accuracy}%
                                </strong>

                                <small>
                                    Accuracy
                                </small>
                            </div>

                            <div>
                                <span>
                                    ⚡
                                </span>

                                <strong>
                                    {
                                        missionPassed
                                            ? mission.xp
                                            : Math.floor(
                                                mission.xp *
                                                0.25
                                            )
                                    }
                                </strong>

                                <small>
                                    XP Earned
                                </small>
                            </div>

                            <div>
                                <span>
                                    ❤️
                                </span>

                                <strong>
                                    {lives}
                                </strong>

                                <small>
                                    Lives Left
                                </small>
                            </div>

                        </div>

                        {missionPassed && (
                            <div className="cyber-game-unlocked-message">

                                🔓 NEXT MISSION UNLOCKED

                            </div>
                        )}

                        <div className="cyber-game-result-actions">

                            <button
                                className="cyber-game-secondary"
                                onClick={
                                    backToMap
                                }
                            >
                                ← MISSION MAP
                            </button>

                            <button
                                className="cyber-game-primary"
                                onClick={
                                    resetMission
                                }
                            >
                                ↻ RETRY MISSION
                            </button>

                        </div>

                    </section>

                </main>

            </div>
        );
    }

    // ========================================================
    // GAME SCREEN
    // ========================================================

    return (
        <div className="cyber-game-page">

            <Navbar />

            <main className="cyber-game-container">

                {/* ================================================= */}
                {/* TOP HUD */}
                {/* ================================================= */}

                <section className="cyber-game-hud">

                    <div className="cyber-game-hud-left">

                        <span className="hud-mission">
                            MISSION{" "}
                            {String(
                                mission.id
                            ).padStart(2, "0")}
                        </span>

                        <strong>
                            {mission.title}
                        </strong>

                    </div>

                    <div className="cyber-game-hud-center">

                        <div className="hud-stat">
                            ⭐
                            <strong>
                                {score}
                            </strong>
                        </div>

                        <div className="hud-stat">
                            ⚡
                            <strong>
                                {mission.xp}
                            </strong>
                        </div>

                    </div>

                    <div className="cyber-game-hud-right">

                        <div className="hud-lives">

                            {Array.from(
                                {
                                    length:
                                        mission.lives
                                }
                            ).map(
                                (_, index) => (

                                    <span
                                        key={index}
                                        className={
                                            index <
                                            lives
                                                ? "life-active"
                                                : "life-lost"
                                        }
                                    >
                                        ❤️
                                    </span>

                                )
                            )}

                        </div>

                        {mission.timer?.enabled && (

                            <div
                                className={`
                                    hud-timer
                                    ${
                                        timeLeft <= 20
                                            ? "timer-danger"
                                            : ""
                                    }
                                `}
                            >
                                ⏱️{" "}
                                {formatTime(
                                    timeLeft
                                )}
                            </div>

                        )}

                    </div>

                </section>


                {/* ================================================= */}
                {/* PROGRESS */}
                {/* ================================================= */}

                <section className="cyber-game-progress">

                    <div className="progress-label">

                        <span>
                            CHALLENGE{" "}
                            {currentChallenge + 1}
                            {" / "}
                            {totalChallenges}
                        </span>

                        <span>
                            {progress}%
                        </span>

                    </div>

                    <div className="progress-track">

                        <div
                            className="progress-fill"
                            style={{
                                width:
                                    `${progress}%`,
                            }}
                        />

                    </div>

                </section>


                {/* ================================================= */}
                {/* EVENT */}
                {/* ================================================= */}

                {showEvent && eventMessage && (

                    <div className="cyber-game-event">

                        <span>
                            🚨
                        </span>

                        <div>

                            <strong>
                                NEW ALERT DETECTED
                            </strong>

                            <p>
                                {eventMessage}
                            </p>

                        </div>

                    </div>

                )}


                {/* ================================================= */}
                {/* CHALLENGE */}
                {/* ================================================= */}

                <section className="cyber-game-challenge">

                    <div className="challenge-type">
                        {challenge.type?.toUpperCase()}
                    </div>

                    <h1>
                        {challenge.title}
                    </h1>

                    {challenge.description && (

                        <p className="challenge-description">
                            {challenge.description}
                        </p>

                    )}

                    {/* ================================================= */}
                    {/* CHALLENGE DATA */}
                    {/* ================================================= */}

                    {challenge.data && (

                        <div className="challenge-data">

                            {challenge.data.sender && (

                                <div className="data-row">

                                    <span>
                                        FROM
                                    </span>

                                    <strong>
                                        {
                                            challenge.data.sender
                                        }
                                    </strong>

                                </div>

                            )}

                            {challenge.data.subject && (

                                <div className="data-row">

                                    <span>
                                        SUBJECT
                                    </span>

                                    <strong>
                                        {
                                            challenge.data.subject
                                        }
                                    </strong>

                                </div>

                            )}

                            {challenge.data.message && (

                                <div className="data-message">

                                    {
                                        challenge.data.message
                                    }

                                </div>

                            )}

                            {challenge.data.link && (

                                <div className="data-link">

                                    🔗{" "}
                                    {
                                        challenge.data.link
                                    }

                                </div>

                            )}

                            {challenge.data.filename && (

                                <div className="data-row">

                                    <span>
                                        FILE
                                    </span>

                                    <strong>
                                        {
                                            challenge.data.filename
                                        }
                                    </strong>

                                </div>

                            )}

                            {challenge.data.location && (

                                <div className="data-row">

                                    <span>
                                        LOCATION
                                    </span>

                                    <strong>
                                        {
                                            challenge.data.location
                                        }
                                    </strong>

                                </div>

                            )}

                            {challenge.data.connections && (

                                <div className="network-connections">

                                    {challenge.data.connections.map(
                                        (
                                            connection,
                                            index
                                        ) => (

                                            <div
                                                key={index}
                                                className="connection-row"
                                            >

                                                <span>
                                                    {
                                                        connection.source
                                                    }
                                                </span>

                                                <span>
                                                    →
                                                </span>

                                                <span>
                                                    {
                                                        connection.destination
                                                    }
                                                </span>

                                                <span>
                                                    :
                                                    {
                                                        connection.port
                                                    }
                                                </span>

                                                <span>
                                                    {
                                                        connection.protocol
                                                    }
                                                </span>

                                            </div>

                                        )
                                    )}

                                </div>

                            )}

                            {challenge.data.evidence && (

                                <div className="evidence-list">

                                    {challenge.data.evidence.map(
                                        (
                                            item,
                                            index
                                        ) => (

                                            <div
                                                key={index}
                                            >
                                                <span>
                                                    {index + 1}
                                                </span>

                                                {item}
                                            </div>

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                    )}


                    {/* ================================================= */}
                    {/* QUESTION */}
                    {/* ================================================= */}

                    <div className="challenge-question">

                        <div className="question-label">
                            ANALYST DECISION
                        </div>

                        <h2>
                            {challenge.question}
                        </h2>

                    </div>


                    {/* ================================================= */}
                    {/* OPTIONS */}
                    {/* ================================================= */}

                    <div className="challenge-options">

                        {challenge.options.map(
                            (
                                option,
                                index
                            ) => {

                                const correct =
                                    challenge.answer ===
                                    index;

                                const selected =
                                    selectedAnswer ===
                                    index;

                                let className =
                                    "challenge-option";

                                if (
                                    answered &&
                                    correct
                                ) {

                                    className +=
                                        " option-correct";

                                }

                                if (
                                    answered &&
                                    selected &&
                                    !correct
                                ) {

                                    className +=
                                        " option-wrong";

                                }

                                if (
                                    selected &&
                                    !answered
                                ) {

                                    className +=
                                        " option-selected";

                                }

                                return (
                                    <button
                                        key={index}
                                        className={
                                            className
                                        }
                                        onClick={() =>
                                            selectAnswer(
                                                index
                                            )
                                        }
                                        disabled={
                                            answered
                                        }
                                    >

                                        <span className="option-letter">
                                            {
                                                String.fromCharCode(
                                                    65 + index
                                                )
                                            }
                                        </span>

                                        <span className="option-text">
                                            {option}
                                        </span>

                                        {answered &&
                                            correct && (
                                                <span>
                                                    ✓
                                                </span>
                                            )}

                                        {answered &&
                                            selected &&
                                            !correct && (
                                                <span>
                                                    ✕
                                                </span>
                                            )}

                                    </button>
                                );

                            }
                        )}

                    </div>


                    {/* ================================================= */}
                    {/* HINT */}
                    {/* ================================================= */}

                    <div className="challenge-tools">

                        <button
                            className="hint-button"
                            onClick={
                                useHint
                            }
                            disabled={
                                hints <= 0 ||
                                hintVisible ||
                                answered
                            }
                        >
                            💡 HINT
                            {" "}
                            ({hints})
                        </button>

                        {hintVisible && (

                            <div className="hint-box">

                                <strong>
                                    💡 INTELLIGENCE TIP
                                </strong>

                                <p>
                                    {challenge.hint}
                                </p>

                            </div>

                        )}

                    </div>


                    {/* ================================================= */}
                    {/* FEEDBACK */}
                    {/* ================================================= */}

                    {answered && (

                        <div
                            className={`
                                challenge-feedback
                                ${
                                    selectedAnswer ===
                                    challenge.answer
                                        ? "feedback-correct"
                                        : "feedback-wrong"
                                }
                            `}
                        >

                            {selectedAnswer ===
                            challenge.answer ? (
                                <>
                                    <strong>
                                        ✓ CORRECT
                                    </strong>

                                    <p>
                                        Excellent analysis.
                                        You earned{" "}
                                        {challenge.xp}
                                        {" "}XP.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <strong>
                                        ✕ INCORRECT
                                    </strong>

                                    <p>
                                        You lost one life.
                                        Review the evidence
                                        and try the next challenge.
                                    </p>
                                </>
                            )}

                        </div>

                    )}


                    {/* ================================================= */}
                    {/* ACTION */}
                    {/* ================================================= */}

                    <div className="challenge-actions">

                        {!answered ? (

                            <button
                                className="cyber-game-primary"
                                onClick={
                                    submitAnswer
                                }
                                disabled={
                                    selectedAnswer === null
                                }
                            >
                                SUBMIT DECISION →
                            </button>

                        ) : (

                            <button
                                className="cyber-game-primary"
                                onClick={
                                    nextChallenge
                                }
                            >
                                {currentChallenge >=
                                totalChallenges - 1
                                    ? "VIEW MISSION RESULT"
                                    : "NEXT CHALLENGE →"}
                            </button>

                        )}

                    </div>

                </section>

            </main>

        </div>
    );
}

export default CyberMissionGame;