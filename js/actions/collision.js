import { addPoints } from '../points.js';

let collisionFlag = false;

export const checkCollision = (cyborg, redMonster, boom) => {
    if (collisionFlag) return; // Exit early if collision already detected

    const cyborgRect = cyborg.getBoundingClientRect();
    const redMonsterRect = redMonster.getBoundingClientRect();

    const isColliding = (
        cyborgRect.right >= redMonsterRect.left &&
        cyborgRect.left <= redMonsterRect.right &&
        cyborgRect.bottom >= redMonsterRect.top &&
        cyborgRect.top <= redMonsterRect.bottom
    );

    if (isColliding) {
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
    }
};
