
import { createRedMonster } from './characters/monsters.js';
import { createOrangeMonster } from './characters/monsters.js';
import { checkCollision } from './actions/collision.js';
import { addBoomEffect } from './effects/boom.js';
import { checkShot } from './actions/shot.js';
import { createLaserAttack } from './characters/cyborg.js'
import { jump } from './characters/cyborg.js'
import { addExplosionEffect } from './effects/explosion.js'

const cyborg = document.querySelector(".cyborg-image");
const redMonster = createRedMonster();
const orangeMonster = createOrangeMonster();
const boom = addBoomEffect();
const explosion = addExplosionEffect();

let laser = createLaserAttack();

setInterval(() => {
    checkCollision(cyborg, redMonster, orangeMonster, boom);
    checkShot(redMonster, laser, explosion);
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
