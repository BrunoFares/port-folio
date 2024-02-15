import theRock from './images/rock.jpg';
import cedar from './images/cedar.jpg';
import thousand from './images/thousandyard.jpg';
import './style.css';

const origin = document.querySelector("div#content");

const intro = document.createElement('div');
intro.classList.add('intro');
const h2 = document.createElement('h2');
h2.innerHTML = "The Resting, Welcome Home";
const introParag = document.createElement('p');
introParag.innerHTML = "A group of young individuals with an idea, which has now flourished into the comfiest place to relax, study, or chill with your friends!";

intro.appendChild(h2);
intro.appendChild(introParag);

const h3 = document.createElement('h3');
h3.innerHTML = "This Week's offers";

const offer1 = document.createElement('div');
const img1 = document.createElement('img');
img1.src = theRock;
const div1 = document.createElement('div');
const h41 = document.createElement('h4');
h41.innerHTML = 'The Rock Bite';
const parag1 = document.createElement('p');
parag1.innerHTML = "The highest cheese mountain you've ever seen! With a mix of chicken, mayonnaise and potato fries, this dish isn't for the faint of heart!";

div1.appendChild(h41);
div1.appendChild(parag1);
offer1.appendChild(img1);
offer1.appendChild(div1);

const offer2 = document.createElement('div');
const img2 = document.createElement('img');
img2.src = cedar;
const div2 = document.createElement('div');
const h42 = document.createElement('h4');
h42.innerHTML = 'The Cedar Special';
const parag2 = document.createElement('p');
parag2.innerHTML = "The chef's special! A mix of Lebanese ingredients and foods to bring you the most refined of plates!";

div2.appendChild(h42);
div2.appendChild(parag2);
offer2.appendChild(img2);
offer2.appendChild(div2);

const offer3 = document.createElement('div');
const img3 = document.createElement('img');
img3.src = thousand;
const div3 = document.createElement('div');
const h43 = document.createElement('h4');
h43.innerHTML = 't̷̛̠̩̝͇̙̺͍̜̠̼̩̠̱ͣ̽̐̐̑̆̋̈͒̿̿͋͂̄͒̏̋̇̾̓͂͛̆̉̑̓͜͜͟͠͝͞ȟ̷̶̛̪̳̳̭̲̥͓̼̳̬̼͇̀̉̅ͭͦ̾͋̇͑̔͜ĕ̵̴͇͈̭̤͈̦͙̰̤̖͔͚̬̆ͯ̾̎͑ͫ̀̏̽̍͒͒̆̏ͭ̊̿̈̍̈́̚̚͟͡ͅr̨̡̛̼͕̯͎ͪ͒͑ͬ̈̕̕͠e̺͉͔̫̱̬̓ͣ̐̾ͩ͆ͯ̈̾ͭ i̴̵̘̤͈̞͓̤͖͘͢͠s̢̝̹̘̯̖̠̬̬̲̘̤͎̙̹͈͖̳̱͙̝ͣ̓̈̓͐̐̽̅̏̍͌ͫ̑̆̚̕ ņ̴̧̢̯̝͖͈͉̥̬̺͇̠͉̜̬̄ͪ̽̾ͦ̉̔͆̚͠͞o̶̷̶̴̫͙̟͎̗̲̰͛̀͛ͦ̿͗͘̕ g̙̘ͤ͝o̶̶̡̮̻̙̼͕̼̩͔ͣ͗̋ͣ̈́ͬ̅̉͋̐̕̚̕̕͘͢͜͠͠͝͡i͇̋̔ǹ̷̡̰̩̗̱̝͗ͦ̅g̷̼ͯ̎̎͜ b̴̶̡̧̛̤̺͇͈̥̳͚̩͔̱̳̙͗̋ͩͯͪ͗̒̋̓ͬ͗͊͋̑̈̈̈ͮ̓͒ͤͪ̕̕͢͞͡ͅa̷̷̡͙̺͖̖̳̱̻̬̱͕̤̟̼͔͆̈́ͦ̏̉ͣͩ́͑̋͂͒͒ͣͥ̋ͥ͑̍͢͢͟͜͡ͅc̸̜̍ͤ_̨͎k̷̷̢̡̻̦̯̯̫̱̯̩̹̖͖͎̋̀ͫ̿̉͆̾ͤ͂ͧ͌̏̓̀̓̽̾́̈̆͑̚͢͢͢͡͝<';
const parag3 = document.createElement('p');
parag3.innerHTML = "helpmethevoicesaregettinglouder";

div3.appendChild(h43);
div3.appendChild(parag3);
offer3.appendChild(img3);
offer3.appendChild(div3);

offer1.classList.add('offer');
offer2.classList.add('offer');
offer3.classList.add('offer');

function renderHome() {
    origin.appendChild(intro);
    origin.appendChild(h3);
    origin.appendChild(offer1);
    origin.appendChild(offer2);
    origin.appendChild(offer3);
}

export {renderHome};