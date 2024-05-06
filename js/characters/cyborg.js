const cyborg = document.querySelector(".cyborg-image");

export const jump = () => {
    cyborg.classList.add('jump');
    setTimeout(() => {
        cyborg.classList.remove('jump')
    }, 500);
};

export const move = (e) => {
    if (e.keyCode === 32) { // 32 is the key code for spacebar
        jump();
    }
};

document.addEventListener("keydown", move);