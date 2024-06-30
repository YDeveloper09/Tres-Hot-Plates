export default function loadContactPage() {
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
  
    const section = createElement("section", "hero-section");
    content.appendChild(section);
  
    const contactUsContainer = createElement("div", "contactUsContainer");
    section.appendChild(contactUsContainer);
  
    const contactUsFormContainer = createElement("div", "contact-Us");
    const contactImageContainer = createElement("div", "contactUsHero-container");
    appendChildren(contactUsContainer, contactUsFormContainer, contactImageContainer);
  

    const contactHeroImg = createElement("img", "heroImg");
    contactHeroImg.src = "/src/images/contactHero.png";
    appendChildren(contactImageContainer, contactHeroImg);


    const modal = createElement('div', 'modal');
    const modalHeader = createElement('div', 'modal__header');
    const modalTitle = createElement('span', 'modal__title', 'Send us a Message');
    const closeButton = createElement('button', 'button button--icon');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    appendChildren(closeButton, svg);

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('fill', 'none');
    path1.setAttribute('d', 'M0 0h24v24H0V0z');
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z');
    appendChildren(svg, path1, path2);

    appendChildren(modalHeader, modalTitle, closeButton);
    appendChildren(modal, modalHeader);

    const modalBody = createElement('div', 'modal__body');
    const inputGroupTitle = createElement('div', 'input');
    const labelTitle = createElement('label', 'input__label', 'Full Name');
    const inputTitle = createElement('input', 'input__field');
    inputTitle.type = 'text';
    const descriptionTitle = createElement('p', 'input__description', 'Enter your Full Name');

    appendChildren(inputGroupTitle, labelTitle, inputTitle, descriptionTitle);
    appendChildren(modalBody, inputGroupTitle);

    const inputGroupDescription = createElement('div', 'input');
    const labelDescription = createElement('label', 'input__label', 'Message');
    const textareaDescription = createElement('textarea', 'input__field input__field--textarea');
    const descriptionTextarea = createElement('p', 'input__description', "Help us improve our services by sending a message");

    appendChildren(inputGroupDescription, labelDescription, textareaDescription, descriptionTextarea);
    appendChildren(modalBody, inputGroupDescription);

    appendChildren(modal, modalBody);

    const modalFooter = createElement('div', 'modal__footer');
    const createButton = createElement('button', 'button button--primary', 'Send');

    appendChildren(modalFooter, createButton);
    appendChildren(modal, modalFooter);

    appendChildren(content, modal);
    
appendChildren(contactUsFormContainer,modal);

  }

  