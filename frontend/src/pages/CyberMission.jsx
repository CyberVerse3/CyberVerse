import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./CyberMission.css";

// ============================================================
// CYBERVERSE — CYBER MISSION
// ============================================================

function CyberMission() {

    const navigate = useNavigate();

    // ========================================================
    // START MISSION
    // ========================================================

    function startMission() {
        navigate("/cyber-mission/map");
    }

    // ========================================================
    // RENDER
    // ========================================================

    return (
        <div className="cyber-mission-page">

            <Navbar />

            <main className="cyber-mission-home">

                {/* ================================================= */}
                {/* HERO */}
                {/* ================================================= */}

                <section className="cyber-mission-hero">

                    <div className="cyber-mission-icon">
                        🕶️
                    </div>

                    <div className="cyber-mission-label">
                        CYBERVERSE // CLASSIFIED OPERATION
                    </div>

                    <h1>
                        CYBER
                        <span>MISSION</span>
                    </h1>

                    <div className="cyber-mission-line" />

                    <p className="cyber-mission-subtitle">
                        CyberVerse needs your help.
                        A cyber attack is currently underway.
                    </p>

                    <p className="cyber-mission-description">
                        Investigate suspicious activity, analyze
                        threats, make critical decisions, and
                        protect CyberVerse from the attackers.
                    </p>

                    {/* ================================================= */}
                    {/* START BUTTON */}
                    {/* ================================================= */}

                    <button
                        className="cyber-mission-start"
                        onClick={startMission}
                    >
                        <span className="cyber-mission-start-icon">
                            ▶
                        </span>

                        START MISSION
                    </button>

                </section>


                {/* ================================================= */}
                {/* QUICK ACTIONS */}
                {/* ================================================= */}

                <section className="cyber-mission-actions">

                    <button
                        className="cyber-mission-action"
                        onClick={() =>
                            navigate(
                                "/cyber-mission/how-to-play"
                            )
                        }
                    >

                        <span className="cyber-mission-action-icon">
                            📖
                        </span>

                        <span>
                            <strong>
                                How to Play
                            </strong>

                            <small>
                                Learn how the mission works
                            </small>
                        </span>

                        <b>
                            →
                        </b>

                    </button>


                    <button
                        className="cyber-mission-action"
                        onClick={() =>
                            navigate(
                                "/cyber-mission/achievements"
                            )
                        }
                    >

                        <span className="cyber-mission-action-icon">
                            🏆
                        </span>

                        <span>
                            <strong>
                                Achievements
                            </strong>

                            <small>
                                View your mission badges
                            </small>
                        </span>

                        <b>
                            →
                        </b>

                    </button>

                </section>


                {/* ================================================= */}
                {/* MISSION STATUS */}
                {/* ================================================= */}

                <section className="cyber-mission-status">

                    <div className="cyber-mission-status-card">

                        <span className="status-icon">
                            🎯
                        </span>

                        <div>
                            <strong>
                                5
                            </strong>

                            <small>
                                Missions
                            </small>
                        </div>

                    </div>


                    <div className="cyber-mission-status-card">

                        <span className="status-icon">
                            ⚡
                        </span>

                        <div>
                            <strong>
                                XP
                            </strong>

                            <small>
                                Earn rewards
                            </small>
                        </div>

                    </div>


                    <div className="cyber-mission-status-card">

                        <span className="status-icon">
                            🛡️
                        </span>

                        <div>
                            <strong>
                                1
                            </strong>

                            <small>
                                Mission Unlocked
                            </small>
                        </div>

                    </div>

                </section>


                {/* ================================================= */}
                {/* WARNING */}
                {/* ================================================= */}

                <div className="cyber-mission-warning">

                    <span>
                        ⚠️
                    </span>

                    <p>
                        <strong>
                            SECURITY ALERT:
                        </strong>{" "}
                        This simulation contains timed
                        challenges and critical decisions.
                        Your choices will affect the mission outcome.
                    </p>

                </div>

            </main>

        </div>
    );
}

export default CyberMission;