import { addPoints } from '../points.js';

export const checkShot = (monster, laser, explosion) => { 
    const laserRect = laser.getBoundingClientRect();
    const monsterRect = monster.getBoundingClientRect();

    if (
        (laserRect) &&
        laserRect.right >= monsterRect.left &&
        laserRect.left <= monsterRect.right &&
        document.querySelectorAll('.live').length !== 0
    ) {
        monster.style.display = "none";
        explosion.style.display = "flex";
        addPoints(50); 
        setTimeout(() => {
            monster.style.display = "flex";
            explosion.style.display = "none";  
        }, 200); 
    } 
     else if (document.querySelectorAll('.live').length === 0) {
        document.querySelector('.game-over').classList.add('show');
        document.querySelector('.play-again').classList.add('show');
        monster.remove();
        explosion.remove();
        addPoints(0); 
    } 
};