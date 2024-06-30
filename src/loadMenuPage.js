
export default function loadMenuPage() {
        function createElement(tag, className = '', textContent = '') {
          const element = document.createElement(tag);
          if (className) element.className = className;
          if (textContent) element.textContent = textContent;
          return element;
        }
      
        function appendChildren(parent, ...children) {
          children.forEach(child => parent.appendChild(child));
        }
      
        const content = document.getElementById('content');
        content.innerHTML = ''; // Clear the content
      
        const section = createElement("section", "menu-section");
        content.appendChild(section);

        const firstColumnContainer = createElement("div", "menu-container");
        const secondColumnContainer = createElement("div", "menu-container");
        const thirdColumnContainer = createElement("div", "menu-container");
        const fourthColumnContainer = createElement("div", "menu-container");

        appendChildren(section, firstColumnContainer,secondColumnContainer,thirdColumnContainer,fourthColumnContainer);

        const sectionTitle = createElement("h1", "menuHeader","Try Our Popular Dishes");
        const sectionText = createElement("p", "caption","Discover our exclusive dishes and deals!");
        content.prepend(sectionTitle, sectionText);

        const garlicpepperCard = createElement("div", "card");
        const gpdivImage = createElement("div", "image");
        const gpImage = createElement("img", "text");
        gpImage.src = "/src/images/garlic-pepper.png";
        appendChildren(gpdivImage, gpImage);
        const gpTitle = createElement("span", "title","Sizzling Garlic Pepper Beef");
        const gpPrice = createElement("span", "price","P99.00");
        firstColumnContainer.appendChild(garlicpepperCard);
        appendChildren(garlicpepperCard, gpdivImage, gpTitle, gpPrice);

        const porkChopCard = createElement("div", "card");
        const pcdivImage = createElement("div", "image");
        const pcImage = createElement("img", "text");
        pcImage.src = "/src/images/pork.png";
        appendChildren(pcdivImage, pcImage);
        const pcTitle = createElement("span", "title","Sizzling Pork Chop");
        const pcPrice = createElement("span", "price","P99.00");
        secondColumnContainer.appendChild(porkChopCard);
        appendChildren(porkChopCard, pcdivImage, pcTitle, pcPrice);

        const burgerCard = createElement("div", "card");
        const bgrdivImage = createElement("div", "image");
        const bgrImage = createElement("img", "text");
        bgrImage.src = "/src/images/burgersteak.png";
        appendChildren(bgrdivImage, bgrImage);
        const bgrTitle = createElement("span", "title","Sizzling Burger Steak");
        const bgrPrice = createElement("span", "price","P99.00");
       thirdColumnContainer.appendChild(burgerCard);
        appendChildren(burgerCard, bgrdivImage, bgrTitle, bgrPrice);

        const sausageCard = createElement("div", "card");
        const sausagedivImage = createElement("div", "image");
        const sausageImage = createElement("img", "text");
        sausageImage.src = "/src/images/sausage.png";
        appendChildren(sausagedivImage, sausageImage);
        const sausageTitle = createElement("span", "title","Sizzling Sausage");
        const sausagePrice = createElement("span", "price","P99.00");
        fourthColumnContainer.appendChild(sausageCard);
        appendChildren(sausageCard, sausagedivImage, sausageTitle, sausagePrice);

        const subsection = createElement("section", "sub-section");
        content.appendChild(subsection);

        const firstSubColumnContainer = createElement("div", "menu-container");
        const secondSubColumnContainer = createElement("div", "menu-container");
        const thirdSubColumnContainer = createElement("div", "menu-container");

        appendChildren(subsection, firstSubColumnContainer, secondSubColumnContainer, thirdSubColumnContainer);

        const comboOneCard = createElement("div", "card");
        const comboOnedivImage = createElement("div", "image");
        const comboOneImage = createElement("img", "text");
        comboOneImage.src = "/src/images/sisig.png";
        appendChildren(comboOnedivImage, comboOneImage);
        const comboOneTitle = createElement("span", "title","Sizzling Sisig");
        const comboOnePrice = createElement("span", "price","P99.00");
        firstSubColumnContainer.appendChild(comboOneCard);
        appendChildren(comboOneCard, comboOnedivImage, comboOneTitle, comboOnePrice);

        const comboTwoCard = createElement("div", "card");
        const comboTwodivImage = createElement("div", "image");
        const comboTwoImage = createElement("img", "text");
        comboTwoImage.src = "/src/images/pork-beef.png";
        appendChildren(comboTwodivImage, comboTwoImage);
        const comboTwoTitle = createElement("span", "title","Sizzling Pork and Garlic Pepper Beef");
        const comboTwoPrice = createElement("span", "price","P99.00");
        secondSubColumnContainer.appendChild(comboTwoCard);
        appendChildren(comboTwoCard, comboTwodivImage, comboTwoTitle, comboTwoPrice);

        const comboThirdCard = createElement("div", "card");
        const comboThirddivImage = createElement("div", "image");
        const comboThirdImage = createElement("img", "text");
        comboThirdImage.src = "/src/images/sausage-burger.png";
        appendChildren(comboThirddivImage, comboThirdImage);
        const comboThirdTitle = createElement("span", "title","Sizzling Burger Steak and Sausage");
        const comboThirdPrice = createElement("span", "price","P99.00");
        thirdSubColumnContainer.appendChild(comboThirdCard);
        appendChildren(comboThirdCard, comboThirddivImage, comboThirdTitle, comboThirdPrice);
}