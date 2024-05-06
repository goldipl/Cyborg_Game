const container = document.querySelector('.game-screen .container .game__section');

export const addBoomEffect = () => {
    const boomEffect = document.createElement('img');
    boomEffect.src = './img/effects/boom.svg';
    boomEffect.width = 80;
    boomEffect.height = 80;
    boomEffect.classList.add('boom-effect');
    container.appendChild(boomEffect);
    return boomEffect;
};