import { addPoints } from '../points.js';

export const checkShot = (redMonster, laser, explosion) => { 
    const laserRect = laser.getBoundingClientRect();
    const redMonsterRect = redMonster.getBoundingClientRect();

    if (
        (laserRect) &&
        laserRect.right >= redMonsterRect.left &&
        laserRect.left <= redMonsterRect.right &&
        document.querySelectorAll('.live').length !== 0
    ) {
        redMonster.style.display = "none";
        explosion.style.display = "flex";
        addPoints(50); 
        setTimeout(() => {
            redMonster.style.display = "flex";
            explosion.style.display = "none";  
        }, 200); 
    } 
     else if (document.querySelectorAll('.live').length === 0) {
        document.querySelector('.game-over').classList.add('show');
        document.querySelector('.play-again').classList.add('show');
        redMonster.remove();
        explosion.remove();
        addPoints(0); 
    } 
};