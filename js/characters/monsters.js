const container = document.querySelector('.game-screen .container .game__section');

export const createRedMonster = () => {
    const redMonster = document.createElement('img');
    redMonster.src = './img/characters/red-monster.svg';
    redMonster.width = 80;
    redMonster.height = 80;
    redMonster.classList.add('monster');
    container.appendChild(redMonster);
    return redMonster;
};

export const createOrangeMonster = () => {
    const orangeMonster = document.createElement('img');
    orangeMonster.src = './img/characters/orange-monster.svg';
    orangeMonster.width = 80;
    orangeMonster.height = 80;
    orangeMonster.classList.add('monster');
    orangeMonster.classList.add('orange');
    container.appendChild(orangeMonster);
    return orangeMonster;
};