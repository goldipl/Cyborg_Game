
import { createMonster } from './characters/monster.js';
import { checkCollision } from './actions/collision.js';
import { addBoomEffect } from './effects/boom.js';
import { checkShot } from './actions/shot.js';
import { createLaserAttack } from './characters/cyborg.js'
import { jump } from './characters/cyborg.js'
import { addExplosionEffect } from './effects/explosion.js'

const cyborg = document.querySelector(".cyborg-image");
const monster = createMonster();
const boom = addBoomEffect();
let laser = createLaserAttack();
const explosion = addExplosionEffect();

setInterval(() => {
    checkCollision(cyborg, monster, boom);
    checkShot(monster, laser, explosion);
}, 20);

const move = (e) => {
    if (e.keyCode === 32) {
        jump();
    } 
    if (e.keyCode === 76) {
        if (laser.parentNode) {
            laser.parentNode.removeChild(laser);
        }
        laser = createLaserAttack();
    }
};

document.addEventListener("keydown", move);
