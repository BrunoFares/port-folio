import {renderHome} from './home.js';

const button = document.querySelectorAll('header button');

button.forEach(btn => {
    btn.addEventListener('mouseover', function() {
        btn.style.backgroundColor = "rgb(80, 35, 0)";
    })
})

button.forEach(btn => {
    btn.addEventListener('mouseout', function() {
        btn.style.backgroundColor = "rgb(95, 41, 0)";
    })
})

button.forEach(btn => {
    btn.addEventListener('mousedown', function() {
        btn.style.backgroundColor = "rgb(48, 21, 0)";
    })
})

button.forEach(btn => {
    btn.addEventListener('mouseup', function() {
        btn.style.backgroundColor = "rgb(95, 41, 0)";
    })
})

renderHome();