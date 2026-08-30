import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import categories from "../ctf/data/categories";

import {
    getStats,
    getOverallProgress,
} from "../ctf/utils/ctfEngine";

import { addXP } from "../utils/xpSystem";

import "../styles/CTFChampionshipArena.css";


const championshipQuestions = [
    {
        id: 1,
        category: "Web",
        icon: "🌐",
        question: "What is the primary purpose of SQL Injection?",
        options: [
            "To inject malicious SQL queries into an application",
            "To encrypt a database",
            "To increase network speed",
            "To create a firewall",
        ],
        answer: 0,
    },

    {
        id: 2,
        category: "Web",
        icon: "🌐",
        question: "Which HTTP status code commonly indicates Forbidden access?",
        options: [
            "200",
            "301",
            "403",
            "500",
        ],
        answer: 2,
    },

    {
        id: 3,
        category: "Linux",
        icon: "🐧",
        question: "Which command lists files in a Linux directory?",
        options: [
            "pwd",
            "ls",
            "cd",
            "mkdir",
        ],
        answer: 1,
    },

    {
        id: 4,
        category: "Linux",
        icon: "🐧",
        question: "Which command displays the current working directory?",
        options: [
            "pwd",
            "ls",
            "cat",
            "whoami",
        ],
        answer: 0,
    },

    {
        id: 5,
        category: "Crypto",
        icon: "🔐",
        question: "What does encryption primarily provide?",
        options: [
            "Confidentiality",
            "Faster internet",
            "More storage",
            "Physical security",
        ],
        answer: 0,
    },

    {
        id: 6,
        category: "Crypto",
        icon: "🔐",
        question: "Which algorithm is commonly considered asymmetric?",
        options: [
            "AES",
            "DES",
            "RSA",
            "MD5",
        ],
        answer: 2,
    },

    {
        id: 7,
        category: "Forensics",
        icon: "🕵️",
        question: "What is digital forensics mainly concerned with?",
        options: [
            "Investigating digital evidence",
            "Building websites",
            "Managing passwords",
            "Designing networks",
        ],
        answer: 0,
    },

    {
        id: 8,
        category: "Forensics",
        icon: "🕵️",
        question: "Which information can be useful when investigating a file?",
        options: [
            "File metadata",
            "Screen brightness",
            "Keyboard color",
            "Monitor size",
        ],
        answer: 0,
    },

    {
        id: 9,
        category: "Networking",
        icon: "📡",
        question: "Which protocol is commonly used to securely connect to a remote Linux system?",
        options: [
            "FTP",
            "HTTP",
            "SSH",
            "SMTP",
        ],
        answer: 2,
    },

    {
        id: 10,
        category: "Networking",
        icon: "📡",
        question: "What does DNS primarily do?",
        options: [
            "Translate domain names to IP addresses",
            "Encrypt files",
            "Scan passwords",
            "Create user accounts",
        ],
        answer: 0,
    },

    {
        id: 11,
        category: "Reverse Engineering",
        icon: "⚙️",
        question: "What is reverse engineering commonly used for?",
        options: [
            "Understanding how software works",
            "Increasing RAM",
            "Creating Wi-Fi networks",
            "Formatting disks",
        ],
        answer: 0,
    },

    {
        id: 12,
        category: "Reverse Engineering",
        icon: "⚙️",
        question: "Which type of analysis examines a program without executing it?",
        options: [
            "Static analysis",
            "Dynamic analysis",
            "Network analysis",
            "Physical analysis",
        ],
        answer: 0,
    },
];


