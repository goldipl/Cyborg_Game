/* This is the code that moves the cyborg. */
let left_position = 40;
let bottom_position = 0;
let background_position = 0;

/**
 * The function moves the cyborg image left and right, and moves the background image left.
 * @param e - The event object.
 */
const move = (e) => {
    const cyborg = document.querySelector(".cyborg-image");
    const background = document.querySelector(".background-image");
    switch (e.keyCode) {
        case 37:
        // Move left
        left_position -= 5;
        break;

        case 39:
        // Move right
        left_position += 2;
        if (cyborg.style.left === `180px`) {
            left_position = 180;
        }
        background_position -= 5;
        break;
    }
    
    cyborg.style.left = `${left_position}px`;
    cyborg.style.bottom = `${bottom_position}px`;
    background.style.left = `${background_position}px`;
}

/* Listening for a keydown event and then calling the move function. */
document.addEventListener("keydown", move);

/* Creating a monster and placing it on the screen. */
let monster_position = 600;

const monster = document.createElement('img');
monster.src = './img/monster.svg';
monster.width = 80;
monster.height = 80;
monster.classList.add('monster');
const container = document.querySelector('.game-screen .container .game__section').appendChild(monster);

monster.style.left = `${monster_position}px`;