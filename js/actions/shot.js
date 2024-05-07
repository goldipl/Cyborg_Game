import { addPoints } from '../points.js';

export const checkShot = (redMonster, laser, explosion) => {
    const isAlive = document.querySelectorAll('.live').length !== 0;
    const laserRect = laser.getBoundingClientRect();
    const redMonsterRect = redMonster.getBoundingClientRect();

    if (isAlive && isColliding(laserRect, redMonsterRect)) {
        handleShotHit(redMonster, explosion);
    } else if (!isAlive) {
        handleGameOver(redMonster, explosion);
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

const handleGameOver = (redMonster, explosion) => {
    const gameOverElement = document.querySelector('.game-over');
    const playAgainElement = document.querySelector('.play-again');

    gameOverElement.classList.add('show');
    playAgainElement.classList.add('show');
    redMonster.remove();
    explosion.remove();
    addPoints(0);
};
