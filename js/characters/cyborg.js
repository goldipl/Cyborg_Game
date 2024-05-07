const cyborg = document.querySelector(".cyborg-image");
const gameSection = document.querySelector("section.game__section");

export const jump = () => {
    cyborg.classList.add('jump');
    setTimeout(() => {
        cyborg.classList.remove('jump')
    }, 500);
};

const laserAttack = () => {
    const laser = document.createElement('div');
    laser.className = 'laser-attack';
    gameSection.appendChild(laser);

    const removeLaster = () => {
        laser.remove()
    }

    setTimeout(removeLaster, 1000)
};

export const move = (e) => {
    if (e.keyCode === 32) { // 32 is the key code for spacebar
        jump();
    } else if (e.keyCode === 76) { // 76 is the key code for "L"
        laserAttack();
    }
};

document.addEventListener("keydown", move);