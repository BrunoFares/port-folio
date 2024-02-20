(()=>{"use strict";var e={372:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(500),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([e.id,"div.about {\n    border: rgb(241, 241, 241) 1px solid;\n    border-radius: 2em;\n    background-color: rgb(241, 241, 241);\n    margin: 2em 10%;\n    height: 10%;\n    align-items: center;\n    box-shadow: 13px 12px rgb(104, 28, 0);\n}\n\ndiv.intro {\n    margin: 8em 10% 10em;\n}\n\nh2 {\n    font-size: 1.8rem;\n    margin: 0.5rem;\n}\n\nh4 {\n    color: black;\n    margin: 1.5em 2em 0 2em;\n    text-align: left;\n}\n\ndiv.about p {\n    color: black;\n    margin: 2em;\n}\n\nimg.final {\n    height: 200px;\n    margin: 0 0 2em;\n    border-radius: 0.5em;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\na:hover {\n    color: rgb(161, 0, 0);\n}",""]);const c=a},844:(e,n,t)=>{t.d(n,{c:()=>b});var r=t(500),o=t.n(r),i=t(312),a=t.n(i),c=t(536),d=t.n(c),s=new URL(t(140),t.b),l=new URL(t(40),t.b),u=new URL(t(752),t.b),m=a()(o()),p=d()(s),h=d()(l),f=d()(u);m.push([e.id,`@font-face {\n    font-family: 'SanFrancisco';\n    src: url(${p}) format('woff'), url(${h}) format('woff2');\n}\n\n* {\n    text-align: center;\n    font-size: 40px;\n    margin: 0;\n    padding: 0;\n    color: white;\n    font-family: 'SanFrancisco';\n}\n\ndiv.offer {\n    display: flex;\n    border: rgb(241, 241, 241) 1px solid;\n    border-radius: 2em;\n    background-color: rgb(241, 241, 241);\n    margin: 2em 10%;\n    height: 10%;\n    align-items: center;\n    box-shadow: 13px 12px rgb(104, 28, 0);\n}\n\ndiv.offer div {\n    padding: 0; \n    margin: 3em 5%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\ndiv.offer div * {\n    text-align: left;\n    padding: 0;\n    margin: 4%;\n    font-size: 100%;\n    color: black;\n}\n\nimg {\n    height: 10em;\n    margin: 0 0 0 8%;\n    border-radius: 5em;\n    box-shadow: 10px 8px rgb(104, 28, 0);\n}\n\ndiv.intro {\n    margin: 8em 10% 20em;\n}\n\nh2 {\n    font-size: 1.8rem;\n    margin: 0.5rem;\n}\n\nh3 {\n    font-size: 1.7rem;\n}\n\nnav {\n    background-color: rgb(95, 41, 0);\n    margin: 0 10rem;\n    display: flex;\n    justify-content: space-around;\n}\n\nheader {\n    background-color:rgb(95, 41, 0);\n}\n\nbutton {\n    background-color: rgb(95, 41, 0);\n    border: 0;\n    color: white;\n    padding: 0.5rem 1.5rem;\n}\n\nhtml body {\n    background-image: url(${f});\n    backdrop-filter: blur(10px);\n}\n\ndiv.offer:nth-of-type(4n) p {\n    font-size: 0.4em;\n}`,""]);const b=m},52:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(500),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([e.id,"div.menu {\n    border: rgb(241, 241, 241) 1px solid;\n    border-radius: 2em;\n    background-color: rgb(241, 241, 241);\n    margin: 2em 10%;\n    height: 10%;\n    align-items: center;\n    box-shadow: 13px 12px rgb(104, 28, 0);\n}\n\ndiv.intro {\n    margin: 8em 10% 10em;\n}\n\nh2 {\n    font-size: 1.8rem;\n    margin: 0.5rem;\n}\n\nh4 {\n    color: black;\n    margin: 1.5em 2em 0 2em;\n    text-align: left;\n}\n\ndiv.menu div {\n    padding: 0;\n    margin: 0 5%;\n    height: 100%;\n    display: flex;\n}\n\ndiv.menu div * {\n    text-align: left;\n    padding: 0;\n    margin: 4%;\n    font-size: 100%;\n    color: black;\n    flex: 1;\n}\n\ndiv.menu div p:last-child {\n    text-align: right;\n}",""]);const c=a},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},536:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},176:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},139:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},140:(e,n,t)=>{e.exports=t.p+"b2f3ec715f55638a114f.woff"},40:(e,n,t)=>{e.exports=t.p+"07e002956c140bb9ac4b.woff2"},752:(e,n,t)=>{e.exports=t.p+"2dd4d50b6d12578ee6c6.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"0095527f9de29005853f.jpg",n=t.p+"e4cc7a6b53485069b17e.jpg",r=t.p+"8f8458abe2c3d7ba7dd1.jpg";var o=t(596),i=t.n(o),a=t(139),c=t.n(a),d=t(176),s=t.n(d),l=t(120),u=t.n(l),m=t(808),p=t.n(m),h=t(936),f=t.n(h),b=t(844),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p(),i()(b.c,g),b.c&&b.c.locals&&b.c.locals;const v=document.querySelector("div#content"),y=document.createElement("div");y.classList.add("intro");const x=document.createElement("h2");x.innerHTML="The Resting, Welcome Home";const C=document.createElement("p");C.innerHTML="A group of young individuals with an idea, which has now flourished into the comfiest place to relax, study, or chill with your friends!",y.appendChild(x),y.appendChild(C);const E=document.createElement("h3");E.innerHTML="This Week's offers";const w=["The Rock Bite","The Cedar Special","ȟ̷̶̛̪̳̳̭̲̥͓̼̳̬̼͇̀̉̅ͭͦ̾͋̇͑̔͜ĕ̵̴͇͈̭̤͈̦͙̰̤̖͔͚̬̆ͯ̾̎͑ͫ̀̏̽̍͒͒̆̏ͭ̊̿̈̍̈́̚̚͟͡ͅr̨̡̛̼͕̯͎ͪ͒͑ͬ̈̕̕͠e̺͉͔̫̱̬̓ͣ̐̾ͩ͆ͯ̈̾ͭ i̴̵̘̤͈̞͓̤͖͘͢͠s̢̝̹̘̯̖̠̬̬̲̘̤͎̙̹͈͖̳̱͙̝ͣ̓̈̓͐̐̽̅̏̍͌ͫ̑̆̚̕ ņ̴̧̢̯̝͖͈͉̥̬̺͇̠͉̜̬̄ͪ̽̾ͦ̉̔͆̚͠͞o̶̷̶̴̫͙̟͎̗̲̰͛̀͛ͦ̿͗͘̕ g̙̘ͤ͝o̶̶̡̮̻̙̼͕̼̩͔ͣ͗̋ͣ̈́ͬ̅̉͋̐̕̚̕̕͘͢͜͠͠͝͡i͇̋̔ǹ̷̡̰̩̗̱̝͗ͦ̅g̷̼ͯ̎̎͜ b̴̶̡̧̛̤̺͇͈̥̳͚̩͔̱̳̙͗̋ͩͯͪ͗̒̋̓ͬ͗͊͋̑̈̈̈ͮ̓͒ͤͪ̕̕͢͞͡ͅa̷̷̡͙̺͖̖̳̱̻̬̱͕̤̟̼͔͆̈́ͦ̏̉ͣͩ́͑̋͂͒͒ͣͥ̋ͥ͑̍͢͢͟͜͡ͅc̸̜̍ͤ_̨͎k̷̷̢̡̻̦̯̯̫̱̯̩̹̖͖͎̋̀ͫ̿̉͆̾ͤ͂ͧ͌̏̓̀̓̽̾́̈̆͑̚͢͢͢͡͝<"],T=["The highest cheese mountain you've ever seen! With a mix of chicken, mayonnaise and potato fries, this dish isn't for the faint of heart!","The chef's special! A mix of Lebanese ingredients and foods to bring you the most refined of plates!","helpmethevoicesaregettinglouder"],k=[e,n,r],L=document.createElement("div");for(let e=0;e<3;e++){const n=document.createElement("div"),t=document.createElement("img");t.src=k[e];const r=document.createElement("div"),o=document.createElement("h4");o.innerHTML=w[e];const i=document.createElement("p");i.innerHTML=T[e],r.appendChild(o),r.appendChild(i),n.appendChild(t),n.appendChild(r),n.classList.add("offer"),L.appendChild(n)}function $(){v.appendChild(y),v.appendChild(E),v.appendChild(L)}var M=t(52),S={};S.styleTagTransform=f(),S.setAttributes=u(),S.insert=s().bind(null,"head"),S.domAPI=c(),S.insertStyleElement=p(),i()(M.c,S),M.c&&M.c.locals&&M.c.locals;const H=document.querySelector("div#content"),A=document.createElement("div");A.classList.add("intro");const j=document.createElement("h2");j.textContent="Our Menu";const z=document.createElement("p");z.textContent="Take a look at all the delicious items we offer",A.appendChild(j),A.appendChild(z);const F=document.createElement("div");F.classList.add("menu");const I=["Starters","Burgers","Pizzas","Crepes"],P=["French Fries<br>Onion Rings<br>Nachos<br>Hommos<br>Tabboule<br>Chicken Nuggets","Hamburger<br>Chicken Burger<br>Hambigo<br>Burger Lovers<br>Tabburger","Bucciarratti<br>Margharetti<br>Decoco<br>Prosciutto e Funghi<br>Diavola<br>Forza Milan","Michel<br>Ribal<br>Chris<br>Kevin<br>Caramelo de Chocolate"],R=["$3<br>$4<br>$7<br>$5<br>$5<br>$4","$6<br>$5<br>Priceless<br>$3<br>$4","$8<br>$8<br>$7<br>$10<br>$6<br>$15","$10<br>$10<br>$10<br>$10<br>$17"];for(let e=0;e<4;e++){const n=document.createElement("div"),t=document.createElement("h4");t.textContent=I[e];const r=document.createElement("p");r.innerHTML=P[e];const o=document.createElement("p");o.innerHTML=R[e],n.appendChild(r),n.appendChild(o),F.appendChild(t),F.appendChild(n)}var B=t(372),N={};N.styleTagTransform=f(),N.setAttributes=u(),N.insert=s().bind(null,"head"),N.domAPI=c(),N.insertStyleElement=p(),i()(B.c,N),B.c&&B.c.locals&&B.c.locals;const q=t.p+"d8ba28719e81320ba726.gif",O=document.querySelector("div#content"),U=document.createElement("div");U.classList.add("intro");const _=document.createElement("h2");_.textContent="About us";const W=document.createElement("p");W.textContent="Who are we, to be exact?",U.appendChild(_),U.appendChild(W);const D=document.createElement("div");D.classList.add("about");const J=document.createElement("h4");J.textContent="The team";const K=document.createElement("p");K.innerHTML="This is a fake page innit so there's nothing much to write here.<br>I did this on my own<br>";const Q=document.createElement("a");Q.href="https://www.github.com/BrunoFares",Q.innerHTML="Hire me ;)",K.appendChild(Q);const G=document.createElement("img");function V(e){for(;e.firstChild;)e.removeChild(e.firstChild)}G.src=q,G.classList.add("final"),D.appendChild(J),D.appendChild(K),D.appendChild(G);const X=document.querySelectorAll("header button"),Y=document.querySelector("div#content");$(),X.forEach((e=>{e.addEventListener("mouseover",(function(){e.style.backgroundColor="rgb(80, 35, 0)"}))})),X.forEach((e=>{e.addEventListener("mouseout",(function(){e.style.backgroundColor="rgb(95, 41, 0)"}))})),X.forEach((e=>{e.addEventListener("mousedown",(function(){e.style.backgroundColor="rgb(48, 21, 0)"}))})),X.forEach((e=>{e.addEventListener("mouseup",(function(){e.style.backgroundColor="rgb(95, 41, 0)"}))})),X[0].addEventListener("click",(()=>{V(Y),$()})),X[1].addEventListener("click",(()=>{V(Y),H.appendChild(A),H.appendChild(F)})),X[2].addEventListener("click",(()=>{V(Y),O.appendChild(U),O.appendChild(D)}))})()})();