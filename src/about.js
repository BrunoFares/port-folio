import thumb from './images/thumb.gif';

const origin = document.querySelector('div#content');

const intro = document.createElement('div');
intro.classList.add('intro');
const h2 = document.createElement('h2');
h2.textContent = 'Contact Me';
const introParag = document.createElement('p');
introParag.textContent = 'Reach out to me on any of these platforms.'

intro.appendChild(h2);
intro.appendChild(introParag);

const menuDiv = document.createElement('div');
menuDiv.classList.add('about');

const h4 = document.createElement('h4');
h4.textContent = 'My Socials';
const parag = document.createElement('p')
const ul = document.createElement('ul');
// continue the list of socials
const link = document.createElement('a');
link.href = "https://www.linkedin.com/in/brunofares/";
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