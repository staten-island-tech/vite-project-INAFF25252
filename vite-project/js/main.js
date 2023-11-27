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
  form: document.querySelector(".Main"),
  h:document.querySelectorAll(".price"),
  h2: document.querySelectorAll(".name"),
  h3:document.querySelectorAll(".type"),
  h4:document.querySelectorAll(".veganornot"),
  img: document.querySelectorAll(".card-img"),
  gallery: document.querySelector(".flex-container"),
  button:document.getElementById("#btn"),
  text:document.querySelector("#text"),
  empty:document.querySelector(".nothing"),
  pic:document.querySelector(".img"),
  /* point:document.querySelectorAll(".point"), //gets all instances of this
  pointTwo:document.getElementById("pointTwo"), */
};
console.log(DOMSelectors)

//console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
//console.log(DOMSelectors.button) //can get specific element
function clear() {  
  DOMSelectors.gallery.innerHTML=''
}

function all(){
DOMSelectors.form.addEventListener("click", function(event){
  event.preventDefault();
  clear()
  function main(arr){
    arr.forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
     <div class="card">
     <img src = "${item.img}" alt="" class="card-img"><img>
     <div class = "name"> ${item.name} </div>
     <div class = "veganornot">Vegan? ${item.vegan}</div>
     <div class="type">${item.meal}</div>
     <div class="price">${item.price}</div>
     </div>`))}
  main()
})

DOMSelectors.form1.addEventListener("click", function(event){
  event.preventDefault();
  clear()
  function SS(arr){arr.filter((items)=>items.meal === "soup" || items.meal === "salad").forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
    <img src = "${item.img}" alt="" class="card-img"><img>
    <div class = "name"> ${item.name} </div>
    <div class = "veganornot">Vegan? ${item.vegan}</div>
    <div class="type">${item.meal}</div>
    <div class="price">${item.price}</div>
    </div>`))}
  SS()
})

DOMSelectors.form2.addEventListener("click", function(event){
  event.preventDefault();
  clear()
  function app(arr){arr.filter((items)=>items.meal === "appetizer").forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
    <img src = "${item.img}" alt="" class="card-img"><img>
    <div class = "name"> ${item.name} </div>
    <div class = "veganornot">Vegan? ${item.vegan}</div>
    <div class="type">${item.meal}</div>
    <div class="price">${item.price}</div>
    </div>`))}
  app()
})

DOMSelectors.form3.addEventListener("click", function(event){
  event.preventDefault();
  clear()
  function vegan(arr){arr.filter((items)=> {return items.vegan === true}).forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
    <img src = "${item.img}" alt="" class="card-img"><img>
    <div class = "name"> ${item.name} </div>
    <div class = "veganornot">Vegan? ${item.vegan}</div>
    <div class="type">${item.meal}</div>
    <div class="price">${item.price}</div>
    </div>`))}
  vegan()
})

DOMSelectors.form4.addEventListener("click", function(event){
  event.preventDefault();
  clear()
  function entree(arr){arr.filter((items)=>items.meal === "entree").forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
    <img src = "${item.img}" alt="" class="card-img"><img>
    <div class = "name"> ${item.name} </div>
    <div class = "veganornot">Vegan? ${item.vegan}</div>
    <div class="type">${item.meal}</div>
    <div class="price">${item.price}</div>
    </div>`))}
  entree()
})

DOMSelectors.form5.addEventListener("click", function(event){
  event.preventDefault();
  clear()
  function sushi(arr){arr.filter((items)=>items.meal === "sushi").forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
    <img src = "${item.img}" alt="" class="card-img"><img>
    <div class = "name"> ${item.name} </div>
    <div class = "veganornot">Vegan? ${item.vegan}</div>
    <div class="type">${item.meal}</div>
    <div class="price">${item.price}</div>
    </div>`))}
  sushi()
})

DOMSelectors.form6.addEventListener("click", function(event){
  event.preventDefault();
  clear()
  function dessert(arr){arr.filter((items)=>items.meal === "dessert").forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
    <img src = "${item.img}" alt="" class="card-img"><img>
    <div class = "name"> ${item.name} </div>
    <div class = "veganornot">Vegan? ${item.vegan}</div>
    <div class="type">${item.meal}</div>
    <div class="price">${item.price}</div>
    </div>`))}
  dessert()
})

DOMSelectors.form7.addEventListener("click", function(event){
  event.preventDefault();
  clear()
  function drinks(arr){arr.filter((items)=>items.meal === "drink").forEach((item)=>  DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
    <div class="card">
    <img src = "${item.img}" alt="" class="card-img"><img>
    <div class = "name"> ${item.name} </div>
    <div class = "veganornot">Vegan? ${item.vegan}</div>
    <div class="type">${item.meal}</div>
    <div class="price">${item.price}</div>
    </div>`))}
  drinks()
})
}
all()
/*function button(){ 
  const normal= food.forEach((arr)=> arr)
  const SS= 
  const App=
  const vegan=
  const Entrees=
  const sushi= arr.filter((items)=>items.meal === "sushi")
  cons desserts=food.filter((items)=>items.meal === "dessert")
  const drinks= food.filter((items)=>items.meal === "drink")
}*/