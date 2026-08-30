import { addXP } from "../../utils/xpSystem";


// =========================================
// STORAGE
// =========================================

const STORAGE_KEY = "cyberverse_linux_guide";


// =========================================
// GET DATA
// =========================================

function getData() {

    return (
        JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || {
            completedLessons: [],
            xp: 0,
        }
    );
}


// =========================================
// SAVE DATA
// =========================================

function saveData(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}


// =========================================
// CHECK LESSON COMPLETED
// =========================================

export function isLessonCompleted(lessonId) {

    const data = getData();

    return data.completedLessons.includes(
        Number(lessonId)
    );
}


// =========================================
// LESSON UNLOCKED
// =========================================
// جميع الدروس متاحة من البداية
// =========================================

export function isLessonUnlocked() {

    return true;
}


// =========================================
// MODULE COMPLETED
// =========================================

export function isModuleCompleted(module) {

    if (
        !module ||
        !module.lessons ||
        module.lessons.length === 0
    ) {
        return false;
    }

    return module.lessons.every(
        (lesson) =>
            isLessonCompleted(lesson.id)
    );
}


// =========================================
// MODULE UNLOCKED
// =========================================
// جميع الـModules متاحة من البداية
// =========================================

export function isModuleUnlocked() {

    return true;
}


// =========================================
// COMPLETE LESSON
// =========================================

export function completeLesson(
    lessonId,
    xp
) {

    const data = getData();

    const id = Number(lessonId);


    // =========================================
    // PREVENT DUPLICATE XP
    // =========================================

    if (
        data.completedLessons.includes(id)
    ) {
        return data;
    }


    // =========================================
    // MARK COMPLETED
    // =========================================

    data.completedLessons.push(id);


    // =========================================
    // ADD LINUX GUIDE XP
    // =========================================

    const earnedXP =
        Number(xp) || 0;

    data.xp += earnedXP;


    // =========================================
    // ADD GLOBAL CYBERVERSE XP
    // =========================================

    addXP(earnedXP);


    // =========================================
    // SAVE
    // =========================================

    saveData(data);

    return data;
}


// =========================================
// GET PROGRESS
// =========================================

export function getLinuxGuideProgress(
    totalLessons
) {

    const data = getData();

    const completed =
        data.completedLessons.length;


    const percentage =
        totalLessons > 0
            ? Math.round(
                  (completed /
                      totalLessons) *
                      100
              )
            : 0;


    return {

        completedLessons:
            completed,

        completedLessonIds:
            data.completedLessons,

        totalLessons,

        percentage,

        xp:
            data.xp,
    };
}


// =========================================
// GET XP
// =========================================

export function getLinuxGuideXP() {

    const data = getData();

    return data.xp;
}


// =========================================
// GET COMPLETED LESSONS
// =========================================

export function getCompletedLinuxLessons() {

    const data = getData();

    return data.completedLessons;
}


// =========================================
// RESET PROGRESS
// =========================================

export function resetLinuxGuideProgress() {

    localStorage.removeItem(
        STORAGE_KEY
    );
}