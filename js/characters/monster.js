const container = document.querySelector('.game-screen .container .game__section');

export const createMonster = () => {
    const monster = document.createElement('img');
    monster.src = './img/monster.svg';
    monster.width = 80;
    monster.height = 80;
    monster.classList.add('monster');
    container.appendChild(monster);
    return monster;
};