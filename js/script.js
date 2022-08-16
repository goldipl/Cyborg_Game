let left_position = 40;
let bottom_position = 0;
let background_position = 0;

/**
 * When the user presses a key, the cyborg moves left or right.
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

document.addEventListener("keydown", move);