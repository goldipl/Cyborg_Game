/* This is the code that is responsible for the movement of the cyborg. */
let bottom_position = 0;
let background_position = 0;

const cyborg = document.querySelector(".cyborg-image");
const background = document.querySelector(".background-image");

/**
 * When the user presses the up arrow key, the cyborg's bottom position is set to 100px.
 * @param e - The event object
 */
const move = (e) => {
    switch (e.keyCode) {
        case 32:
        // Jump - spacebar
        bottom_position = 100;
        break;
    }
    
    cyborg.style.bottom = `${bottom_position}px`;
};

/* Listening for a keydown event and then calling the move function. */
document.addEventListener("keydown", move);

/* Creating a monster and placing it on the screen. */
const monster = document.createElement('img');
monster.src = './img/monster.svg';
monster.width = 80;
monster.height = 80;
monster.classList.add('monster');
const container = document.querySelector('.game-screen .container .game__section').appendChild(monster);

checkCollision = () => {
    if (monster.offsetLeft === cyborg.offsetLeft)  {
        console.log("Live -1");
    }
};

setInterval(checkCollision, 10);