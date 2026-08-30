import Navbar from "../components/Navbar";

import CategoryCard from "../components/ctf/CategoryCard";
import StatsCard from "../components/ctf/StatsCard";
import BadgeCard from "../components/ctf/BadgeCard";

import categories from "../ctf/data/categories";
import badges from "../ctf/data/badges";
import leaderboard from "../ctf/data/leaderboard";

import {
getStats,
getOverallProgress,
getEarnedBadges,
getCTFRank,
} from "../ctf/utils/ctfEngine";

import { Link } from "react-router-dom";

import { useSettings } from "../context/SettingsContext";

import "../styles/CTFDashboard.css";

function CTFDashboard() {


// =========================
// SETTINGS / TRANSLATION
// =========================

const { t } = useSettings();


// =========================
// CTF STATS
// =========================

const stats = getStats();

const score = stats.score || 0;
const xp = stats.xp || 0;

const solved = Array.isArray(stats.solved)
    ? stats.solved
    : [];


// =========================
// TOTAL CHALLENGES
// =========================

const totalChallenges = categories.reduce(
    (total, category) =>
        total + (category.totalChallenges || 0),
    0
);


// =========================
// OVERALL PROGRESS
// =========================

const progress = getOverallProgress(
    totalChallenges
);


// =========================
// EARNED BADGES
// =========================

const earnedBadges =
    getEarnedBadges();


// =========================
// CURRENT CTF RANK
// =========================

const rank =
    getCTFRank();


// =========================
// CURRENT USER
// =========================

const currentUsername =
    localStorage.getItem("username") ||
    "CyberVerse Student";


const currentPlayer = {

    id: "current-user",

    username:
        currentUsername,

    solved:
        solved.length,

    score:
        score,

    xp:
        xp,

    isCurrentUser:
        true,

};


// =========================
// LEADERBOARD
// =========================

const allPlayers = [
    ...leaderboard,
    currentPlayer,
];


allPlayers.sort(
    (a, b) =>
        (b.score || 0) -
        (a.score || 0)
);


// =========================
// CURRENT LEADERBOARD RANK
// =========================

const currentRank =
    allPlayers.findIndex(
        (player) =>
            player.id === "current-user"
    ) + 1;


// =========================
// TOP 3 PLAYERS
// =========================

const topPlayers =
    allPlayers.slice(0, 3);


return (
    <>
        <Navbar />


        <div className="ctf-dashboard">


            {/* =========================
                CTF HEADER
            ========================= */}

            <div className="ctf-header">

                <h1>
                    🏴 CyberVerse CTF
                </h1>

                <p>
                    {t(
                        "ctf",
                        "description"
                    )}
                </p>

            </div>


            {/* =========================
                STATS
            ========================= */}

            <div className="stats-grid">

                <StatsCard
                    title={t(
                        "ctf",
                        "totalScore"
                    )}
                    value={score}
                    icon="🏆"
                />


                <StatsCard
                    title={t(
                        "ctf",
                        "solvedChallenges"
                    )}
                    value={
                        `${solved.length} / ${totalChallenges}`
                    }
                    icon="🚩"
                />


                <StatsCard
                    title="XP"
                    value={xp}
                    icon="⭐"
                />


                <StatsCard
                    title={t(
                        "ctf",
                        "ctfRank"
                    )}
                    value={
                        `${rank.icon} ${rank.name}`
                    }
                    icon="🥇"
                />

            </div>


            {/* =========================
                OVERALL PROGRESS
            ========================= */}

            <div className="overall-progress">

                <div className="progress-header">

                    <div>

                        <h2>
                            {t(
                                "ctf",
                                "overallProgress"
                            )}
                        </h2>

                        <p>
                            {t(
                                "ctf",
                                "progressDescription"
                            )}
                        </p>

                    </div>


                    <strong>
                        {progress.percentage}%
                    </strong>

                </div>


                <div className="progress-bar">

                    <div
                        className="progress-fill"
                        style={{
                            width:
                                `${progress.percentage}%`,
                        }}
                    />

                </div>


                <div className="progress-footer">

                    <span>
                        🚩 {progress.solved}{" "}
                        {t(
                            "ctf",
                            "solved"
                        )}
                    </span>

                    <span>
                        🎯 {progress.total}{" "}
                        {t(
                            "ctf",
                            "totalChallenges"
                        )}
                    </span>

                </div>

            </div>


            {/* =========================
                LEADERBOARD PREVIEW
            ========================= */}

            <div className="ctf-leaderboard-preview">

                <div className="section-header">

                    <div>

                        <h2>
                            🏆{" "}
                            {t(
                                "ctf",
                                "leaderboard"
                            )}
                        </h2>

                        <p>
                            {t(
                                "ctf",
                                "topHackers"
                            )}
                        </p>

                    </div>


                    <Link
                        to="/ctf/leaderboard"
                    >
                        {t(
                            "ctf",
                            "viewFullLeaderboard"
                        )} →
                    </Link>

                </div>


                <div className="mini-leaderboard">

                    {topPlayers.map(
                        (player, index) => (

                            <div
                                key={player.id}
                                className={
                                    `mini-player ${
                                        player.isCurrentUser
                                            ? "mini-current-user"
                                            : ""
                                    }`
                                }
                            >

                                <div className="mini-rank">

                                    {index === 0
                                        ? "🥇"
                                        : index === 1
                                        ? "🥈"
                                        : "🥉"}

                                </div>


                                <div className="mini-player-info">

                                    <strong>

                                        {player.username}

                                        {player.isCurrentUser && (

                                            <span className="mini-you">
                                                {t(
                                                    "ctf",
                                                    "you"
                                                )}
                                            </span>

                                        )}

                                    </strong>


                                    <span>
                                        🚩 {player.solved || 0}{" "}
                                        {t(
                                            "ctf",
                                            "solved"
                                        )}
                                    </span>

                                </div>


                                <div className="mini-score">

                                    <strong>
                                        {player.score || 0}
                                    </strong>

                                    <span>
                                        {t(
                                            "ctf",
                                            "score"
                                        )}
                                    </span>

                                </div>

                            </div>

                        )
                    )}

                </div>


                <div className="current-user-rank">

                    <span>
                        👤{" "}
                        {t(
                            "ctf",
                            "yourRank"
                        )}
                    </span>

                    <strong>
                        #{currentRank}
                    </strong>

                </div>

            </div>


            {/* =========================
                BADGES
            ========================= */}

            <h2 className="section-title">
                🏅{" "}
                {t(
                    "ctf",
                    "badges"
                )}
            </h2>


            <div className="badges-grid">

                {badges.map(
                    (badge) => (

                        <BadgeCard
                            key={badge.id}
                            badge={badge}
                            earned={
                                earnedBadges.includes(
                                    badge.id
                                )
                            }
                        />

                    )
                )}

            </div>


            {/* =========================
                CATEGORIES
            ========================= */}

            <h2 className="section-title">

                {t(
                    "ctf",
                    "categories"
                )}

            </h2>


            <div className="categories-grid">

                {categories.map(
                    (category) => (

                        <CategoryCard
                            key={category.id}
                            category={category}
                        />

                    )
                )}

            </div>


        </div>
    </>
);


}

export default CTFDashboard;
