import './style/menuStyle.css';

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

const menuTitles = ['Starters', 'Burgers', 'Pizzas', 'Crepes'];
const menuOptions = [
    'French Fries<br>Onion Rings<br>Nachos<br>Hommos<br>Tabboule<br>Chicken Nuggets',
    'Hamburger<br>Chicken Burger<br>Hambigo<br>Burger Lovers<br>Tabburger',
    'Bucciarratti<br>Margharetti<br>Decoco<br>Prosciutto e Funghi<br>Diavola<br>Forza Milan',
    'Michel<br>Ribal<br>Chris<br>Kevin<br>Caramelo de Chocolate'
]
const menuPrices = [
    '$3<br>$4<br>$7<br>$5<br>$5<br>$4',
    '$6<br>$5<br>Priceless<br>$3<br>$4',
    '$8<br>$8<br>$7<br>$10<br>$6<br>$15',
    '$10<br>$10<br>$10<br>$10<br>$17'
]

for (let i = 0; i < 4; i++) {
    const innerDiv1 = document.createElement('div');
    const h41 = document.createElement('h4');
    h41.textContent = menuTitles[i];
    const parag1 = document.createElement('p');
    parag1.innerHTML = menuOptions[i];
    const price1 = document.createElement('p');
    price1.innerHTML = menuPrices[i];

    innerDiv1.appendChild(parag1);
    innerDiv1.appendChild(price1);
    menuDiv.appendChild(h41);
    menuDiv.appendChild(innerDiv1);
}

function renderMenu() {
    origin.appendChild(intro);
    origin.appendChild(menuDiv);
}

export { renderMenu };