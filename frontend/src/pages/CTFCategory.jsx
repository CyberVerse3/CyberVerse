`jsx`
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

import categories from "../ctf/data/categories";

import webChallenges from "../ctf/challenges/web";
import linuxChallenges from "../ctf/challenges/linux";
import cryptoChallenges from "../ctf/challenges/crypto";
import forensicsChallenges from "../ctf/challenges/forensics";
import networkingChallenges from "../ctf/challenges/networking";
import reverseChallenges from "../ctf/challenges/reverse";

import {
    isUnlocked,
    isSolved,
    getCategoryProgress,
} from "../ctf/utils/ctfEngine";

import "../styles/CTFCategory.css";

function CTFCategory() {

    const { category } = useParams();

    const challengeMap = {
        web: webChallenges,
        linux: linuxChallenges,
        crypto: cryptoChallenges,
        forensics: forensicsChallenges,
        networking: networkingChallenges,
        reverse: reverseChallenges,
    };

    const currentCategory = categories.find(
        (c) => c.id === category
    );

    const challenges =
        challengeMap[category] || [];

    const progress = getCategoryProgress(
        category,
        challenges.length
    );


    // =========================
    // CATEGORY NOT FOUND
    // =========================

    if (!currentCategory) {

        return (
            <>
                <Navbar />

                <div className="category-page">

                    <div className="category-error">

                        <h1>
                            ❌ Category Not Found
                        </h1>

                        <p>
                            The requested CTF category
                            does not exist.
                        </p>

                        <Link
                            to="/ctf"
                            className="back-category-btn"
                        >
                            ← Back to CTF
                        </Link>

                    </div>

                </div>
            </>
        );
    }


    return (
        <>
            <Navbar />

            <div className="category-page">

                {/* =========================
                    CATEGORY HEADER
                ========================= */}

                <div className="category-header">

                    <div className="category-header-icon">
                        {currentCategory.icon}
                    </div>

                    <div className="category-header-content">

                        <span className="category-label">
                            CTF CATEGORY
                        </span>

                        <h1>
                            {currentCategory.name}
                        </h1>

                        <p>
                            {currentCategory.description}
                        </p>

                    </div>

                </div>


                {/* =========================
                    PROGRESS
                ========================= */}

                <div className="category-progress">

                    <div className="progress-header">

                        <div>

                            <strong>
                                Progress
                            </strong>

                            <span>
                                {progress.solved} / {progress.total}
                                {" "}
                                Challenges
                            </span>

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
                            🚩 {progress.solved} Solved
                        </span>

                        <span>
                            🎯 {progress.total} Total
                        </span>

                    </div>

                </div>


                {/* =========================
                    CHALLENGES HEADER
                ========================= */}

                <div className="challenges-section-header">

                    <div>

                        <h2>
                            Challenges
                        </h2>

                        <p>
                            Solve challenges in order
                            to unlock the next one.
                        </p>

                    </div>

                    <span className="challenge-count">
                        {challenges.length} Challenges
                    </span>

                </div>


                {/* =========================
                    CHALLENGE LIST
                ========================= */}

                <div className="challenge-list">

                    {challenges.map(
                        (challenge) => {

                            const unlocked =
                                isUnlocked(
                                    category,
                                    challenge.id
                                );

                            const solved =
                                isSolved(
                                    category,
                                    challenge.id
                                );


                            // =========================
                            // LOCKED CHALLENGE
                            // =========================

                            if (!unlocked) {

                                return (
                                    <div
                                        key={challenge.id}
                                        className="challenge-card locked"
                                    >

                                        <div className="challenge-top">

                                            <span className="challenge-number">
                                                #{challenge.id}
                                            </span>

                                            <span className="locked-label">
                                                🔒 Locked
                                            </span>

                                        </div>


                                        <div className="challenge-main">

                                            <div>

                                                <h2>
                                                    Challenge Locked
                                                </h2>

                                                <p>
                                                    Complete Challenge #
                                                    {challenge.id - 1}
                                                    {" "}
                                                    to unlock this challenge.
                                                </p>

                                            </div>

                                            <div className="locked-icon">
                                                🔒
                                            </div>

                                        </div>

                                    </div>
                                );
                            }


                            // =========================
                            // UNLOCKED / SOLVED
                            // =========================

                            return (
                                <Link
                                    key={challenge.id}
                                    to={`/ctf/${category}/${challenge.id}`}
                                    className={`challenge-card ${
                                        solved
                                            ? "solved"
                                            : ""
                                    }`}
                                >

                                    <div className="challenge-top">

                                        <span className="challenge-number">
                                            #{challenge.id}
                                        </span>


                                        <div className="challenge-status">

                                            <span className="difficulty">
                                                {challenge.difficulty}
                                            </span>

                                            {solved && (
                                                <span className="solved-label">
                                                    ✅ Solved
                                                </span>
                                            )}

                                        </div>

                                    </div>


                                    <div className="challenge-main">

                                        <div className="challenge-content">

                                            <h2>
                                                {challenge.title}
                                            </h2>

                                            <p>
                                                {challenge.description}
                                            </p>

                                        </div>

                                        <div className="challenge-arrow">
                                            →
                                        </div>

                                    </div>


                                    <div className="challenge-info">

                                        <span>
                                            🎯 {challenge.points}
                                            {" "}
                                            Points
                                        </span>

                                        <span>
                                            ⭐ {challenge.xp}
                                            {" "}
                                            XP
                                        </span>

                                        {solved && (
                                            <span>
                                                🏆 Completed
                                            </span>
                                        )}

                                    </div>

                                </Link>
                            );
                        }
                    )}

                </div>

            </div>
        </>
    );
}

export default CTFCategory;

