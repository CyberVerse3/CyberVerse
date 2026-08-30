import { addXP } from "./xpSystem";

export function completeLesson(course, id, xp) {

    localStorage.setItem(
        `${course}Lesson${id}`,
        "true"
    );

    addXP(xp);

}

export function isLessonCompleted(course, id) {

    return (

        localStorage.getItem(
            `${course}Lesson${id}`
        ) === "true"

    );

}

export function isLessonUnlocked(course, id) {

    if (id === 1) return true;

    return isLessonCompleted(
        course,
        id - 1
    );

}

export function saveCurrentLesson(course, id){

    localStorage.setItem(

        `current${course}Lesson`,

        id

    );

}

export function getCurrentLesson(course){

    return Number(

        localStorage.getItem(

            `current${course}Lesson`

        )

    ) || 1;

}