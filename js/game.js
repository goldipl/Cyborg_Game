import { move } from './characters/cyborg.js';
import { createMonster } from './characters/monster.js';
import { checkCollision } from './collision.js';

const cyborg = document.querySelector(".cyborg-image");
const monster = createMonster();

document.addEventListener("keydown", move);

setInterval(() => {
    checkCollision(cyborg, monster);
}, 20);