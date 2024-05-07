import { addPoints } from '../points.js';

let collisionFlag = false;

export const checkCollision = (cyborg, redMonster, boom) => {
    if (!collisionFlag) {
        const cyborgRect = cyborg.getBoundingClientRect();
        const redMonsterRect = redMonster.getBoundingClientRect();

        if (
            cyborgRect.right >= redMonsterRect.left &&
            cyborgRect.left <= redMonsterRect.right &&
            cyborgRect.bottom >= redMonsterRect.top &&
            cyborgRect.top <= redMonsterRect.bottom
        ) {
            if (document.querySelectorAll('.live').length !== 0) {
                document.querySelector('.live').remove();
                collisionFlag = true;
                redMonster.style.display = "none";
                boom.style.display = "flex";
                setTimeout(() => {
                    collisionFlag = false; 
                    redMonster.style.display = "flex";
                    boom.style.display = "none";
                }, 400); 
            } 
            if (document.querySelectorAll('.live').length === 0) {
                document.querySelector('.game-over').classList.add('show');
                document.querySelector('.play-again').classList.add('show');
                redMonster.remove();
                cyborg.remove();
                addPoints(0);
            } 
        } 
    }
};