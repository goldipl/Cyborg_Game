export const addPoints = (pointsQuantity) => {
    const pointsContainer = document.querySelector('.points-container');
    pointsContainer.innerText = parseInt(pointsContainer.innerText) + pointsQuantity;
};