import { move } from './characters/cyborg.js';
import { createMonster } from './characters/monster.js';
import { checkCollision } from './collision.js';
import { addBoomEffect } from './effects/boom.js'

const cyborg = document.querySelector(".cyborg-image");
const monster = createMonster();
const boom = addBoomEffect();

document.addEventListener("keydown", move);

setInterval(() => {
    checkCollision(cyborg, monster, boom);
}, 20);