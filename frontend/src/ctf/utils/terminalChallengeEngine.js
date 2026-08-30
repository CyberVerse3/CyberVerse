// ==========================================
// CYBERVERSE TERMINAL CHALLENGE ENGINE
// ==========================================

import { submitFlag } from "./ctfEngine";

// ==========================================
// STORAGE
// ==========================================

const STORAGE_KEY =
    "cyberverse_terminal_challenges";

// ==========================================
// TERMINAL CHALLENGES
// ==========================================

export const terminalChallenges = {
    terminal_file_discovery: {
        id: 1,
        category: "linux",
        title: "Terminal File Discovery",

        description:
            "Find the challenge flag using Linux terminal commands.",

        flag: "CV{terminal_file_discovery}",

        points: 100,
        xp: 100,
    },
};

// ==========================================
// GET DATA
// ==========================================

function getData() {
    try {
        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {
            return {
                solved: [],
            };
        }

        const data =
            JSON.parse(saved);

        return {
            solved:
                Array.isArray(data.solved)
                    ? data.solved
                    : [],
        };
    } catch (error) {
        console.error(
            "Terminal challenge storage error:",
            error
        );

        return {
            solved: [],
        };
    }
}

// ==========================================
// SAVE DATA
// ==========================================

function saveData(data) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );
    } catch (error) {
        console.error(
            "Failed to save terminal challenge:",
            error
        );
    }
}

// ==========================================
// GET SOLVED CHALLENGES
// ==========================================

export function getSolvedChallenges() {
    return getData().solved || [];
}

// ==========================================
// CHECK CHALLENGE
// ==========================================

export function isTerminalChallengeSolved(
    challengeId
) {
    return getSolvedChallenges().includes(
        challengeId
    );
}

// ==========================================
// GET CHALLENGE
// ==========================================

export function getTerminalChallenge(
    challengeId
) {
    return (
        terminalChallenges[challengeId] ||
        null
    );
}

// ==========================================
// SUBMIT TERMINAL FLAG
// ==========================================

export function submitTerminalFlag(
    challengeId,
    submittedFlag
) {
    // --------------------------------------
    // Get challenge
    // --------------------------------------

    const challenge =
        getTerminalChallenge(
            challengeId
        );

    if (!challenge) {
        return {
            success: false,
            alreadySolved: false,
            message:
                "Challenge not found.",
        };
    }

    // --------------------------------------
    // Normalize submitted flag
    // --------------------------------------

    const flag =
        String(
            submittedFlag ?? ""
        ).trim();

    // --------------------------------------
    // Check empty flag
    // --------------------------------------

    if (!flag) {
        return {
            success: false,
            alreadySolved: false,
            message:
                "No flag submitted.",
        };
    }

    // --------------------------------------
    // Already solved
    // --------------------------------------

    if (
        isTerminalChallengeSolved(
            challengeId
        )
    ) {
        return {
            success: true,
            alreadySolved: true,
            message:
                "Challenge already solved.",
            challenge,
        };
    }

    // --------------------------------------
    // Check flag
    // --------------------------------------

    if (
        flag !== challenge.flag
    ) {
        return {
            success: false,
            alreadySolved: false,
            message:
                "Incorrect flag.",
        };
    }

    // ======================================
    // REGISTER IN MAIN CTF ENGINE
    // ======================================

    let ctfResult = null;

    try {
        ctfResult =
            submitFlag(
                challenge.category,
                challenge,
                flag
            );
    } catch (error) {
        console.error(
            "CTF Engine error:",
            error
        );
    }

    // ======================================
    // SAVE TERMINAL CHALLENGE
    // ======================================

    const data =
        getData();

    if (
        !data.solved.includes(
            challengeId
        )
    ) {
        data.solved.push(
            challengeId
        );
    }

    saveData(data);

    // ======================================
    // SUCCESS
    // ======================================

    return {
        success: true,

        alreadySolved: false,

        message:
            "Correct flag! Challenge solved!",

        challenge,

        ctfResult,
    };
}

// ==========================================
// GET TERMINAL STATS
// ==========================================

export function getTerminalStats() {
    const solved =
        getSolvedChallenges();

    const total =
        Object.keys(
            terminalChallenges
        ).length;

    return {
        solved: solved.length,
        total,
        progress:
            total > 0
                ? Math.round(
                    (solved.length /
                        total) *
                    100
                )
                : 0,
    };
}

// ==========================================
// RESET TERMINAL CHALLENGES
// ==========================================

export function resetTerminalChallenges() {
    try {
        localStorage.removeItem(
            STORAGE_KEY
        );
    } catch (error) {
        console.error(
            "Failed to reset terminal challenges:",
            error
        );
    }
}

// ==========================================
// DEFAULT EXPORT
// ==========================================

const terminalChallengeEngine = {
    terminalChallenges,

    getTerminalChallenge,

    getSolvedChallenges,

    isTerminalChallengeSolved,

    submitTerminalFlag,

    getTerminalStats,

    resetTerminalChallenges,
};

export default terminalChallengeEngine;