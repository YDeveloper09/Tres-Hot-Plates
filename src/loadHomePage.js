import heroImage from './images/hero-image.png'
import gravyImage from './images/gravy.png';
import logo from './images/logo2.png';
export default function loadHomePage() {
    function createElement(tag, className = '', textContent = '') {
      const element = document.createElement(tag);
      if (className) element.className = className;
      if (textContent) element.textContent = textContent;
      return element;
    }
  
    function appendChildren(parent, ...children) {
      children.forEach(child => parent.appendChild(child));
    }

    
    const navbar = document.querySelector(".navbar");
    
    // Check if the logo is already appended
    if (!document.getElementById('imgLogo')) {
        const logoImg = createElement("img");
        logoImg.id = "imgLogo";
        const logoContainer = createElement("div", "logo");
        logoImg.src = logo;
        navbar.prepend(logoContainer);
        logoContainer.appendChild(logoImg);
    }

  
    const content = document.getElementById('content');
    content.innerHTML = ''; 
  
    const section = createElement("section", "hero-section");
    content.appendChild(section);
  
    const heroContainer = createElement("div", "hero-container");
    section.appendChild(heroContainer);
  
    const heroTextContainer = createElement("div", "hero-text");
    const heroImgContainer = createElement("div", "hero-img-container");
    appendChildren(heroContainer, heroTextContainer, heroImgContainer);
    const heroTitle = createElement("h1", "hero-title", "");
    const heroprice = createElement("h2", "hero-subtitle", "The Only Sizzling Food in Town!");
    const caption = createElement("p", "hero-caption", "Discover the ultimate dining experience at Tres Hot Plates!");
    const orderBtn = createElement("button", "orderBtn", "Order Now");
    const icon = createElement("span", "material-icons", "restaurant_menu");
    orderBtn.prepend(icon);
    appendChildren(heroTextContainer, heroTitle, heroprice, caption, orderBtn);
  
    const fancyBorder = createElement("div", "fancy-border-radius");
    const heroImg = createElement("img", "heroImg");
    heroImg.src = heroImage;
    const gravy = createElement("img", "gravy");
    gravy.src = gravyImage;
    appendChildren(heroImgContainer, fancyBorder, heroImg, gravy);
  }

  