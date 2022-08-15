let left_position = 40;
let bottom_position = 4;

/**
 * When the user presses a key, the cyborg moves left or right.
 * @param e - The event object.
 */
const move = (e) => {
    const cyborg = document.querySelector(".cyborg-image");
    switch (e.keyCode) {
        case 37:
        // Move left
        left_position -= 5;
        break;

        case 39:
        // Move right
        left_position += 5;
        break;
    }
    cyborg.style.left = `${left_position}px`;
    cyborg.style.bottom = `${bottom_position}px`;
}

document.addEventListener("keydown", move);