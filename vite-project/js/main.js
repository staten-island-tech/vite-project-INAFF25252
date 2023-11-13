import '../style.css'
import {food} from "./menu";

console.log(food);

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

food.forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
     <img src = " alt="" class="card-img"><img>
      <div class = "name"> ${item.name} </div>
      <div class = "vegan">Vegan? ${item.vegan}</div>
      <div class="type">${item.meal}</div>
      <div class="price">${item.price}</div>
      </div>`))


setupCounter(document.querySelector('#counter'))


