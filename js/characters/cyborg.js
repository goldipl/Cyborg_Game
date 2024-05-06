const cyborg = document.querySelector(".cyborg-image");

export const jump = () => {
    cyborg.classList.add('jump');
    setTimeout(() => {
        cyborg.classList.remove('jump')
    }, 500);
};

export const move = (e) => {
    switch (e.keyCode) {
        case 32:
            jump();
            break;
    }
};

document.addEventListener("keydown", move);