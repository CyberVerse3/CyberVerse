import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import categories from "../ctf/data/categories";

import {
    getStats,
    getOverallProgress,
} from "../ctf/utils/ctfEngine";

import "../styles/CTFChampionship.css";


function CTFChampionship() {

    const navigate = useNavigate();

    const stats = getStats();


    // =========================
    // TOTAL CTF CHALLENGES
    // =========================

    const totalChallenges =
        categories.reduce(
            (total, category) =>
                total + category.totalChallenges,
            0
        );


    // =========================
    // CTF PROGRESS
    // =========================

    const progress =
        getOverallProgress(
            totalChallenges
        );


    // =========================
    // CHAMPIONSHIP STATUS
    // =========================

    const championshipUnlocked =
        progress.solved >= totalChallenges;


    return (
        <>
            <Navbar />


            <div className="championship-page">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="championship-header">

                    <div className="championship-icon">
                        🏆
                    </div>


                    <h1>
                        CyberVerse CTF Championship
                    </h1>


                    <p>
                        The ultimate CyberVerse
                        CTF challenge.
                    </p>


                    <p className="championship-subtitle">
                        Prove your skills across
                        every cybersecurity category.
                    </p>

                </div>


                {/* =========================
                    PROGRESS
                ========================= */}

                <div className="championship-progress">

                    <div className="progress-header">

                        <div>

                            <h2>
                                CTF Completion
                            </h2>

                            <p>
                                Complete all CTF challenges
                                to unlock the Championship.
                            </p>

                        </div>


                        <strong>
                            {progress.solved}
                            {" / "}
                            {progress.total}
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


                    <div className="progress-percentage">

                        {progress.percentage}%
                        {" "}
                        Complete

                    </div>

                </div>


                {/* =========================
                    CATEGORIES
                ========================= */}

                <h2 className="section-title">

                    Championship Categories

                </h2>


                <div className="championship-categories">

                    {categories.map(
                        (category) => {

                            const categoryProgress =
                                progress.solved >=
                                totalChallenges
                                    ? 100
                                    : 0;


                            return (

                                <div
                                    key={category.id}
                                    className="championship-category"
                                >

                                    <div className="category-icon">
                                        {category.icon}
                                    </div>


                                    <div className="category-info">

                                        <h3>
                                            {category.name}
                                        </h3>

                                        <p>
                                            {category.description}
                                        </p>

                                    </div>


                                    <div className="category-status">

                                        {categoryProgress === 100
                                            ? "✅ Complete"
                                            : "📚 CTF"}

                                    </div>

                                </div>

                            );

                        }
                    )}

                </div>


                {/* =========================
                    CHAMPIONSHIP CARD
                ========================= */}

                <div
                    className={`championship-card ${
                        championshipUnlocked
                            ? "unlocked"
                            : "locked"
                    }`}
                >

                    <div className="championship-card-icon">

                        {championshipUnlocked
                            ? "🏆"
                            : "🔒"}

                    </div>


                    {championshipUnlocked ? (

                        <>

                            <h2>
                                Championship Unlocked!
                            </h2>


                            <p>
                                You have completed all
                                CyberVerse CTF challenges.
                                You are ready for the
                                ultimate challenge.
                            </p>


                            <button
                                className="championship-btn"
                                onClick={() =>
                                    navigate(
                                        "/ctf/championship/arena"
                                    )
                                }
                            >
                                Enter Championship →
                            </button>

                        </>

                    ) : (

                        <>

                            <h2>
                                Championship Locked
                            </h2>


                            <p>
                                Complete all{" "}
                                {totalChallenges}{" "}
                                CTF challenges to
                                unlock the Championship.
                            </p>


                            <div className="requirement">

                                🚩

                                <span>

                                    {progress.solved}
                                    {" / "}
                                    {totalChallenges}

                                    {" "}
                                    Challenges Completed

                                </span>

                            </div>


                            <button
                                className="championship-btn secondary"
                                onClick={() =>
                                    navigate("/ctf")
                                }
                            >
                                Continue CTF →
                            </button>

                        </>

                    )}

                </div>


                {/* =========================
                    PLAYER STATS
                ========================= */}

                <div className="championship-stats">

                    <div>

                        <strong>
                            {stats.score}
                        </strong>

                        <span>
                            CTF Score
                        </span>

                    </div>


                    <div>

                        <strong>
                            {stats.xp}
                        </strong>

                        <span>
                            CTF XP
                        </span>

                    </div>


                    <div>

                        <strong>
                            {stats.solved.length}
                        </strong>

                        <span>
                            Challenges Solved
                        </span>

                    </div>

                </div>


            </div>
        </>
    );
}


export default CTFChampionship;