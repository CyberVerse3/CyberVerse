import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import "./CyberMissionHowToPlay.css";

// ============================================================
// CYBERVERSE — CYBER MISSION HOW TO PLAY
// ============================================================

function CyberMissionHowToPlay() {

    const navigate = useNavigate();

    return (
        <div className="cyber-how-page">

            <Navbar />

            <main className="cyber-how-container">

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <header className="cyber-how-header">

                    <div className="cyber-how-eyebrow">
                        CYBERVERSE // MISSION INTEL
                    </div>

                    <h1>
                        HOW TO <span>PLAY</span>
                    </h1>

                    <p>
                        Learn how to complete operations,
                        earn rewards, and unlock new missions.
                    </p>

                </header>


                {/* ================================================= */}
                {/* OBJECTIVE */}
                {/* ================================================= */}

                <section className="cyber-how-card cyber-how-objective">

                    <div className="cyber-how-icon">
                        🎯
                    </div>

                    <div>

                        <h2>
                            YOUR OBJECTIVE
                        </h2>

                        <p>
                            Complete each cyber operation by
                            analyzing the evidence and making
                            the correct decisions.
                        </p>

                        <p>
                            Your performance determines your
                            Accuracy, Score, XP, and Mission Badge.
                        </p>

                    </div>

                </section>


                {/* ================================================= */}
                {/* HOW MISSIONS WORK */}
                {/* ================================================= */}

                <section className="cyber-how-section">

                    <div className="cyber-how-section-title">

                        <span>
                            01
                        </span>

                        <h2>
                            MISSION FLOW
                        </h2>

                    </div>

                    <div className="cyber-how-grid">

                        <div className="cyber-how-card">

                            <div className="cyber-how-card-icon">
                                📋
                            </div>

                            <h3>
                                READ THE BRIEFING
                            </h3>

                            <p>
                                Review the mission story,
                                objective, difficulty, lives,
                                hints, and required Accuracy.
                            </p>

                        </div>


                        <div className="cyber-how-card">

                            <div className="cyber-how-card-icon">
                                🔍
                            </div>

                            <h3>
                                ANALYZE THE EVIDENCE
                            </h3>

                            <p>
                                Examine the information provided
                                in each challenge before making
                                your decision.
                            </p>

                        </div>


                        <div className="cyber-how-card">

                            <div className="cyber-how-card-icon">
                                🧠
                            </div>

                            <h3>
                                MAKE YOUR DECISION
                            </h3>

                            <p>
                                Select the answer you believe is
                                correct and submit your decision.
                            </p>

                        </div>


                        <div className="cyber-how-card">

                            <div className="cyber-how-card-icon">
                                🏆
                            </div>

                            <h3>
                                COMPLETE THE OPERATION
                            </h3>

                            <p>
                                Reach the required Accuracy to
                                successfully complete the mission
                                and unlock the next operation.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* GAME SYSTEMS */}
                {/* ================================================= */}

                <section className="cyber-how-section">

                    <div className="cyber-how-section-title">

                        <span>
                            02
                        </span>

                        <h2>
                            GAME SYSTEMS
                        </h2>

                    </div>

                    <div className="cyber-how-grid">

                        <div className="cyber-how-card">

                            <div className="cyber-how-card-icon">
                                ❤️
                            </div>

                            <h3>
                                LIVES
                            </h3>

                            <p>
                                Incorrect answers cost one life.
                                If your lives reach zero, the
                                operation fails.
                            </p>

                        </div>


                        <div className="cyber-how-card">

                            <div className="cyber-how-card-icon">
                                💡
                            </div>

                            <h3>
                                HINTS
                            </h3>

                            <p>
                                Use hints when you need additional
                                intelligence. Hints are limited and
                                affect your final Score.
                            </p>

                        </div>


                        <div className="cyber-how-card">

                            <div className="cyber-how-card-icon">
                                ⏱️
                            </div>

                            <h3>
                                TIMER
                            </h3>

                            <p>
                                Some operations have a time limit.
                                Manage your time carefully before
                                the operation expires.
                            </p>

                        </div>


                        <div className="cyber-how-card">

                            <div className="cyber-how-card-icon">
                                🎯
                            </div>

                            <h3>
                                ACCURACY
                            </h3>

                            <p>
                                Accuracy is calculated from your
                                correct answers and determines
                                whether the mission is passed.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* REWARDS */}
                {/* ================================================= */}

                <section className="cyber-how-section">

                    <div className="cyber-how-section-title">

                        <span>
                            03
                        </span>

                        <h2>
                            REWARDS
                        </h2>

                    </div>

                    <div className="cyber-how-rewards">

                        <div className="cyber-how-reward">

                            <span>
                                ⭐
                            </span>

                            <div>

                                <h3>
                                    SCORE
                                </h3>

                                <p>
                                    Earn Score from correct answers,
                                    remaining time, and efficient use
                                    of hints.
                                </p>

                            </div>

                        </div>


                        <div className="cyber-how-reward">

                            <span>
                                ⚡
                            </span>

                            <div>

                                <h3>
                                    XP
                                </h3>

                                <p>
                                    Successful missions reward XP
                                    and contribute to your CyberVerse
                                    progression.
                                </p>

                            </div>

                        </div>


                        <div className="cyber-how-reward">

                            <span>
                                🏅
                            </span>

                            <div>

                                <h3>
                                    BADGES
                                </h3>

                                <p>
                                    Your Accuracy determines the
                                    Badge earned for the operation.
                                </p>

                            </div>

                        </div>


                        <div className="cyber-how-reward">

                            <span>
                                🔓
                            </span>

                            <div>

                                <h3>
                                    NEW MISSIONS
                                </h3>

                                <p>
                                    Successfully complete an operation
                                    to unlock the next Mission.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* BADGE GUIDE */}
                {/* ================================================= */}

                <section className="cyber-how-section">

                    <div className="cyber-how-section-title">

                        <span>
                            04
                        </span>

                        <h2>
                            BADGE SYSTEM
                        </h2>

                    </div>

                    <div className="cyber-how-badges">

                        <div className="cyber-how-badge">

                            <div>
                                🥉
                            </div>

                            <h3>
                                BRONZE
                            </h3>

                            <p>
                                Meet the Mission's required
                                Accuracy.
                            </p>

                        </div>


                        <div className="cyber-how-badge">

                            <div>
                                🥈
                            </div>

                            <h3>
                                SILVER
                            </h3>

                            <p>
                                Achieve 85% Accuracy or higher.
                            </p>

                        </div>


                        <div className="cyber-how-badge">

                            <div>
                                🥇
                            </div>

                            <h3>
                                GOLD
                            </h3>

                            <p>
                                Achieve 100% Accuracy.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* TIPS */}
                {/* ================================================= */}

                <section className="cyber-how-card cyber-how-tips">

                    <div className="cyber-how-icon">
                        🧑‍💻
                    </div>

                    <div>

                        <h2>
                            ANALYST TIPS
                        </h2>

                        <ul>

                            <li>
                                Read all evidence before answering.
                            </li>

                            <li>
                                Don't waste hints unless you need them.
                            </li>

                            <li>
                                Keep an eye on your remaining lives.
                            </li>

                            <li>
                                Watch the timer during timed operations.
                            </li>

                            <li>
                                Aim for high Accuracy to earn better Badges.
                            </li>

                        </ul>

                    </div>

                </section>


                {/* ================================================= */}
                {/* ACTIONS */}
                {/* ================================================= */}

                <div className="cyber-how-actions">

                    <button
                        className="cyber-how-secondary"
                        onClick={() =>
                            navigate(
                                "/cyber-mission/map"
                            )
                        }
                    >
                        ← MISSION MAP
                    </button>

                    <button
                        className="cyber-how-primary"
                        onClick={() =>
                            navigate(
                                "/cyber-mission"
                            )
                        }
                    >
                        CYBER MISSION →
                    </button>

                </div>

            </main>

        </div>
    );
}

export default CyberMissionHowToPlay;