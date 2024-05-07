import { addPoints } from '../points.js';

const cyborg = document.querySelector(".cyborg-image");
const gameSection = document.querySelector("section.game__section");

export const jump = () => {
    cyborg.classList.add('jump');
    addPoints(2); 
    setTimeout(() => {
        cyborg.classList.remove('jump')
    }, 500);
};

export const createLaserAttack = () => {
    const laser = document.createElement('div');
    laser.classList.add('laser-attack');

    gameSection.appendChild(laser);

    setTimeout(() => {
        laser.remove();
    }, 1500);

    return laser;
};