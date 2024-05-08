import { addPoints } from '../points.js';
import { gameOver } from './gameOver.js';

export const checkShot = (redMonster, laser, explosion) => {
    const isAlive = document.querySelectorAll('.live').length !== 0;
    const laserRect = laser.getBoundingClientRect();
    const redMonsterRect = redMonster.getBoundingClientRect();

    const EndOfTheGame = () => {
        gameOver();
        redMonster.remove();
        cyborg.remove();
    }

    if (isAlive && isColliding(laserRect, redMonsterRect)) {
        handleShotHit(redMonster, explosion);
    } else if (!isAlive) {
        EndOfTheGame();
    }
};

const isColliding = (rect1, rect2) => {
    return (
        rect1.right >= rect2.left &&
        rect1.left <= rect2.right
    );
};

const handleShotHit = (redMonster, explosion) => {
    redMonster.style.display = "none";
    explosion.style.display = "flex";
    addPoints(50);
    setTimeout(() => {
        redMonster.style.display = "flex";
        explosion.style.display = "none";
    }, 200);
};