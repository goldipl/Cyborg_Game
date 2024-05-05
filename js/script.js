const cyborg = document.querySelector(".cyborg-image");
const background = document.querySelector(".background-image");

/* Creating a monster and placing it on the screen. */
const monster = document.createElement('img');
monster.src = './img/monster.svg';
monster.width = 80;
monster.height = 80;
monster.classList.add('monster');
const container = document.querySelector('.game-screen .container .game__section').appendChild(monster);

/**
 * When the user presses the up arrow key, the cyborg's bottom position is set to 100px.
 * @param e - The event object
 */
const move = (e) => {
    switch (e.keyCode) {
        case 32:
        // Jump - spacebar
        cyborg.classList.add('jump');
        setTimeout(() => {
            cyborg.classList.remove('jump')
        }, 500);
        break;
    }
};

/* Listening for a keydown event and then calling the move function. */
document.addEventListener("keydown", move);

/* Adding points to the game. */
addPoints = () => {
    var points = document.querySelector('.points-container');
    points.innerText++;
}

checkCollision = () => {
    // Getting the bounding boxes of cyborg and monster
    const cyborgRect = cyborg.getBoundingClientRect();
    const monsterRect = monster.getBoundingClientRect();

    // Checking for collision by comparing bounding box positions
    if (
        cyborgRect.right >= monsterRect.left &&
        cyborgRect.left <= monsterRect.right &&
        cyborgRect.bottom >= monsterRect.top &&
        cyborgRect.top <= monsterRect.bottom
    ) {
        // Collision happened
        if (document.querySelectorAll('.live').length !== 0) {
            document.querySelector('.live').remove();
        } 
        if (document.querySelectorAll('.live').length === 0) {
            document.querySelector('.game-over').classList.add('show');
            document.querySelector('.play-again').classList.add('show');
            monster.style.display = "none";
            cyborg.classList.add('stop-jump');
        } 
    } else {
        // No collision, add points
        addPoints();
    }
}; 

/* Checking if the cyborg and the monster are in the same position every 20 milliseconds. */
setInterval(checkCollision, 20);