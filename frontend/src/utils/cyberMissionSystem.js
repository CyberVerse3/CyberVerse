// ============================================================
// CYBERVERSE — CYBER MISSION SYSTEM
// ============================================================

const STORAGE_KEY = "cyberverse_cyber_mission";

// ============================================================
// DEFAULT MISSION DATA
// ============================================================

const DEFAULT_MISSION = {
    unlocked: false,
    completed: false,

    bestScore: 0,
    bestAccuracy: 0,
    bestTime: 0,

    attempts: 0,

    // Last Result
    lastScore: 0,
    lastAccuracy: 0,
    lastTime: 0,
    lastXP: 0,
    lastPassed: false,
    lastCorrectAnswers: 0,
    lastTotalQuestions: 0,
    lastCompletedAt: null,
};

// ============================================================
// DEFAULT DATA
// ============================================================

const DEFAULT_DATA = {
    score: 0,
    xp: 0,

    missions: {
        1: {
            ...DEFAULT_MISSION,
            unlocked: true,
        },

        2: {
            ...DEFAULT_MISSION,
        },

        3: {
            ...DEFAULT_MISSION,
        },

        4: {
            ...DEFAULT_MISSION,
        },

        5: {
            ...DEFAULT_MISSION,
        },
    },

    achievements: [],

    totalChallenges: 0,
    totalCorrect: 0,
    totalAnswered: 0,
};

// ============================================================
// GET DATA
// ============================================================

function getData() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {
            return DEFAULT_DATA;
        }

        const parsed =
            JSON.parse(saved);

        return {

            ...DEFAULT_DATA,

            ...parsed,

            missions: {
                ...DEFAULT_DATA.missions,
                ...(parsed.missions || {}),
            },

            achievements:
                parsed.achievements || [],

        };

    } catch (error) {

        console.error(
            "Cyber Mission data error:",
            error
        );

        return DEFAULT_DATA;
    }
}

// ============================================================
// SAVE DATA
// ============================================================

function saveData(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}

// ============================================================
// RESET GAME
// ============================================================

export function resetCyberMission() {

    localStorage.removeItem(
        STORAGE_KEY
    );

    return DEFAULT_DATA;
}

// ============================================================
// GET MISSION DATA
// ============================================================

export function getMissionData(
    missionId
) {

    const data =
        getData();

    return (
        data.missions[missionId] || {
            ...DEFAULT_MISSION,
        }
    );

}

export function isMissionUnlocked(
    missionId
) {

    const data =
        getData();

    const id =
        Number(missionId);

    // ========================================================
    // MISSION 1
    // ========================================================

    if (id === 1) {
        return true;
    }

    // ========================================================
    // INVALID MISSION
    // ========================================================

    if (
        !data.missions[id]
    ) {
        return false;
    }

    // ========================================================
    // PREVIOUS MISSION
    // ========================================================

    const previousMission =
        data.missions[id - 1];

    if (!previousMission) {
        return false;
    }

    // ========================================================
    // REQUIRE PREVIOUS MISSION
    // TO BE COMPLETED
    // ========================================================

    return (
        previousMission.completed === true &&
        data.missions[id].unlocked === true
    );

}

// ============================================================
// IS MISSION COMPLETED
// ============================================================

export function isMissionCompleted(
    missionId
) {

    const data =
        getData();

    return Boolean(
        data.missions[missionId]?.completed
    );

}

// ============================================================
// UNLOCK MISSION
// ============================================================

export function unlockMission(
    missionId
) {

    const data =
        getData();

    if (
        !data.missions[missionId]
    ) {
        return data;
    }

    data.missions[
        missionId
    ].unlocked = true;

    saveData(data);

    return data;

}

// ============================================================
// COMPLETE MISSION
// ============================================================

