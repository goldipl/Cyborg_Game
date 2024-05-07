import { addPoints } from '../points.js';

let collisionFlag = false;

export const checkCollision = (cyborg, redMonster, orangeMonster, boom) => {
    if (collisionFlag) return; // Exit early if collision already detected

    const cyborgRect = cyborg.getBoundingClientRect();
    const redMonsterRect = redMonster.getBoundingClientRect();
    const orangeMonsterRect = orangeMonster.getBoundingClientRect();

    const isRedMonsterColliding = (
        cyborgRect.right >= redMonsterRect.left &&
        cyborgRect.left <= redMonsterRect.right &&
        cyborgRect.bottom >= redMonsterRect.top &&
        cyborgRect.top <= redMonsterRect.bottom
    );

    const isOrangeMonsterColliding = (
        cyborgRect.right >= orangeMonsterRect.left &&
        cyborgRect.left <= orangeMonsterRect.right &&
        cyborgRect.bottom >= orangeMonsterRect.top &&
        cyborgRect.top <= orangeMonsterRect.bottom
    );

    if (isRedMonsterColliding) {
        const liveElements = document.querySelectorAll('.live');

        if (liveElements.length !== 0) {
            liveElements[0].remove();
            collisionFlag = true;
            redMonster.style.display = "none";
            boom.style.display = "flex";
            setTimeout(() => {
                collisionFlag = false;
                redMonster.style.display = "flex";
                boom.style.display = "none";
            }, 400);
        } else {
            document.querySelector('.game-over').classList.add('show');
            document.querySelector('.play-again').classList.add('show');
            redMonster.remove();
            cyborg.remove();
            addPoints(0);
        }
    } else if (isOrangeMonsterColliding) {
        const liveElements = document.querySelectorAll('.live');

        if (liveElements.length !== 0) {
            liveElements[0].remove();
            collisionFlag = true;
            orangeMonster.style.display = "none";
            boom.style.display = "flex";
            setTimeout(() => {
                collisionFlag = false;
                orangeMonster.style.display = "flex";
                boom.style.display = "none";
            }, 400);
        } else {
            document.querySelector('.game-over').classList.add('show');
            document.querySelector('.play-again').classList.add('show');
            orangeMonster.remove();
            cyborg.remove();
            addPoints(0);
        }
    }
};
