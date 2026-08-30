
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

import webChallenges from "../ctf/challenges/web";
import linuxChallenges from "../ctf/challenges/linux";
import cryptoChallenges from "../ctf/challenges/crypto";
import forensicsChallenges from "../ctf/challenges/forensics";
import networkingChallenges from "../ctf/challenges/networking";
import reverseChallenges from "../ctf/challenges/reverse";

import {
    submitFlag,
    isSolved,
    isUnlocked,
} from "../ctf/utils/ctfEngine";

import { useSettings } from "../context/SettingsContext";

import "../styles/CTFChallenge.css";

function CTFChallenge() {

    const { category, id } = useParams();
    const navigate = useNavigate();

    const { language } = useSettings();

    const isArabic = language === "ar";


    // =========================
    // STATE
    // =========================

    const [flag, setFlag] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [reward, setReward] = useState(null);


    // =========================
    // CHALLENGE MAP
    // =========================

    const challengeMap = {
        web: webChallenges,
        linux: linuxChallenges,
        crypto: cryptoChallenges,
        forensics: forensicsChallenges,
        networking: networkingChallenges,
        reverse: reverseChallenges,
    };


    // =========================
    // GET CATEGORY CHALLENGES
    // =========================

    const challenges = challengeMap[category] || [];


    // =========================
    // CURRENT CHALLENGE
    // =========================

    const challenge = challenges.find(
        (c) => c.id === Number(id)
    );


    // =========================
    // CHALLENGE NOT FOUND
    // =========================

    if (!challenge) {

        return (
            <>
                <Navbar />

                <div className="challenge-page">

                    <div className="challenge-error">

                        <h1>
                            {isArabic
                                ? "❌ التحدي غير موجود"
                                : "❌ Challenge Not Found"}
                        </h1>

                        <p>
                            {isArabic
                                ? "التحدي المطلوب غير موجود."
                                : "The requested challenge does not exist."}
                        </p>

                        <button
                            className="submit-btn"
                            onClick={() =>
                                navigate(`/ctf/${category}`)
                            }
                        >
                            {isArabic
                                ? "← العودة إلى التحديات"
                                : "← Back to Challenges"}
                        </button>

                    </div>

                </div>
            </>
        );
    }


    // =========================
    // CHALLENGE STATUS
    // =========================

    const solved = isSolved(
        category,
        challenge.id
    );


    // =========================
    // CHALLENGE INDEX
    // =========================

    const currentIndex = challenges.findIndex(
        (c) => c.id === challenge.id
    );


    // =========================
    // PREVIOUS CHALLENGE
    // =========================

    const previousChallenge =
        currentIndex > 0
            ? challenges[currentIndex - 1]
            : null;


    // =========================
    // NEXT CHALLENGE
    // =========================

    const nextChallenge =
        currentIndex < challenges.length - 1
            ? challenges[currentIndex + 1]
            : null;


    // =========================
    // UNLOCK STATUS
    // =========================

    const unlocked = isUnlocked(
        category,
        challenge.id
    );


    // =========================
    // LOCKED CHALLENGE
    // =========================

    if (!unlocked) {

        return (
            <>
                <Navbar />

                <div className="challenge-page">

                    <div className="challenge-locked">

                        <div className="locked-icon">
                            🔒
                        </div>

                        <h1>
                            {isArabic
                                ? "التحدي مقفل"
                                : "Challenge Locked"}
                        </h1>

                        <p>
                            {isArabic
                                ? "حل التحدي السابق أولاً لفتح هذا التحدي."
                                : "Solve the previous challenge first to unlock this one."}
                        </p>

                        <button
                            className="submit-btn"
                            onClick={() =>
                                navigate(`/ctf/${category}`)
                            }
                        >
                            {isArabic
                                ? "← العودة إلى التحديات"
                                : "← Back to Challenges"}
                        </button>

                    </div>

                </div>
            </>
        );
    }


    // =========================
    // SUBMIT FLAG
    // =========================

    function handleSubmit() {

        // Already solved

        if (solved || submitted) {

            setMessage(
                isArabic
                    ? "تم حل التحدي مسبقاً. ✅"
                    : "Challenge already solved. ✅"
            );

            return;
        }


        // Empty flag

        if (!flag.trim()) {

            setMessage(
                isArabic
                    ? "يرجى إدخال الـFlag."
                    : "Please enter a flag."
            );

            return;
        }


        // Submit to CTF engine

        const result = submitFlag(
            category,
            challenge,
            flag
        );


        // Display result message

        setMessage(result.message);


        // Correct flag

        if (result.success) {

            setFlag("");

            setSubmitted(true);

            setReward({
                score: challenge.points,
                xp: challenge.xp,
            });
        }
    }


    // =========================
    // NEXT CHALLENGE
    // =========================

    function goToNextChallenge() {

        if (!nextChallenge) {
            return;
        }

        navigate(
            `/ctf/${category}/${nextChallenge.id}`
        );

        setMessage("");
        setSubmitted(false);
        setReward(null);
        setFlag("");
    }


    // =========================
    // BACK TO CATEGORY
    // =========================

    function goBackToChallenges() {

        navigate(
            `/ctf/${category}`
        );
    }


    // =========================
    // STATUS
    // =========================

    const challengeSolved =
        solved || submitted;


    return (
        <>
            <Navbar />

            <div className="challenge-page">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="challenge-header">

                    <button
                        className="back-btn"
                        onClick={goBackToChallenges}
                    >
                        {isArabic
                            ? "← رجوع"
                            : "← Back"}
                    </button>


                    <div className="challenge-status">

                        {challengeSolved ? (

                            <span className="solved-status">

                                {isArabic
                                    ? "✅ تم الحل"
                                    : "✅ Solved"}

                            </span>

                        ) : (

                            <span className="active-status">

                                {isArabic
                                    ? "🚩 نشط"
                                    : "🚩 Active"}

                            </span>

                        )}

                    </div>

                </div>


                {/* =========================
                    TITLE
                ========================= */}

                <div className="challenge-title">

                    <h1>
                        {challenge.title}
                    </h1>

                    <p>
                        {challenge.description}
                    </p>

                </div>


                {/* =========================
                    DETAILS
                ========================= */}

                <div className="challenge-details">


                    <div className="detail-item">

                        <span className="detail-icon">
                            🎯
                        </span>

                        <div>

                            <small>
                                {isArabic
                                    ? "النقاط"
                                    : "Points"}
                            </small>

                            <strong>
                                {challenge.points}
                            </strong>

                        </div>

                    </div>


                    <div className="detail-item">

                        <span className="detail-icon">
                            ⭐
                        </span>

                        <div>

                            <small>
                                XP
                            </small>

                            <strong>
                                {challenge.xp}
                            </strong>

                        </div>

                    </div>


                    <div className="detail-item">

                        <span className="detail-icon">
                            ⚡
                        </span>

                        <div>

                            <small>
                                {isArabic
                                    ? "الصعوبة"
                                    : "Difficulty"}
                            </small>

                            <strong>
                                {challenge.difficulty}
                            </strong>

                        </div>

                    </div>


                </div>


                {/* =========================
                    HINT
                ========================= */}

                {challenge.hint && (

                    <div className="hint-box">

                        <span>
                            💡
                        </span>

                        <div>

                            <strong>
                                {isArabic
                                    ? "تلميح"
                                    : "Hint"}
                            </strong>

                            <p>
                                {challenge.hint}
                            </p>

                        </div>

                    </div>

                )}


                {/* =========================
                    FLAG SECTION
                ========================= */}

                <div className="flag-section">

                    <h2>
                        {isArabic
                            ? "🚩 إرسال الـFlag"
                            : "🚩 Submit Flag"}
                    </h2>


                    <p>
                        {isArabic
                            ? "اعثر على الـFlag الصحيح وأرسله أدناه."
                            : "Find the correct flag and submit it below."}
                    </p>


                    <div className="flag-form">

                        <input
                            type="text"
                            placeholder={
                                isArabic
                                    ? "أدخل الـFlag..."
                                    : "Enter Flag..."
                            }
                            value={flag}
                            onChange={(e) =>
                                setFlag(e.target.value)
                            }
                            disabled={challengeSolved}
                            autoComplete="off"
                            spellCheck="false"
                            onKeyDown={(e) => {

                                if (
                                    e.key === "Enter" &&
                                    !challengeSolved
                                ) {
                                    handleSubmit();
                                }

                            }}
                        />


                        <button
                            className="submit-btn"
                            onClick={handleSubmit}
                            disabled={challengeSolved}
                        >

                            {challengeSolved
                                ? isArabic
                                    ? "تم الحل ✅"
                                    : "Solved ✅"
                                : isArabic
                                    ? "إرسال الـFlag"
                                    : "Submit Flag"}

                        </button>

                    </div>


                    {/* =========================
                        MESSAGE
                    ========================= */}

                    {message && (

                        <div
                            className={`challenge-message ${
                                message
                                    .toLowerCase()
                                    .includes("correct")
                                    ? "success-message"
                                    : "error-message"
                            }`}
                        >

                            {message}

                        </div>

                    )}

                </div>


                {/* =========================
                    SUCCESS REWARD
                ========================= */}

                {challengeSolved && (

                    <div className="challenge-success">

                        <div className="success-icon">
                            🎉
                        </div>


                        <div>

                            <h2>
                                {isArabic
                                    ? "اكتمل التحدي!"
                                    : "Challenge Completed!"}
                            </h2>


                            <p>
                                {isArabic
                                    ? "عمل رائع! لقد نجحت في حل هذا التحدي."
                                    : "Great work! You successfully solved this challenge."}
                            </p>


                            <div className="reward-stats">

                                <span>
                                    🎯 +
                                    {reward?.score ??
                                        challenge.points}
                                    {" "}
                                    {isArabic
                                        ? "نقطة"
                                        : "Points"}
                                </span>


                                <span>
                                    ⭐ +
                                    {reward?.xp ??
                                        challenge.xp}
                                    {" "}
                                    XP
                                </span>

                            </div>

                        </div>

                    </div>

                )}


                {/* =========================
                    NAVIGATION
                ========================= */}

                {challengeSolved && (

                    <div className="challenge-navigation">


                        <button
                            className="back-btn"
                            onClick={goBackToChallenges}
                        >
                            {isArabic
                                ? "← العودة إلى التحديات"
                                : "← Back to Challenges"}
                        </button>


                        {nextChallenge ? (

                            <button
                                className="submit-btn"
                                onClick={goToNextChallenge}
                            >
                                {isArabic
                                    ? "التحدي التالي →"
                                    : "Next Challenge →"}
                            </button>

                        ) : (

                            <button
                                className="submit-btn"
                                onClick={goBackToChallenges}
                            >
                                {isArabic
                                    ? "🏆 اكتملت الفئة"
                                    : "🏆 Category Completed"}
                            </button>

                        )}

                    </div>

                )}

            </div>
        </>
    );
}

export default CTFChallenge;