function CTFChampionshipArena() {

    const navigate = useNavigate();


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
    // PLAYER STATS
    // =========================

    const stats = getStats();


    const progress =
        getOverallProgress(
            totalChallenges
        );


    // =========================
    // CHAMPIONSHIP ACCESS
    // =========================

    const championshipUnlocked =
        progress.solved >= totalChallenges;


    // =========================
    // STATES
    // =========================

    const [current, setCurrent] =
        useState(0);

    const [answers, setAnswers] =
        useState({});

    const [finished, setFinished] =
        useState(false);

    const [score, setScore] =
        useState(0);


    // =========================
    // PREVENT DIRECT ACCESS
    // =========================

    useEffect(() => {

        if (!championshipUnlocked) {

            navigate(
                "/ctf/championship"
            );

        }

    }, [
        championshipUnlocked,
        navigate,
    ]);


    // =========================
    // SELECT ANSWER
    // =========================

    function selectAnswer(index) {

        const question =
            championshipQuestions[current];

        setAnswers({
            ...answers,
            [question.id]: index,
        });

    }


    // =========================
    // NEXT QUESTION
    // =========================

    function handleNext() {

        if (
            current <
            championshipQuestions.length - 1
        ) {

            setCurrent(
                current + 1
            );

            return;
        }


        calculateResult();

    }


    // =========================
    // CALCULATE RESULT
    // =========================

    function calculateResult() {

        let finalScore = 0;


        championshipQuestions.forEach(
            (item) => {

                if (
                    answers[item.id] ===
                    item.answer
                ) {

                    finalScore++;

                }

            }
        );


        const percentage =
            Math.round(
                (finalScore /
                    championshipQuestions.length) *
                100
            );


        const passed =
            percentage >= 70;


        setScore(
            finalScore
        );


        setFinished(
            true
        );


        // =========================
        // SAVE RESULT
        // =========================

        localStorage.setItem(
            "ctfChampionshipScore",
            String(finalScore)
        );


        localStorage.setItem(
            "ctfChampionshipPercentage",
            String(percentage)
        );


        // =========================
        // SUCCESS
        // =========================

        if (passed) {

            const alreadyCompleted =
                localStorage.getItem(
                    "ctfChampionshipCompleted"
                );


            if (
                alreadyCompleted !== "true"
            ) {

                // Championship XP reward
                addXP(500);


                localStorage.setItem(
                    "ctfChampionshipCompleted",
                    "true"
                );

            }

        } else {

            localStorage.removeItem(
                "ctfChampionshipCompleted"
            );

        }

    }


    // =========================
    // RESULT PAGE
    // =========================

    if (finished) {

        const percentage =
            Math.round(
                (score /
                    championshipQuestions.length) *
                100
            );


        const passed =
            percentage >= 70;


        return (
            <>
                <Navbar />


                <div className="championship-arena">

                    <div className="championship-result">


                        <div className="result-icon">

                            {passed
                                ? "🏆"
                                : "📚"}

                        </div>


                        <h1>

                            {passed
                                ? "CTF Championship Complete!"
                                : "Championship Not Passed"}

                        </h1>


                        <p>

                            {passed
                                ? "Excellent work! You proved your cybersecurity skills."
                                : "Keep practicing the CTF challenges and try again."}

                        </p>


                        <div className="final-score">

                            <strong>

                                {score}
                                {" / "}
                                {championshipQuestions.length}

                            </strong>


                            <span>

                                {percentage}%

                            </span>

                        </div>


                        {passed && (

                            <div className="championship-reward">

                                <h2>
                                    🏆 Rewards
                                </h2>

                                <p>
                                    ⭐ +500 XP
                                </p>

                                <p>
                                    🏅 CTF Champion
                                </p>

                            </div>

                        )}


                        <div className="result-actions">


                            {passed && (

                                <button
                                    className="championship-btn"
                                    onClick={() =>
                                        navigate(
                                            "/ctf"
                                        )
                                    }
                                >
                                    🏆 Back to CTF
                                </button>

                            )}


                            {!passed && (

                                <button
                                    className="championship-btn"
                                    onClick={() => {

                                        setCurrent(0);

                                        setAnswers({});

                                        setScore(0);

                                        setFinished(
                                            false
                                        );

                                    }}
                                >
                                    🔄 Try Again
                                </button>

                            )}


                            <button
                                className="secondary-btn"
                                onClick={() =>
                                    navigate(
                                        "/ctf/championship"
                                    )
                                }
                            >
                                ← Championship
                            </button>


                        </div>


                    </div>

                </div>
            </>
        );

    }


    // =========================
    // CURRENT QUESTION
    // =========================

    const question =
        championshipQuestions[current];


    const selectedAnswer =
        answers[question.id];


    // =========================
    // ARENA
    // =========================

    return (
        <>
            <Navbar />


            <div className="championship-arena">


                {/* HEADER */}

                <div className="arena-header">

                    <div className="arena-icon">
                        🏆
                    </div>


                    <div>

                        <h1>
                            CTF Championship Arena
                        </h1>

                        <p>
                            The ultimate CyberVerse
                            CTF challenge.
                        </p>

                    </div>

                </div>


                {/* PROGRESS */}

                <div className="arena-progress">

                    <div>

                        Question{" "}

                        <strong>
                            {current + 1}
                        </strong>

                        {" / "}

                        {championshipQuestions.length}

                    </div>


                    <div>

                        {Math.round(
                            ((current + 1) /
                                championshipQuestions.length) *
                            100
                        )}

                        %

                    </div>

                </div>


                <div className="arena-progress-bar">

                    <div
                        style={{
                            width:
                                `${
                                    ((current + 1) /
                                        championshipQuestions.length) *
                                    100
                                }%`,
                        }}
                    />

                </div>


                {/* QUESTION */}

                <div className="championship-question">


                    <div className="question-category">

                        {question.icon}

                        <span>
                            {question.category}
                        </span>

                    </div>


                    <h2>
                        {question.question}
                    </h2>


                    <div className="answer-list">

                        {question.options.map(
                            (
                                option,
                                index
                            ) => (

                                <button
                                    key={index}
                                    className={`answer-option ${
                                        selectedAnswer === index
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        selectAnswer(
                                            index
                                        )
                                    }
                                >

                                    <span>

                                        {String.fromCharCode(
                                            65 + index
                                        )}

                                    </span>


                                    {option}

                                </button>

                            )
                        )}

                    </div>


                    {/* NEXT BUTTON */}

                    <button
                        className="next-btn"
                        disabled={
                            selectedAnswer ===
                            undefined
                        }
                        onClick={
                            handleNext
                        }
                    >

                        {current ===
                        championshipQuestions.length - 1
                            ? "Finish Championship 🏆"
                            : "Next Question →"}

                    </button>


                </div>


            </div>
        </>
    );
}


export default CTFChampionshipArena;