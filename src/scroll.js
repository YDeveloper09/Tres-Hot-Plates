export function initializeScrollReveal() {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 200,
    });
  
    sr.reveal(`.navbar`);
    sr.reveal(`.hero-text`,{ delay: 700, distance: '100px', origin: 'bottom' });
    sr.reveal(`.hero-img-container`, { delay: 900, distance: '100px', origin: 'right' });
    sr.reveal(`.menu-section`);
    sr.reveal(`.sub-section`);
    sr.reveal(`.menuHeader`,{delay: 100});
    sr.reveal(`.caption`);
    sr.reveal(`.card`, { interval: 200 });
    sr.reveal(`.orderBtn`, { interval: 200, delay: 1000 });
    sr.reveal('.contact-Us',{distance: '100px', origin: 'left' });
    sr.reveal(`.contactUsHero-container`,{distance: '100px', origin: 'right' });
  }
  