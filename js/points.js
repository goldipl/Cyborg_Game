export const addPoints = (pointsQuantity) => {
    const pointsContainer = document.querySelector('.points-container');
    let currentPoints = parseInt(pointsContainer.innerText);

    currentPoints += pointsQuantity;
    const formattedPoints = currentPoints.toString().padStart(6, '0');
    pointsContainer.innerText = formattedPoints;
};