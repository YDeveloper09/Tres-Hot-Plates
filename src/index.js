import loadHomePage from './loadHomePage.js';
import loadContactPage from './loadContactPage.js';
import loadMenuPage from './loadMenuPage.js';
import headerAnimation from './headerAnimation';
import './styles.css';
import { initializeScrollReveal } from './scroll.js';


document.addEventListener('DOMContentLoaded', () => {
  
    
    loadHomePage();
    initializeScrollReveal();
    headerAnimation();
    
    
    
    const homeButton = document.getElementById('home-button');
    const contactButton = document.getElementById('contact-button');
    const menuButton = document.getElementById('menu-button');

    homeButton.addEventListener('click', () => {
        loadHomePage();
        initializeScrollReveal();
    });

    contactButton.addEventListener('click', () => {
        loadContactPage();
        initializeScrollReveal();
    });

    menuButton.addEventListener('click', () => {
        loadMenuPage();
        initializeScrollReveal();
    });
});
