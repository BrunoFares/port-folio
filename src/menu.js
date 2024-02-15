import './menuStyle.css';

const origin = document.querySelector('div#content');

const intro = document.createElement('div');
intro.classList.add('intro');
const h2 = document.createElement('h2');
h2.textContent = 'Our Menu';
const introParag = document.createElement('p');
introParag.textContent = 'Take a look at all the delicious items we offer'

intro.appendChild(h2);
intro.appendChild(introParag);

const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');

const innerDiv1 = document.createElement('div');
const h41 = document.createElement('h4');
h41.textContent = 'Starters';
const parag1 = document.createElement('p');
parag1.innerHTML = 'French Fries<br>Onion Rings<br>Nachos<br>Hommos<br>Tabboule<br>Chicken Nuggets';
const price1 = document.createElement('p');
price1.innerHTML = '$3<br>$4<br>$7<br>$5<br>$5<br>$4';

innerDiv1.appendChild(parag1);
innerDiv1.appendChild(price1);
menuDiv.appendChild(h41);
menuDiv.appendChild(innerDiv1);

const innerDiv2 = document.createElement('div');
const h42 = document.createElement('h4');
h42.textContent = 'Burgers';
const parag2 = document.createElement('p');
parag2.innerHTML = 'Hamburger<br>Chicken Burger<br>Hambigo<br>Burger Lovers<br>Tabburger';
const price2 = document.createElement('p');
price2.innerHTML = '$6<br>$5<br>Priceless<br>$3<br>$4';

innerDiv2.appendChild(parag2);
innerDiv2.appendChild(price2);
menuDiv.appendChild(h42);
menuDiv.appendChild(innerDiv2);

function renderMenu() {
    origin.appendChild(intro);
    origin.appendChild(menuDiv);
}

export { renderMenu };