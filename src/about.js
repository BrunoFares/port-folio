import './style/aboutStyle.css';
import thumb from './images/thumb.gif';

const origin = document.querySelector('div#content');

const intro = document.createElement('div');
intro.classList.add('intro');
const h2 = document.createElement('h2');
h2.textContent = 'About us';
const introParag = document.createElement('p');
introParag.textContent = 'Who are we, to be exact?'

intro.appendChild(h2);
intro.appendChild(introParag);

const menuDiv = document.createElement('div');
menuDiv.classList.add('about');

const h4 = document.createElement('h4');
h4.textContent = 'The team';
const parag = document.createElement('p');
parag.innerHTML = 'This is a fake page innit so there\'s nothing much to write here.<br>I did this on my own<br>';
const link = document.createElement('a');
link.href = "www.github.com/BrunoFares";
link.innerHTML = 'Hire me ;)';
parag.appendChild(link);

const img = document.createElement("img");
img.src = thumb;
img.classList.add('final');

menuDiv.appendChild(h4);
menuDiv.appendChild(parag);
menuDiv.appendChild(img);

function renderAbout() {
    origin.appendChild(intro);
    origin.appendChild(menuDiv);
}

export {renderAbout};