export function completeMission(
    missionId,
    result = {}
) {

    const data =
        getData();

    if (
        !data.missions[missionId]
    ) {
        return data;
    }

    const mission =
        data.missions[missionId];

    const score =
        Number(result.score) || 0;

    const accuracy =
        Number(result.accuracy) || 0;

    const time =
        Number(result.time) || 0;

    const xp =
        Number(result.xp) || 0;

    const requiredAccuracy =
        Number(
            result.requiredAccuracy
        ) || 70;

    // ========================================================
    // FINAL PASS CHECK
    // ========================================================

    const passed =
        Boolean(result.passed) &&
        accuracy >=
            requiredAccuracy;

    // ========================================================
    // ATTEMPTS
    // ========================================================

    mission.attempts += 1;

    // ========================================================
    // LAST RESULT
    // ========================================================

    mission.lastScore =
        score;

    mission.lastAccuracy =
        accuracy;

    mission.lastTime =
        time;

    mission.lastXP =
        xp;

    mission.lastPassed =
        passed;

    mission.lastCorrectAnswers =
        Number(
            result.correctAnswers
        ) || 0;

    mission.lastTotalQuestions =
        Number(
            result.totalQuestions
        ) || 0;

     mission.lastCompletedAt =
    new Date().toISOString();   

    // ========================================================
    // BEST SCORE
    // ========================================================

    if (
        score >
        mission.bestScore
    ) {

        mission.bestScore =
            score;

    }

    // ========================================================
    // BEST ACCURACY
    // ========================================================

    if (
        accuracy >
        mission.bestAccuracy
    ) {

        mission.bestAccuracy =
            accuracy;

    }

    // ========================================================
    // BEST TIME
    // ========================================================

    if (
        time > 0 &&
        (
            mission.bestTime === 0 ||
            time < mission.bestTime
        )
    ) {

        mission.bestTime =
            time;

    }

    // ========================================================
    // PASSED
    // ========================================================

    if (passed) {

        mission.completed =
            true;

        // ====================================================
        // UNLOCK NEXT MISSION
        // ====================================================

        const nextMissionId =
            Number(missionId) + 1;

        if (
            data.missions[
                nextMissionId
            ]
        ) {

            data.missions[
                nextMissionId
            ].unlocked = true;

        }

    }

    // ========================================================
// GLOBAL SCORE / XP
// ========================================================

const previousBestScore =
    mission.bestScore;

const wasCompleted =
    mission.completed;

// ========================================================
// SCORE
// ========================================================

if (
    score > previousBestScore
) {

    data.score +=
        score - previousBestScore;

}

// ========================================================
// XP
// ========================================================

if (
    passed &&
    !wasCompleted
) {

    data.xp +=
        xp;

}

 // ========================================================
// STATISTICS
// ========================================================

// Recalculate global statistics
// using the latest result of each mission.

let totalQuestions = 0;
let totalCorrect = 0;

Object.values(
    data.missions
).forEach(
    missionData => {

        if (
            missionData.attempts > 0
        ) {

            totalQuestions +=
                Number(
                    missionData.lastTotalQuestions
                ) || 0;

            totalCorrect +=
                Number(
                    missionData.lastCorrectAnswers
                ) || 0;

        }

    }
);

data.totalChallenges =
    totalQuestions;

data.totalCorrect =
    totalCorrect;

data.totalAnswered =
    totalQuestions;
  // ========================================================
// ACHIEVEMENTS / BADGES
// ========================================================

if (passed) {

    // Mission completion achievement
    addAchievementInternal(
        data,
        `mission_${missionId}`
    );

    // ====================================================
    // BADGE
    // ====================================================

    let badgeId =
        `mission_${missionId}_bronze`;

    if (accuracy >= 100) {

        badgeId =
            `mission_${missionId}_gold`;

    } else if (accuracy >= 85) {

        badgeId =
            `mission_${missionId}_silver`;

    }

    addAchievementInternal(
        data,
        badgeId
    );

}

    // ========================================================
    // SAVE
    // ========================================================

    saveData(data);

    return data;

}

// ============================================================
// ADD SCORE
// ============================================================

export function addMissionScore(
    points
) {

    const data =
        getData();

    data.score +=
        Number(points) || 0;

    saveData(data);

    return data.score;

}

// ============================================================
// ADD XP
// ============================================================

export function addMissionXP(
    points
) {

    const data =
        getData();

    data.xp +=
        Number(points) || 0;

    saveData(data);

    return data.xp;

}

