import '../style.css'
import {food} from "./menu";

console.log(food);

const DOMSelectors = {
  card: document.querySelector(".card"),
  form1: document.querySelector(".SS"),
  form2: document.querySelector(".App"),
  form3: document.querySelector(".Vegan"),
  form4: document.querySelector(".Entree"),
  form5: document.querySelector(".Sushi"),
  form6: document.querySelector(".Dessert"),
  form7: document.querySelector(".Drink"),
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

food.forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
     <img src = " alt="" class="card-img"><img>
      <div class = "name"> ${item.name} </div>
      <div class = "vegan">Vegan? ${item.vegan}</div>
      <div class="type">${item.meal}</div>
      <div class="price">${item.price}</div>
      </div>`))
console.log(DOMSelectors);
DOMSelectors.form3.addEventListener("submit", function(event){
  event.preventDefault();

  const vegan = food.filter((items)=> {return items.vegan ===true})
  .forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
  <div class="card">
   <img src = " alt="" class="card-img"><img>
    <div class = "name"> ${item.name} </div>
    <div class = "vegan">Vegan? ${item.vegan}</div>
    <div class="type">${item.meal}</div>
    <div class="price">${item.price}</div>
    </div>`))
})

function clearFields(){
  DOMSelectors.input1.value = ""
  DOMSelectors.input2.value = ""
  DOMSelectors.input3.value = ""
  DOMSelectors.pic.value = ""
  }