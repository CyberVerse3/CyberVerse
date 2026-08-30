`javascript`
import { addXP } from "../../utils/xpSystem";

const STORAGE_KEY = "cyberverse_ctf";

// =========================
// GET DATA
// =========================

function getData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return {
                score: 0,
                xp: 0,
                solved: [],
            };
        }

        const data = JSON.parse(stored);

        return {
            score: Number(data.score) || 0,
            xp: Number(data.xp) || 0,
            solved: Array.isArray(data.solved)
                ? data.solved
                : [],
        };
    } catch (error) {
        console.error("Failed to load CTF data:", error);

        return {
            score: 0,
            xp: 0,
            solved: [],
        };
    }
}

// =========================
// SAVE DATA
// =========================

function saveData(data) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}

// =========================
// CREATE CHALLENGE KEY
// =========================

function getChallengeKey(category, id) {
    return `${category}-${id}`;
}

// =========================
// CHECK IF CHALLENGE SOLVED
// =========================

export function isSolved(category, id) {
    const data = getData();

    return data.solved.includes(
        getChallengeKey(category, id)
    );
}

// =========================
// CHECK IF CHALLENGE UNLOCKED
// =========================

export function isUnlocked(category, id) {
    // Challenge 1 is always unlocked
    if (id === 1) {
        return true;
    }

    const data = getData();

    const previousKey = getChallengeKey(
        category,
        id - 1
    );

    return data.solved.includes(previousKey);
}

// =========================
// NORMALIZE FLAG
// =========================

function normalizeFlag(flag) {
    return String(flag || "")
        .trim()
        .toLowerCase();
}

// =========================
// LOCAL FLAG CHECK
// =========================
//
// NOTE:
// This is client-side validation only.
//
// Real flag security will be implemented
// later when the backend is connected.
//
// Keeping the check isolated makes it
// easier to replace with an API request.
//

function checkLocalFlag(userFlag, challengeFlag) {
    if (!challengeFlag) {
        return false;
    }

    return (
        normalizeFlag(userFlag) ===
        normalizeFlag(challengeFlag)
    );
}

// =========================
// SUBMIT FLAG
// =========================

export function submitFlag(
    category,
    challenge,
    flag
) {
    const data = getData();

    // =========================
    // VALIDATE CHALLENGE
    // =========================

    if (!challenge || !challenge.id) {
        return {
            success: false,
            message: "Invalid challenge.",
        };
    }

    // =========================
    // CHALLENGE KEY
    // =========================

    const key = getChallengeKey(
        category,
        challenge.id
    );

    // =========================
    // ALREADY SOLVED
    // =========================

    if (data.solved.includes(key)) {
        return {
            success: false,
            message: "Challenge already solved.",
        };
    }

    // =========================
    // EMPTY FLAG
    // =========================

    if (!flag || !String(flag).trim()) {
        return {
            success: false,
            message: "Please enter a flag.",
        };
    }

    // =========================
    // CHECK FLAG
    // =========================

    const correct = checkLocalFlag(
        flag,
        challenge.flag
    );

    // =========================
    // INCORRECT FLAG
    // =========================

    if (!correct) {
        return {
            success: false,
            message: "Incorrect Flag.",
        };
    }

    // =========================
    // CORRECT FLAG
    // =========================

    const points = Number(challenge.points) || 0;
    const xp = Number(challenge.xp) || 0;

    // Add CTF score
    data.score += points;

    // Add CTF XP
    data.xp += xp;

    // Add XP to main CyberVerse XP system
    if (xp > 0) {
        addXP(xp);
    }

    // Mark challenge as solved
    data.solved.push(key);

    // Save CTF data
    saveData(data);

    // =========================
    // RETURN RESULT
    // =========================

    return {
        success: true,
        message: "Correct Flag! 🎉",
        score: data.score,
        xp: data.xp,
        solved: data.solved.length,
    };
}

// =========================
// GET CTF STATS
// =========================

export function getStats() {
    return getData();
}

// =========================
// GET CTF RANK
// =========================

export function getCTFRank() {
    const data = getData();

    const score = data.score;

    if (score >= 5000) {
        return {
            name: "CTF Legend",
            icon: "🏆",
            level: 5,
        };
    }

    if (score >= 3000) {
        return {
            name: "Elite Hacker",
            icon: "💎",
            level: 4,
        };
    }

    if (score >= 1500) {
        return {
            name: "Gold Hacker",
            icon: "🥇",
            level: 3,
        };
    }

    if (score >= 500) {
        return {
            name: "Silver Hacker",
            icon: "🥈",
            level: 2,
        };
    }

    return {
        name: "Bronze Hacker",
        icon: "🥉",
        level: 1,
    };
}

// =========================
// CATEGORY PROGRESS
// =========================

export function getCategoryProgress(
    category,
    totalChallenges
) {
    const data = getData();

    const solvedCount = data.solved.filter(
        (key) =>
            key.startsWith(`${category}-`)
    ).length;

    const percentage =
        totalChallenges > 0
            ? Math.round(
                (solvedCount / totalChallenges) *
                100
            )
            : 0;

    return {
        solved: solvedCount,
        total: totalChallenges,
        percentage,
    };
}

// =========================
// OVERALL PROGRESS
// =========================

export function getOverallProgress(
    totalChallenges
) {
    const data = getData();

    const solvedCount = data.solved.length;

    const percentage =
        totalChallenges > 0
            ? Math.round(
                (solvedCount / totalChallenges) *
                100
            )
            : 0;

    return {
        solved: solvedCount,
        total: totalChallenges,
        percentage,
    };
}

// =========================
// EARNED BADGES
// =========================

export function getEarnedBadges() {
    const data = getData();

    const earned = [];

    // =========================
    // FIRST BLOOD
    // =========================

    if (data.solved.length >= 1) {
        earned.push("first-blood");
    }

    // =========================
    // WEB HUNTER
    // =========================

    const webSolved = data.solved.filter(
        (key) =>
            key.startsWith("web-")
    ).length;

    if (webSolved >= 10) {
        earned.push("web-hunter");
    }

    // =========================
    // LINUX MASTER
    // =========================

    const linuxSolved = data.solved.filter(
        (key) =>
            key.startsWith("linux-")
    ).length;

    if (linuxSolved >= 10) {
        earned.push("linux-master");
    }

    // =========================
    // CRYPTO MASTER
    // =========================

    const cryptoSolved = data.solved.filter(
        (key) =>
            key.startsWith("crypto-")
    ).length;

    if (cryptoSolved >= 10) {
        earned.push("crypto-master");
    }

    // =========================
    // FORENSICS EXPERT
    // =========================

    const forensicsSolved = data.solved.filter(
        (key) =>
            key.startsWith("forensics-")
    ).length;

    if (forensicsSolved >= 10) {
        earned.push("forensics-expert");
    }

    // =========================
    // NETWORK ANALYST
    // =========================

    const networkingSolved = data.solved.filter(
        (key) =>
            key.startsWith("networking-")
    ).length;

    if (networkingSolved >= 10) {
        earned.push("network-analyst");
    }

    // =========================
    // REVERSE MASTER
    // =========================

    const reverseSolved = data.solved.filter(
        (key) =>
            key.startsWith("reverse-")
    ).length;

    if (reverseSolved >= 10) {
        earned.push("reverse-master");
    }

    // =========================
    // CTF CHAMPION
    // =========================

    if (data.solved.length >= 60) {
        earned.push("ctf-champion");
    }

    return earned;
}

