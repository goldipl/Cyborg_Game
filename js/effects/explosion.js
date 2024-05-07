const container = document.querySelector('.game-screen .container .game__section');

export const addExplosionEffect = () => {
    const explosionEffect = document.createElement('img');
    explosionEffect.src = './img/effects/explosion.svg';
    explosionEffect.width = 80;
    explosionEffect.height = 80;
    explosionEffect.classList.add('explosion-effect');
    container.appendChild(explosionEffect);
    return explosionEffect;
};