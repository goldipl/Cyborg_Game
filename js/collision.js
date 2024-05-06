import { addPoints } from './points.js';

let collisionFlag = false;

export const checkCollision = (cyborg, monster) => {
    if (!collisionFlag) {
        const cyborgRect = cyborg.getBoundingClientRect();
        const monsterRect = monster.getBoundingClientRect();

        if (
            cyborgRect.right >= monsterRect.left &&
            cyborgRect.left <= monsterRect.right &&
            cyborgRect.bottom >= monsterRect.top &&
            cyborgRect.top <= monsterRect.bottom
        ) {
            if (document.querySelectorAll('.live').length !== 0) {
                document.querySelector('.live').remove();
                collisionFlag = true;
                setTimeout(() => {
                    collisionFlag = false; 
                }, 1000); 
            } 
            if (document.querySelectorAll('.live').length === 0) {
                document.querySelector('.game-over').classList.add('show');
                document.querySelector('.play-again').classList.add('show');
                monster.style.display = "none";
                cyborg.classList.add('stop-jump');
            } 
        } else if (cyborg.offsetTop <= 300) {
            addPoints();
        }
    }
};