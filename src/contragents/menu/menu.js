import html from './menu.html';
import './menu.css';
import {show} from "../modal/modal";

const element = document.createElement('div');
element.innerHTML = html;
const addButtonElement = element.querySelector('.add-button');

addButtonElement.addEventListener('click', evt => show());

export default () => element;
