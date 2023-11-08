import './style.css'
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js' */

document.querySelector('#app').innerHTML = `
    <h1>Hello Vite!</h1>
    <div class="card">
      <button class="filter" type="button"></button>

    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


const DOMSelectors = {
  card: document.querySelector(".card"),
  form: document.querySelector("#form"),
  h2: document.querySelectorAll(".first"),
  h2last:document.querySelectorAll(".last"),
  h3:document.querySelectorAll(".age"),
  img: document.querySelectorAll(".card-img"),
  gallery: document.querySelector(".flex-container"),
  button:document.getElementById("#btn"),
  text:document.querySelector("#text"),
  empty:document.querySelector(".nothing"),
  pic:document.querySelector(".img"),
  /* point:document.querySelectorAll(".point"), //gets all instances of this
  pointTwo:document.getElementById("pointTwo"), */
};
//console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
//console.log(DOMSelectors.button) //can get specific element
console.log(DOMSelectors);
