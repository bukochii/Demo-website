const optionsEl = document.querySelector('.options');
const optionBtns = document.querySelectorAll('.option');
const sections = document.querySelectorAll('.content-section');

optionBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const angle = -90 * idx;
    optionsEl.style.transform = `rotate(${angle}deg)`;
    document.querySelector('.indicator').style.transform = `rotate(${angle}deg)`;
    
    // keep labels horizontal
    optionBtns.forEach(obtn => {
      const span = obtn.querySelector('span');
      span.style.transform = `rotate(${-angle}deg)`;
    });

    // swap content
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

// initialize first view
optionBtns[0].click();