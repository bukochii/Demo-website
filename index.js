document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('cycleText');
  const circleButton = document.querySelector('.ellipse');
  const arrowElement = document.querySelector('.vector');
  const redirectButton = document.getElementById('redirect-button');
  const yellowBar = document.querySelector('.rectangle'); // Yellow bar
  const loadingScreen = document.getElementById('loading-screen'); // Loading screen

  const texts = ['Portfolio', 'Shop', 'Assets'];
  const urls = ['portfolio.html', 'shop.html', 'assets.html']; // Subpages
  let currentIndex = 0;

  function cycleText() {
    // Add flicker effect
    yellowBar.classList.add('flicker-effect');
    textElement.classList.add('flicker-effect');
    redirectButton.classList.add('flicker-effect');

    arrowElement.classList.add('animate');
    textElement.classList.add('fade-out');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      textElement.textContent = texts[currentIndex];
      textElement.classList.remove('fade-out');
      textElement.classList.add('fade-in');
      
      setTimeout(() => {
        textElement.classList.remove('fade-in');
      }, 300);
    }, 300);

    setTimeout(() => {
      arrowElement.classList.remove('animate');
    }, 600);

    // Remove flicker effect after animation
    setTimeout(() => {
      yellowBar.classList.remove('flicker-effect');
      textElement.classList.remove('flicker-effect');
      redirectButton.classList.remove('flicker-effect');
    }, 400);
  }

  function redirectToPage() {
    loadingScreen.classList.add('active'); // Show loading screen
    setTimeout(() => {
        window.location.href = urls[currentIndex]; // Redirect after 5 sec
    }, 5000);//change loading screen time
  }

  circleButton.addEventListener('click', cycleText);
  redirectButton.addEventListener('click', redirectToPage);
});



