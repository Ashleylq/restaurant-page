import { renderAboutPage } from "./about";
import { renderContact } from "./contact";
import { renderMenu } from "./menu";

const aboutButton = document.querySelector('.about-button');
const menuButton = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

aboutButton.addEventListener('click', () => {renderAboutPage()});
menuButton.addEventListener('click', () => {renderMenu()});
contactButton.addEventListener('click', () => {renderContact()});