import {renderHome} from './home.js';
import {renderMenu} from './menu.js';
import {renderAbout} from "./about.js";
import { emptyContent } from './emptyPage.js';
import './style.css';

const button = document.querySelectorAll('header button');
const div = document.querySelector('div#content');

renderHome();

button.forEach(btn => {
    btn.addEventListener('mouseover', function() {
        btn.style.backgroundColor = "rgb(99, 2, 2)";
    })
})

button.forEach(btn => {
    btn.addEventListener('mouseout', function() {
        btn.style.backgroundColor = "rgb(142, 2, 2)";
    })
})

button.forEach(btn => {
    btn.addEventListener('mousedown', function() {
        btn.style.backgroundColor = "rgb(70, 2, 2)";
    })
})

button.forEach(btn => {
    btn.addEventListener('mouseup', function() {
        btn.style.backgroundColor = "rgb(142, 2, 2)";
    })
})

button[0].addEventListener('click', () => {
    emptyContent(div);
    renderHome();
});
button[1].addEventListener('click', () => {
    emptyContent(div);
    renderMenu()
});
button[2].addEventListener('click', () => {
    emptyContent(div);
    renderAbout();
});