document.addEventListener('DOMContentLoaded', () => {
  const creators = [
    '@Mosaicbeard', '@Schnider', '@Breadcat12', 
    '@Krusagat', '@Alphonso', '@Blues', '@Thanosbaby'
  ];

  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  let currentIndex = 2; // Start with center card

  const toggleBtn  = document.querySelector('.toggle-btn');
  const leftArea   = document.querySelector('.toggle-area.left');
  const rightArea  = document.querySelector('.toggle-area.right');
  const stickersSlide = document.querySelector('.stickers-slide');
  const tokensSlide   = document.querySelector('.tokens-slide'); 

  

  // Create creator cards
  creators.forEach((creator, index) => {
    const card = document.createElement('div');
    card.className = 'creator-card';
    card.innerHTML = `
      <div class="profile-container">
        <img src="images/profiles/${creator}.jpg" alt="${creator}" class="profile-image">
      </div>
      <div class="username">${creator}</div>
    `;
    track.appendChild(card);
  });

  function updateCards() {
    const cards = document.querySelectorAll('.creator-card');
    const containerWidth = track.parentElement.offsetWidth;
    const cardWidth = 140; // 130px card + 5px*2 margins
    
    // Calculate center position
    const centerPosition = (containerWidth / 2) - (cardWidth / 2);
    
    // Calculate track translation
    const trackPosition = centerPosition - (currentIndex * cardWidth);
   
  
    // Update card states
    cards.forEach((card, index) => {
      const diff = Math.abs(index - currentIndex);
      const scale = 1 - (diff * 0.15);
      const opacity = 1 - (diff * 0.3);
      
      card.style.transform = `scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = 100 - diff;
      card.classList.toggle('active', diff === 0);
    });
  
    

    // Proper centering formula
    track.style.transform = `translateX(calc(50% - ${currentIndex * cardWidth + cardWidth/2}px))`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    updateCards();
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < creators.length - 1) currentIndex++;
    updateCards();
  });

  // Initial setup
  updateCards();
;

    
    // Ensure initial slide visibility
    stickersSlide.classList.add('active');
    tokensSlide.classList.remove('active');
  
    // When right area is clicked: switch to tokens state
    rightArea.addEventListener('click', () => {
      if (toggleBtn.dataset.state !== 'tokens') {
        toggleBtn.dataset.state = 'tokens';
        toggleBtn.textContent = 'Top tokens';
        // Move button to the right so that its right edge aligns with container's right edge
        toggleBtn.style.transform = 'translateX(calc(235% ))';
        // Switch slide visibility
        stickersSlide.classList.remove('active');
        tokensSlide.classList.add('active');
        document.querySelector('.toggle-wrapper').style.background = '#000000';
      }
    });
  
    // When left area is clicked: switch to stickers state
    leftArea.addEventListener('click', () => {
      if (toggleBtn.dataset.state !== 'stickers') {
        toggleBtn.dataset.state = 'stickers';
        toggleBtn.textContent = 'Top stickers';
        // Move button back to the left edge
        toggleBtn.style.transform = 'translateX(0)';
        // Switch slide visibility
        tokensSlide.classList.remove('active');
        stickersSlide.classList.add('active');
        document.querySelector('.toggle-wrapper').style.background = '#FF470A';
      }
    });

    const logo = document.getElementById('logo');
  const logoLink = document.getElementById('logo-link');

  // Prevent default link behavior
  logoLink.addEventListener('click', (event) => {
    event.preventDefault(); // Stop immediate redirection

    // Add the 'enlarge' class to trigger the animation
    logo.classList.add('enlarge');

    // Wait for the animation to complete, then redirect
    setTimeout(() => {
      window.location.href = logoLink.href; // Redirect to index.html
    }, 500); // Match the duration of the animation (0.5s)
  });
  });
  
  
  