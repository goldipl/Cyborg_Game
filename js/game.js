
import { createMonster } from './characters/monster.js';
import { checkCollision } from './collision.js';
import { addBoomEffect } from './effects/boom.js';
import { checkShot } from './shot.js';
import { createLaserAttack } from './characters/cyborg.js'
import { jump } from './characters/cyborg.js'
import { addExplosionEffect } from './effects/explosion.js'

const cyborg = document.querySelector(".cyborg-image");
const monster = createMonster();
const boom = addBoomEffect();
const laser = createLaserAttack();
const explosion = addExplosionEffect();

setInterval(() => {
    checkCollision(cyborg, monster, boom);
    checkShot(monster, laser, explosion);
}, 20);

const move = (e) => {
    if (e.keyCode === 32) { // 32 is the key code for spacebar 
        jump();
    } 
    if (e.keyCode === 76) { // 76 is the key code for "L"
        createLaserAttack();
    }
};

document.addEventListener("keydown", move);
