import theRock from './images/rock.jpg';
import cedar from './images/cedar.jpg';
import thousand from './images/thousandyard.jpg';

const origin = document.querySelector("div#content");

const intro = document.createElement('div');
intro.classList.add('intro');
const h2 = document.createElement('h2');
h2.innerHTML = "Hi, I'm Bruno Fares!";
const introParag = document.createElement('p');
introParag.innerHTML = "I'm a second year computer science student at NDU - Louaize.</br>Welcome to my website!";

intro.appendChild(h2);
intro.appendChild(introParag);

const h3 = document.createElement('h3');
h3.innerHTML = "This Week's offers";

const offersTitle = ['The Rock Bite', 'The Cedar Special', ''];
const offersDesc = [
    "The highest cheese mountain you've ever seen! With a mix of chicken, mayonnaise and potato fries, this dish isn't for the faint of heart!",
    "The chef's special! A mix of Lebanese ingredients and foods to bring you the most refined of plates!",
    ""
]
const offersImg = [theRock, cedar, thousand];

const offers = document.createElement('div');
for (let i = 0; i < 3; i++) {
    const offer = document.createElement('div');
    const img = document.createElement('img');
    img.src = offersImg[i];
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.innerHTML = offersTitle[i];
    const parag = document.createElement('p');
    parag.innerHTML = offersDesc[i];

    div.appendChild(h4);
    div.appendChild(parag);
    offer.appendChild(img);
    offer.appendChild(div);

    offer.classList.add('offer');
    offers.appendChild(offer);
}

function renderHome() {
    origin.appendChild(intro);
    origin.appendChild(h3);
    origin.appendChild(offers);
}

export {renderHome};