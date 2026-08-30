
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import leaderboard from "../ctf/data/leaderboard";
import { getStats } from "../ctf/utils/ctfEngine";

import "../styles/CTFLeaderboard.css";

function CTFLeaderboard() {

    const [stats, setStats] = useState({
        score: 0,
        xp: 0,
        solved: [],
    });

    const currentUsername =
        localStorage.getItem("username") ||
        "CyberVerse Student";

    useEffect(() => {
        const currentStats = getStats();

        setStats(currentStats);
    }, []);

    const solvedCount = Array.isArray(stats.solved)
        ? stats.solved.length
        : 0;

    // =========================
    // CURRENT USER
    // =========================

    const currentPlayer = {
        id: "current-user",
        username: currentUsername,
        solved: solvedCount,
        score: stats.score || 0,
        xp: stats.xp || 0,
        isCurrentUser: true,
    };

    // =========================
    // COMBINE PLAYERS
    // =========================

    const allPlayers = [
        ...leaderboard,
        currentPlayer,
    ];

    // =========================
    // SORT BY SCORE
    // =========================

    allPlayers.sort((a, b) => {
        return b.score - a.score;
    });

    return (
        <>
            <Navbar />

            <div className="leaderboard-page">

                <div className="leaderboard-header">

                    <h1>
                        🏆 CTF Leaderboard
                    </h1>

                    <p>
                        Compete with other CyberVerse
                        hackers and climb the rankings.
                    </p>

                </div>

                <div className="leaderboard-list">

                    {allPlayers.map((player, index) => (

                        <div
                            key={player.id}
                            className={`leaderboard-card ${
                                index < 3
                                    ? "top-player"
                                    : ""
                            } ${
                                player.isCurrentUser
                                    ? "current-user"
                                    : ""
                            }`}
                        >

                            {/* Rank */}

                            <div className="rank">

                                {index === 0
                                    ? "🥇"
                                    : index === 1
                                    ? "🥈"
                                    : index === 2
                                    ? "🥉"
                                    : `#${index + 1}`}

                            </div>

                            {/* Player Info */}

                            <div className="player-info">

                                <h2>

                                    {player.username}

                                    {player.isCurrentUser && (
                                        <span className="you-label">
                                            {" "}YOU
                                        </span>
                                    )}

                                </h2>

                                <p>
                                    🚩 {player.solved}
                                    {" "}
                                    Challenges Solved
                                </p>

                            </div>

                            {/* Player Stats */}

                            <div className="player-stats">

                                <div>

                                    <strong>
                                        {player.score}
                                    </strong>

                                    <span>
                                        Score
                                    </span>

                                </div>

                                <div>

                                    <strong>
                                        {player.xp}
                                    </strong>

                                    <span>
                                        XP
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}

export default CTFLeaderboard;

