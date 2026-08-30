import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import cyberMissionConfig from "../data/cyberMissionConfig";
import {
    getMissionData,
    isMissionUnlocked,
} from "../utils/cyberMissionSystem";
import "./CyberMissionMap.css";

// ============================================================
// CYBERVERSE — CYBER MISSION MAP
// ============================================================

function CyberMissionMap() {

    const navigate = useNavigate();

    // ========================================================
    // OPEN MISSION
    // ========================================================

    function openMission(mission) {

        if (!isMissionUnlocked(mission.id)) {
            return;
        }

        navigate(
            `/cyber-mission/play/${mission.id}`
        );
    }

    // ========================================================
    // GO BACK
    // ========================================================

    function goBack() {

        navigate("/cyber-mission");

    }

    // ========================================================
    // RENDER MISSION CARD
    // ========================================================

    function renderMission(mission, index) {

        const missionData =
            getMissionData(mission.id);

        const unlocked =
    isMissionUnlocked(
        mission.id
    );

        const completed =
            missionData.completed;

        const isFinal =
            mission.id === 5;

        return (
            <div
                key={mission.id}
                className={`
                    cyber-map-node-wrapper
                    ${unlocked ? "unlocked" : "locked"}
                    ${completed ? "completed" : ""}
                    ${isFinal ? "final-mission" : ""}
                `}
            >

                {/* ================================================= */}
                {/* CONNECTOR */}
                {/* ================================================= */}

                {index <
                    cyberMissionConfig.length - 1 && (
                    <div
                        className={`
                            cyber-map-connector
                            ${completed ? "active" : ""}
                        `}
                    />
                )}

                {/* ================================================= */}
                {/* MISSION CARD */}
                {/* ================================================= */}

                <button
                    className="cyber-map-mission"
                    onClick={() =>
                        openMission(mission)
                    }
                    disabled={!unlocked}
                >

                    {/* ================================================= */}
                    {/* NODE */}
                    {/* ================================================= */}

                    <div className="cyber-map-node">

                        {completed ? (
                            <span>✓</span>
                        ) : unlocked ? (
                            <span>
                                {mission.icon}
                            </span>
                        ) : (
                            <span>🔒</span>
                        )}

                    </div>

                    {/* ================================================= */}
                    {/* MISSION NUMBER */}
                    {/* ================================================= */}

                    <div className="cyber-map-number">

                        {isFinal
                            ? "FINAL OPERATION"
                            : `MISSION ${String(
                                mission.id
                            ).padStart(2, "0")}`}

                    </div>

                    {/* ================================================= */}
                    {/* TITLE */}
                    {/* ================================================= */}

                    <h2>
                        {mission.title}
                    </h2>

                    {/* ================================================= */}
                    {/* DESCRIPTION */}
                    {/* ================================================= */}

                    <p>
                        {mission.description}
                    </p>

                    {/* ================================================= */}
                    {/* META */}
                    {/* ================================================= */}

                    <div className="cyber-map-meta">

                        <span>
                            ⚡ {mission.xp} XP
                        </span>

                        <span>
                            🎯{" "}
                            {mission.challenges.length}{" "}
                            Challenges
                        </span>

                    </div>

                    {/* ================================================= */}
                    {/* STATUS */}
                    {/* ================================================= */}

                    <div className="cyber-map-status">

                        {completed ? (

                            <>
                                <span>
                                    ✓
                                </span>

                                MISSION COMPLETED
                            </>

                        ) : unlocked ? (

                            <>
                                <span>
                                    ▶
                                </span>

                                START MISSION
                            </>

                        ) : (

                            <>
                                <span>
                                    🔒
                                </span>

                                LOCKED
                            </>

                        )}

                    </div>

                    {/* ================================================= */}
                    {/* BEST SCORE */}
                    {/* ================================================= */}

                    {completed && (
                        <div className="cyber-map-best">

                            <div>
                                <small>
                                    BEST SCORE
                                </small>

                                <strong>
                                    {
                                        missionData.bestScore
                                    }
                                </strong>
                            </div>

                            <div>
                                <small>
                                    ACCURACY
                                </small>

                                <strong>
                                    {
                                        missionData.bestAccuracy
                                    }%
                                </strong>
                            </div>

                        </div>
                    )}

                </button>

            </div>
        );
    }

    // ========================================================
    // RENDER
    // ========================================================

    return (
        <div className="cyber-mission-map-page">

            <Navbar />

            <main className="cyber-mission-map">

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <header className="cyber-map-header">

                    <button
                        className="cyber-map-back"
                        onClick={goBack}
                    >
                        ← Back
                    </button>

                    <div className="cyber-map-eyebrow">
                        CYBERVERSE // OPERATIONS CENTER
                    </div>

                    <h1>
                        MISSION
                        <span>MAP</span>
                    </h1>

                    <p>
                        Choose your operation.
                        Complete each mission to unlock
                        the next stage.
                    </p>

                </header>


                {/* ================================================= */}
                {/* OBJECTIVE */}
                {/* ================================================= */}

                <section className="cyber-map-objective">

                    <div className="cyber-map-objective-icon">
                        🎯
                    </div>

                    <div>

                        <strong>
                            PRIMARY OBJECTIVE
                        </strong>

                        <p>
                            Stop the cyber attack and
                            protect CyberVerse.
                        </p>

                    </div>

                </section>


                {/* ================================================= */}
                {/* MAP */}
                {/* ================================================= */}

                <section className="cyber-map-path">

                    {cyberMissionConfig.map(
                        (mission, index) =>
                            renderMission(
                                mission,
                                index
                            )
                    )}

                </section>


                {/* ================================================= */}
                {/* FOOTER */}
                {/* ================================================= */}

                <footer className="cyber-map-footer">

                    <span>
                        ⚠️
                    </span>

                    <p>
                        Some operations are classified
                        until the previous mission has
                        been successfully completed.
                    </p>

                </footer>

            </main>

        </div>
    );
}

export default CyberMissionMap;