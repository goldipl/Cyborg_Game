const container = document.querySelector('.game-screen .container .game__section');

export const createMonster = () => {
    const redMonster = document.createElement('img');
    redMonster.src = './img/characters/red-monster.svg';
    redMonster.width = 80;
    redMonster.height = 80;
    redMonster.classList.add('monster');
    container.appendChild(redMonster);
    return redMonster;
};