// ============================================================
// GET SCORE
// ============================================================

export function getMissionScore() {

    return getData().score;

}

// ============================================================
// GET XP
// ============================================================

export function getMissionXP() {

    return getData().xp;

}

// ============================================================
// ACHIEVEMENTS INTERNAL
// ============================================================

function addAchievementInternal(
    data,
    achievementId
) {

    if (
        !data.achievements.includes(
            achievementId
        )
    ) {

        data.achievements.push(
            achievementId
        );

    }

}

// ============================================================
// ADD ACHIEVEMENT
// ============================================================

export function addAchievement(
    achievementId
) {

    const data =
        getData();

    addAchievementInternal(
        data,
        achievementId
    );

    saveData(data);

    return data.achievements;

}

// ============================================================
// HAS ACHIEVEMENT
// ============================================================

export function hasAchievement(
    achievementId
) {

    const data =
        getData();

    return data.achievements.includes(
        achievementId
    );

}

// ============================================================
// GET ACHIEVEMENTS
// ============================================================

export function getAchievements() {

    return getData().achievements;

}

// ============================================================
// GET OVERALL PROGRESS
// ============================================================

export function getMissionProgress(
    totalMissions = 5
) {

    const data =
        getData();

    let completed = 0;

    for (
        let i = 1;
        i <= totalMissions;
        i++
    ) {

        if (
            data.missions[i]?.completed
        ) {

            completed++;

        }

    }

    const percentage =
        totalMissions === 0
            ? 0
            : Math.round(
                (
                    completed /
                    totalMissions
                ) * 100
            );

    return {

        completed,

        total:
            totalMissions,

        percentage,

    };

}

// ============================================================
// GET GLOBAL ACCURACY
// ============================================================

export function getOverallAccuracy() {

    const data =
        getData();

    if (
        data.totalAnswered === 0
    ) {

        return 0;

    }

    return Math.round(
        (
            data.totalCorrect /
            data.totalAnswered
        ) * 100
    );

}

// ============================================================
// CHECK IF PLAYER CAN UNLOCK NEXT
// ============================================================

export function canUnlockNextMission(
    missionId,
    accuracy,
    requiredAccuracy = 70
) {

    return (
        Number(accuracy) >=
        Number(requiredAccuracy)
    );

}

// ============================================================
// USE HINT
// ============================================================

export function useMissionHint(
    currentHints
) {

    const hints =
        Number(currentHints) || 0;

    if (
        hints <= 0
    ) {

        return {

            success:
                false,

            remaining:
                0,

        };

    }

    return {

        success:
            true,

        remaining:
            hints - 1,

    };

}

// ============================================================
// CALCULATE ACCURACY
// ============================================================

export function calculateAccuracy(
    correct,
    total
) {

    if (
        !total ||
        total <= 0
    ) {

        return 0;

    }

    return Math.round(
        (
            correct /
            total
        ) * 100
    );

}

// ============================================================
// CALCULATE SCORE
// ============================================================

export function calculateMissionScore({
    correct = 0,
    wrong = 0,
    hintsUsed = 0,
    timeRemaining = 0,
}) {

    const correctPoints =
        Number(correct) * 100;

    const wrongPenalty =
        Number(wrong) * 25;

    const hintPenalty =
        Number(hintsUsed) * 15;

    const timeBonus =
        Number(timeRemaining) * 2;

    const score =
        correctPoints +
        timeBonus -
        wrongPenalty -
        hintPenalty;

    return Math.max(
        0,
        score
    );

}

// ============================================================
// GET FULL STATS
// ============================================================

export function getMissionStats() {

    const data =
        getData();

    const progress =
        getMissionProgress(5);

    const accuracy =
        getOverallAccuracy();

    return {

        score:
            data.score,

        xp:
            data.xp,

        completedMissions:
            progress.completed,

        totalMissions:
            progress.total,

        progress:
            progress.percentage,

        accuracy,

        achievements:
            data.achievements,

        missions:
            data.missions,

    };

}

// ============================================================
// EXPORT GET DATA
// ============================================================

export {
    getData,
    saveData,
};