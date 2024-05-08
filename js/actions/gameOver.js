import { addPoints } from "./../points.js";

export const gameOver = () => {
    const gameOverElement = document.querySelector('.game-over');
    const playAgainElement = document.querySelector('.play-again');
    const finalScoreBox = document.querySelector('.game-over_result');
    const pointsContainer = document.querySelector('.game__section .points-container');
    const livesTextContainer = document.querySelector('.game__section .lives-amount');

    gameOverElement.classList.add('show');
    playAgainElement.classList.add('show');
    finalScoreBox.classList.add('show');
    pointsContainer.style.display = "none";
    livesTextContainer.style.display = "none";
    
    const finalScoreValue = document.createElement('p');
    const finalScoreText = document.createElement('span');
    finalScoreValue.textContent = addPoints(0); // Display final score
    finalScoreText.textContent = "Your score:";
    finalScoreBox.innerHTML = ''; // Clear previous content
    finalScoreBox.appendChild(finalScoreText);
    finalScoreBox.appendChild(finalScoreValue);
}