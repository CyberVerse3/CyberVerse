import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import cyberMissionConfig from "../data/cyberMissionConfig";

import {
    getAchievements,
    getMissionData,
} from "../utils/cyberMissionSystem";

import "./CyberMissionAchievements.css";

// ============================================================
// CYBERVERSE — CYBER MISSION ACHIEVEMENTS
// ============================================================

function CyberMissionAchievements() {

    const navigate = useNavigate();

    const achievements =
        getAchievements();

    // ========================================================
    // BUILD ACHIEVEMENT LIST
    // ========================================================

    const achievementList = [];

    cyberMissionConfig.forEach(
        mission => {

            const missionId =
                mission.id;

            // Mission completion
            achievementList.push({
                id:
                    `mission_${missionId}`,

                missionId,

                type:
                    "completion",

                icon:
                    "🏆",

                title:
                    `MISSION ${String(
                        missionId
                    ).padStart(2, "0")} COMPLETED`,

                description:
                    `Successfully complete Mission ${missionId}.`,
            });

            // Bronze
            achievementList.push({
                id:
                    `mission_${missionId}_bronze`,

                missionId,

                type:
                    "bronze",

                icon:
                    "🥉",

                title:
                    `MISSION ${String(
                        missionId
                    ).padStart(2, "0")} BRONZE`,

                description:
                    `Complete Mission ${missionId} with the required Accuracy.`,
            });

            // Silver
            achievementList.push({
                id:
                    `mission_${missionId}_silver`,

                missionId,

                type:
                    "silver",

                icon:
                    "🥈",

                title:
                    `MISSION ${String(
                        missionId
                    ).padStart(2, "0")} SILVER`,

                description:
                    `Achieve 85% Accuracy or higher in Mission ${missionId}.`,
            });

            // Gold
            achievementList.push({
                id:
                    `mission_${missionId}_gold`,

                missionId,

                type:
                    "gold",

                icon:
                    "🥇",

                title:
                    `MISSION ${String(
                        missionId
                    ).padStart(2, "0")} GOLD`,

                description:
                    `Achieve 100% Accuracy in Mission ${missionId}.`,
            });

        }
    );

    // ========================================================
    // STATS
    // ========================================================

    const earnedCount =
        achievementList.filter(
            achievement =>
                achievements.includes(
                    achievement.id
                )
        ).length;

    const totalCount =
        achievementList.length;

    const progress =
        totalCount === 0
            ? 0
            : Math.round(
                (
                    earnedCount /
                    totalCount
                ) * 100
            );

    // ========================================================
    // GET MISSION DATA
    // ========================================================

    function getAchievementStatus(
        achievement
    ) {

        const missionData =
            getMissionData(
                achievement.missionId
            );

        const earned =
            achievements.includes(
                achievement.id
            );

        return {
            earned,
            missionData,
        };

    }

    // ========================================================
    // RENDER
    // ========================================================

    return (
        <div className="cyber-achievements-page">

            <Navbar />

            <main className="cyber-achievements-container">

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <header className="cyber-achievements-header">

                    <div className="cyber-achievements-eyebrow">
                        CYBERVERSE // OPERATIVE RECORD
                    </div>

                    <h1>
                        ACHIEVEMENTS
                    </h1>

                    <p>
                        Track your Mission accomplishments,
                        performance badges, and operational
                        milestones.
                    </p>

                </header>


                {/* ================================================= */}
                {/* OVERVIEW */}
                {/* ================================================= */}

                <section className="cyber-achievements-overview">

                    <div className="achievement-overview-stat">

                        <span>
                            🏅
                        </span>

                        <strong>
                            {earnedCount}
                        </strong>

                        <small>
                            EARNED
                        </small>

                    </div>


                    <div className="achievement-overview-stat">

                        <span>
                            🎯
                        </span>

                        <strong>
                            {totalCount}
                        </strong>

                        <small>
                            TOTAL
                        </small>

                    </div>


                    <div className="achievement-overview-stat">

                        <span>
                            📊
                        </span>

                        <strong>
                            {progress}%
                        </strong>

                        <small>
                            COMPLETE
                        </small>

                    </div>

                </section>


                {/* ================================================= */}
                {/* PROGRESS BAR */}
                {/* ================================================= */}

                <section className="cyber-achievements-progress">

                    <div className="achievement-progress-label">

                        <span>
                            ACHIEVEMENT PROGRESS
                        </span>

                        <strong>
                            {earnedCount} / {totalCount}
                        </strong>

                    </div>

                    <div className="achievement-progress-track">

                        <div
                            className="achievement-progress-fill"
                            style={{
                                width:
                                    `${progress}%`,
                            }}
                        />

                    </div>

                </section>


                {/* ================================================= */}
                {/* ACHIEVEMENT GRID */}
                {/* ================================================= */}

                <section className="cyber-achievements-section">

                    <div className="cyber-achievements-section-title">

                        <span>
                            // OPERATIONS
                        </span>

                        <h2>
                            MISSION ACHIEVEMENTS
                        </h2>

                    </div>


                    <div className="cyber-achievements-grid">

                        {achievementList.map(
                            achievement => {

                                const {
                                    earned,
                                    missionData,
                                } =
                                    getAchievementStatus(
                                        achievement
                                    );

                                return (
                                    <article
                                        key={
                                            achievement.id
                                        }
                                        className={`
                                            cyber-achievement-card
                                            ${
                                                earned
                                                    ? "achievement-earned"
                                                    : "achievement-locked"
                                            }
                                            achievement-${achievement.type}
                                        `}
                                    >

                                        {/* ICON */}

                                        <div className="achievement-icon">

                                            {earned
                                                ? achievement.icon
                                                : "🔒"}

                                        </div>


                                        {/* CONTENT */}

                                        <div className="achievement-content">

                                            <div className="achievement-status">

                                                {earned
                                                    ? "UNLOCKED"
                                                    : "LOCKED"}

                                            </div>

                                            <h3>
                                                {
                                                    achievement.title
                                                }
                                            </h3>

                                            <p>
                                                {
                                                    achievement.description
                                                }
                                            </p>


                                            {/* MISSION STATS */}

                                            {missionData.attempts > 0 && (

                                                <div className="achievement-mission-stats">

                                                    <span>
                                                        🎯{" "}
                                                        {
                                                            missionData.bestAccuracy
                                                        }%
                                                    </span>

                                                    <span>
                                                        ⭐{" "}
                                                        {
                                                            missionData.bestScore
                                                        }
                                                    </span>

                                                    <span>
                                                        🔄{" "}
                                                        {
                                                            missionData.attempts
                                                        }
                                                    </span>

                                                </div>

                                            )}

                                        </div>

                                    </article>
                                );

                            }
                        )}

                    </div>

                </section>


                {/* ================================================= */}
                {/* ACTIONS */}
                {/* ================================================= */}

                <div className="cyber-achievements-actions">

                    <button
                        className="cyber-achievements-secondary"
                        onClick={() =>
                            navigate(
                                "/cyber-mission/map"
                            )
                        }
                    >
                        ← MISSION MAP
                    </button>

                    <button
                        className="cyber-achievements-primary"
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

export default CyberMissionAchievements;