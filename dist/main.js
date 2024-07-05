(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'* {\n    font-family: inherit;\n}\n\nbody {\n    font-family: "Open Sans", sans-serif;\n    background-repeat: no-repeat;\n    background-size:auto;\n  }\n\n\n.navbar{\n    padding: 1rem 0 1rem 0;\n    display: grid;\n    width: 100vw;\n    height: 10vh;\n    grid-template-columns: 1.5fr 3fr 1.5fr;\n}\n\nnav button {\n    background-color: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 1rem;\n    display: inline-block;\n    position: relative;\n}\n\nnav span{\n  cursor: pointer;\n}\n\nnav button::after {\n  content: \'\';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #ffce00;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n\nnav button:hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.logo{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-right:1.25rem;\n}\n\n#imgLogo{\n    width: 7vw;\n    height: 13vh;\n}\n\n#navlist, .search{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n    gap: 2.5rem;\n}\n\n.hero-container{\n    display: grid;\n    grid-template-columns: 40% 60%;\n    width: 100vw;\n    height: 100vh;\n    text-align: center;\n}\n\n.hero-title{\n    font-size: 3rem;\n    font-weight: 700;\n    padding-top: 7rem;\n    margin-bottom: 0;\n    color: #ffa700;\n    text-shadow: 1px 1px #080808;\n}\n\n.hero-subtitle {\n    font-size: 1.5rem;\n    font-weight: 400;\n    padding: 0;\n    margin: 0;\n}\n\n.hero-caption{\n    font-size: .75rem;\n    font-weight: 50;\n    padding: 0;\n    margin: .5rem 0 3rem 0;\n}\n\n.hero-img-container{\n    display: grid;\n    grid-template-columns: auto auto;\n    align-items: center;\n    justify-content: center;\n}\n\n.heroImg{\n    width: 50vw;\n    height: 110vh;\n    margin-left:4.5rem;\n    filter: drop-shadow(10px 10px 5px #707070);\n}\n\n.fancy-border-radius {\n    position: absolute;\n    z-index: -1;\n    border-radius: 90% 10% 24% 76% / 75% 40% 60% 25%;\n    width: 60vw;\n    height: 110vh;\n    background: #ffce00;\n    background: -webkit-linear-gradient(to right,\n        #ffde1a,\n        #ffce00);\n    background: linear-gradient(to right,\n    #ffde1a,\n    #ffce00);\n  }\n.gravy{\n    position: absolute;\n    top: 100vh;\n    right: 100vh;\n    width: 12vw;\n    height: 20vh;\n    filter: drop-shadow(10px 10px 5px #707070);\n}\n\n  /* btn */\n  .orderBtn {\n    display: inline-block;\n    transition: all 0.2s ease-in;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    color: #090909;\n    padding: 0.7em 1.7em;\n    cursor: pointer;\n    font-size: 18px;\n    border-radius: 0.5em;\n    background: #ffde1a;\n    border: 1px solid #e8e8e8;\n    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\n  }\n  \n  .orderBtn:active {\n    color: #666;\n    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;\n  }\n  \n  .orderBtn:before {\n    content: "";\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%) scaleY(1) scaleX(1.25);\n    top: 100%;\n    width: 140%;\n    height: 180%;\n    background-color: rgba(0, 0, 0, 0.05);\n    border-radius: 50%;\n    display: block;\n    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);\n    z-index: -1;\n  }\n  \n  .orderBtn:after {\n    content: "";\n    position: absolute;\n    left: 55%;\n    transform: translateX(-50%) scaleY(1) scaleX(1.45);\n    top: 180%;\n    width: 160%;\n    height: 190%;\n    background-color: #ffa700;\n    border-radius: 50%;\n    display: block;\n    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);\n    z-index: -1;\n  }\n  \n  .orderBtn:hover {\n    color: #ffffff;\n    border: 1px solid #ffa700;\n  }\n  \n  .orderBtn:hover:before {\n    top: -35%;\n    background-color: #ffa700;\n    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);\n  }\n  \n  .orderBtn:hover:after {\n    top: -45%;\n    background-color: #ffa700;\n    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);\n  }\n  /*btn */\n\n\n/* menu container */\n.menu-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  margin: 3rem 3rem;\n}\n\n.sub-section {\n  display: grid;\n  grid-template-columns: 2.5fr 1fr 2.5fr;\n  margin: 3rem 3rem;\n}\n\n.menu-container{\n  display: grid;\n  grid-auto-flow: rows;\n  align-items: center;\n  justify-content: center;\n}\n\n\n/* card */\n.card {\n  position: relative;\n  width: 11.875em;\n  height: 16.5em;\n  box-shadow: 0px 1px 13px rgba(0,0,0,0.1);\n  cursor: pointer;\n  transition: all 120ms;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffffff;\n  padding: 0.5em;\n  padding-bottom: 3.4em;\n}\n\n.card::after {\n  content: "Add to Cart";\n  padding-top: 1.25em;\n  padding-left: 1.25em;\n  position: absolute;\n  left: 0;\n  bottom: -60px;\n  background: #ffa700;\n  color: #fff;\n  height: 2.5em;\n  width: 90%;\n  transition: all 80ms;\n  font-weight: 600;\n  text-transform: uppercase;\n  opacity: 0;\n}\n\n.card .title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.9em;\n  position: absolute;\n  left: 0.625em;\n  bottom: 1.875em;\n  font-weight: 400;\n  color: #000;\n}\n\n.card .price {\n  font-family: Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif;\n  font-size: 0.9em;\n  position: absolute;\n  left: 0.625em;\n  bottom: 0.625em;\n  color: #000;\n}\n\n.card:hover::after {\n  bottom: 0;\n  opacity: 1;\n}\n\n.card:active {\n  transform: scale(0.98);\n}\n\n.card:active::after {\n  content: "Added !";\n  height: 3.125em;\n}\n\n.text {\n  height: 100%;\n  width: 100%;\n}\n\n.image {\n  background: rgb(241, 241, 241);\n  width: 100%;\n  height: 95%;\n  display: grid;\n  place-items: center;\n}\n\n.menuHeader,.caption{\n  text-align: center;\n  color:#ffa700;\n  text-shadow: .5px .5px black;\n}\n\n/* contactUs Form */\n\n.contactUsContainer{\n  margin: 3rem 0 0 7rem;\n  display: grid;\n  grid-template-columns: 30% 30%;\n  width: 100vw;\n  height: 100vh;\n}\n\n.button {\n  appearance: none;\n  font: inherit;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100%;\n  background-color: #fff;\n  box-shadow: 0 15px 30px 0 rgba(0, 125, 171, 0.15);\n  border-radius: 10px;\n  color: black;\n}\n\n.modal__header {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.modal__body {\n  padding: 1rem 1rem;\n}\n\n.modal__footer {\n  padding: 0 1.5rem 1.5rem;\n}\n\n.modal__title {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.15s ease;\n}\n\n.button--icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: transparent;\n  border-radius: 0.25rem;\n}\n\n.button--icon:focus, .button--icon:hover {\n  background-color: #ededed;\n}\n\n.button--primary {\n  background-color: #ffde1a;\n  color: #FFF;\n  padding: 0.75rem 1.25rem;\n  border-radius: 0.25rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n\n.button--primary:hover {\n  background-color: #ffce00;\n}\n\n.input {\n  display: flex;\n  flex-direction: column;\n}\n\n.input + .input {\n  margin-top: 1.75rem;\n}\n\n.input__label {\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n\n.input__field {\n  display: block;\n  margin-top: 0.5rem;\n  border: 1px solid #DDD;\n  border-radius: 0.25rem;\n  padding: 0.75rem 0.75rem;\n  transition: 0.15s ease;\n}\n\n.input__field:focus {\n  outline: none;\n  border-color: #007dab;\n  box-shadow: 0 0 0 1px #007dab, 0 0 0 4px rgba(0, 125, 171, 0.25);\n}\n\n.input__field--textarea {\n  min-height: 100px;\n  max-width: 100%;\n}\n\n.input__description {\n  font-size: 0.875rem;\n  margin-top: 0.5rem;\n  color: #8d8d8d;\n}',""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;const r=t.p+"609a2247a0fb89303164.png",o=t.p+"e4fc8ccc3a224835c303.png",i=t.p+"7e3a7396ea65a41a5bd4.png";function a(){function n(n,e="",t=""){const r=document.createElement(n);return e&&(r.className=e),t&&(r.textContent=t),r}function e(n,...e){e.forEach((e=>n.appendChild(e)))}const t=document.querySelector(".navbar");if(!document.getElementById("imgLogo")){const e=n("img");e.id="imgLogo";const r=n("div","logo");e.src=i,t.prepend(r),r.appendChild(e)}const a=document.getElementById("content");a.innerHTML="";const c=n("section","hero-section");a.appendChild(c);const d=n("div","hero-container");c.appendChild(d);const s=n("div","hero-text"),l=n("div","hero-img-container");e(d,s,l);const p=n("h1","hero-title",""),u=n("h2","hero-subtitle","The Only Sizzling Food in Town!"),f=n("p","hero-caption","Discover the ultimate dining experience at Tres Hot Plates!"),m=n("button","orderBtn","Order Now"),g=n("span","material-icons","restaurant_menu");m.prepend(g),e(s,p,u,f,m);const h=n("div","fancy-border-radius"),b=n("img","heroImg");b.src=r;const v=n("img","gravy");v.src=o,e(l,h,b,v)}const c=t.p+"6cb149f127f8e00f04e8.png",d=t.p+"5b1b87d9d4d8446d8fe0.png",s=t.p+"762d590c097733d8bc35.png",l=t.p+"a8866f8da62a3a138771.png",p=t.p+"31a1a6500139a0180569.png",u=t.p+"c931e7651b94a1af53d9.png",f=t.p+"fafff3f7deb6dc691bef.png",m=t.p+"92b1d41b6fd6060d2b1d.png";var g=t(72),h=t.n(g),b=t(825),v=t.n(b),y=t(659),x=t.n(y),w=t(56),_=t.n(w),k=t(540),z=t.n(k),C=t(113),S=t.n(C),E=t(365),T={};function A(){const n=ScrollReveal({origin:"top",distance:"60px",duration:2500,delay:200});n.reveal(".navbar"),n.reveal(".hero-text",{delay:700,distance:"100px",origin:"bottom"}),n.reveal(".hero-img-container",{delay:900,distance:"100px",origin:"right"}),n.reveal(".menu-section"),n.reveal(".sub-section"),n.reveal(".menuHeader",{delay:100}),n.reveal(".caption"),n.reveal(".card",{interval:200}),n.reveal(".orderBtn",{interval:200,delay:1e3}),n.reveal(".contact-Us",{distance:"100px",origin:"left"}),n.reveal(".contactUsHero-container",{distance:"100px",origin:"right"})}T.styleTagTransform=S(),T.setAttributes=_(),T.insert=x().bind(null,"head"),T.domAPI=v(),T.insertStyleElement=z(),h()(E.A,T),E.A&&E.A.locals&&E.A.locals,document.addEventListener("DOMContentLoaded",(()=>{a(),A(),function(){const n=document.querySelector(".material-symbols-outlined"),e=document.querySelector("#navlist");n.addEventListener("click",(()=>{"light_mode"==n.innerText?(n.innerText="dark_mode",document.body.style.backgroundColor="white",document.body.style.color="#121212",e.querySelectorAll("*").forEach((n=>{n.style.color="#121212"}))):(n.innerText="light_mode",document.body.style.backgroundColor="#121212",document.body.style.color="white",e.querySelectorAll("*").forEach((n=>{n.style.color="white"})))}));const t=["Tres Hot Plates","Taste the Sizzle","Crave. Sizzle. Enjoy","Heat Meets Flavor"];let r,o=0,i=0;r=setInterval((function n(){const e=document.querySelector(".hero-title");e&&(i<t[o].length?(e.textContent+=t[o].charAt(i),i++):(clearInterval(r),setTimeout((()=>{i=0,o=(o+1)%t.length,e.textContent="",r=setInterval(n,100)}),1e3)))}),100)}();const n=document.getElementById("home-button"),e=document.getElementById("contact-button"),t=document.getElementById("menu-button");n.addEventListener("click",(()=>{a(),A()})),e.addEventListener("click",(()=>{!function(){function n(n,e="",t=""){const r=document.createElement(n);return e&&(r.className=e),t&&(r.textContent=t),r}function e(n,...e){e.forEach((e=>n.appendChild(e)))}const t=document.getElementById("content");t.innerHTML="";const r=n("section","hero-section");t.appendChild(r);const o=n("div","contactUsContainer");r.appendChild(o);const i=n("div","contact-Us"),a=n("div","contactUsHero-container");e(o,i,a);const d=n("img","heroImg");d.src=c,e(a,d);const s=n("div","modal"),l=n("div","modal__header"),p=n("span","modal__title","Send us a Message"),u=n("button","button button--icon"),f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width","24"),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),e(u,f);const m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("fill","none"),m.setAttribute("d","M0 0h24v24H0V0z");const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"),e(f,m,g),e(l,p,u),e(s,l);const h=n("div","modal__body"),b=n("div","input"),v=n("label","input__label","Full Name"),y=n("input","input__field");y.type="text",e(b,v,y,n("p","input__description","Enter your Full Name")),e(h,b);const x=n("div","input");e(x,n("label","input__label","Message"),n("textarea","input__field input__field--textarea"),n("p","input__description","Help us improve our services by sending a message")),e(h,x),e(s,h);const w=n("div","modal__footer");e(w,n("button","button button--primary","Send")),e(s,w),e(t,s),e(i,s)}(),A()})),t.addEventListener("click",(()=>{!function(){function n(n,e="",t=""){const r=document.createElement(n);return e&&(r.className=e),t&&(r.textContent=t),r}function e(n,...e){e.forEach((e=>n.appendChild(e)))}const t=document.getElementById("content");t.innerHTML="";const r=n("section","menu-section");t.appendChild(r);const o=n("div","menu-container"),i=n("div","menu-container"),a=n("div","menu-container"),c=n("div","menu-container");e(r,o,i,a,c);const g=n("h1","menuHeader","Try Our Popular Dishes"),h=n("p","caption","Discover our exclusive dishes and deals!");t.prepend(g,h);const b=n("div","card"),v=n("div","image"),y=n("img","text");y.src=d,e(v,y);const x=n("span","title","Sizzling Garlic Pepper Beef"),w=n("span","price","P99.00");o.appendChild(b),e(b,v,x,w);const _=n("div","card"),k=n("div","image"),z=n("img","text");z.src=s,e(k,z);const C=n("span","title","Sizzling Pork Chop"),S=n("span","price","P99.00");i.appendChild(_),e(_,k,C,S);const E=n("div","card"),T=n("div","image"),A=n("img","text");A.src=l,e(T,A);const B=n("span","title","Sizzling Burger Steak"),I=n("span","price","P99.00");a.appendChild(E),e(E,T,B,I);const P=n("div","card"),H=n("div","image"),M=n("img","text");M.src=p,e(H,M);const L=n("span","title","Sizzling Sausage"),N=n("span","price","P99.00");c.appendChild(P),e(P,H,L,N);const j=n("section","sub-section");t.appendChild(j);const F=n("div","menu-container"),X=n("div","menu-container"),O=n("div","menu-container");e(j,F,X,O);const U=n("div","card"),D=n("div","image"),q=n("img","text");q.src=u,e(D,q);const Y=n("span","title","Sizzling Sisig"),R=n("span","price","P99.00");F.appendChild(U),e(U,D,Y,R);const $=n("div","card"),G=n("div","image"),J=n("img","text");J.src=f,e(G,J);const V=n("span","title","Sizzling Pork and Garlic Pepper Beef"),K=n("span","price","P99.00");X.appendChild($),e($,G,V,K);const Q=n("div","card"),W=n("div","image"),Z=n("img","text");Z.src=m,e(W,Z);const nn=n("span","title","Sizzling Burger Steak and Sausage"),en=n("span","price","P99.00");O.appendChild(Q),e(Q,W,nn,en)}(),A()}))}))})();