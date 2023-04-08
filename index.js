import './index.css';
import JS_IMAGE from '../assets/logo.png';

const h1HTMLElement = document.createElement('h1');
h1HTMLElement.className = 'js-title'
h1HTMLElement.innerText = 'I love JavaScript';

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;

document.body.append(h1HTMLElement, jsImageHTML);
