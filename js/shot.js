export const checkShot = (monster, laser, explosion) => { 
    const laserRect = laser.getBoundingClientRect();
    const monsterRect = monster.getBoundingClientRect();

    if (
        (laserRect) &&
        laserRect.right >= monsterRect.left &&
        laserRect.left <= monsterRect.right 
    ) {
        monster.style.display = "none";
        explosion.style.display = "flex";
        setTimeout(() => {
            monster.style.display = "flex";
            explosion.style.display = "none";
        }, 1000); 
    } 
    if (document.querySelectorAll('.live').length === 0) {
        document.querySelector('.game-over').classList.add('show');
        document.querySelector('.play-again').classList.add('show');
        monster.style.display = "none";
        explosion.style.display = "none";
    } 
};