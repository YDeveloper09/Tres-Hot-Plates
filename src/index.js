import loadHomePage from './loadHomePage.js';
import loadContactPage from './loadContactPage.js';
import loadMenuPage from './loadMenuPage.js';
import './styles.css';
import { initializeScrollReveal } from './scroll.js';
import './images';

document.addEventListener('DOMContentLoaded', () => {
  
    
    loadHomePage();
    initializeScrollReveal();
    
    const Mode = document.querySelector('.material-symbols-outlined');
    const navbar = document.querySelector('#navlist')
    const modal = document.querySelector('.modal__header');

    Mode.addEventListener('click', () => {
       if (Mode.innerText == "light_mode"){
        Mode.innerText = "dark_mode";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        const navbarElements = navbar.querySelectorAll('*');
            navbarElements.forEach(element => {
                element.style.color = "white";
            });
        modal.style.color = "black"
    } else {
        Mode.innerText = "light_mode";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#121212";
        const navbarElements = navbar.querySelectorAll('*');
            navbarElements.forEach(element => {
                element.style.color = "#121212";
            });
    }
       });

    const headers = ["Tres Hot Plates","Taste the Sizzle","Crave. Sizzle. Enjoy","Heat Meets Flavor"];
    let currentIndex = 0;
    let charIndex = 0;
    let typingInterval;

    function typeHeader() {
        const headerElement = document.querySelector(".hero-title");
        if (headerElement) {
            if (charIndex < headers[currentIndex].length) {
                headerElement.textContent += headers[currentIndex].charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    charIndex = 0;
                    currentIndex = (currentIndex + 1) % headers.length;
                    headerElement.textContent = '';
                    typingInterval = setInterval(typeHeader, 100); 
                }, 1000); 
            }
        }
    }

    typingInterval = setInterval(typeHeader, 100);
    
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
