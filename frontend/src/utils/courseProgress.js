export function getCourseProgress(totalLessons) {

    let completed = 0;

    for (let i = 1; i <= totalLessons; i++) {

        if (
            localStorage.getItem(
                `linuxLesson${i}`
            ) === "true"
        ) {
            completed++;
        }

    }

    return Math.round(
        (completed / totalLessons) * 100
    );

}

export function getCompletedLessons(totalLessons) {

    let completed = 0;

    for (let i = 1; i <= totalLessons; i++) {

        if (
            localStorage.getItem(
                `linuxLesson${i}`
            ) === "true"
        ) {
            completed++;
        }

    }

    return completed;

}