// Add to a new auth.js file if needed
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
  
    // Optional: Add click-to-flip functionality
    cardContainer.addEventListener('click', () => {
      cardContainer.classList.toggle('flipped');
    });
  });