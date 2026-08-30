import clickSound from "../assets/sounds/click.mp3";
import successSound from "../assets/sounds/success.mp3";
import completeSound from "../assets/sounds/complete.mp3";
import levelupSound from "../assets/sounds/levelup.mp3";
import badgeSound from "../assets/sounds/badge.mp3";
import certificateSound from "../assets/sounds/certificate.mp3";
import errorSound from "../assets/sounds/error.mp3";

function play(sound) {

    const audio = new Audio(sound);

    audio.volume = 0.5;

    audio.play().catch(() => {});

}

export const playClick = () => play(clickSound);

export const playSuccess = () => play(successSound);

export const playComplete = () => play(completeSound);

export const playLevelUp = () => play(levelupSound);

export const playBadge = () => play(badgeSound);

export const playCertificate = () => play(certificateSound);

export const playError = () => play(errorSound);