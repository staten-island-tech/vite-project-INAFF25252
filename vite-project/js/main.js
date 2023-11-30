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
  h1:document.querySelectorAll(".null"),
  h2: document.querySelectorAll(".name"),
  h3:document.querySelectorAll(".type"),
  h4:document.querySelectorAll(".veganornot"),
  h5:document.querySelectorAll(".price"),
  img: document.querySelectorAll(".card-img"),
  gallery: document.querySelector(".flex-container"),
  button:document.getElementById("#btn"),
  text:document.querySelector("#text"),
  empty:document.querySelector(".nothing"),
  pic:document.querySelector(".img"),
  theme:document.querySelector(".theme")
  /* point:document.querySelectorAll(".point"), //gets all instances of this
  pointTwo:document.getElementById("pointTwo"), */
};
console.log(DOMSelectors)

//console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
//console.log(DOMSelectors.button) //can get specific element
function clear() {  
  DOMSelectors.gallery.innerHTML=''
}

const filter = { 
  SoupS: food.filter((ss)=>ss.meal === "soup" || ss.meal === "salad"),
  App: food.filter((app)=>app.meal === "appetizer"),
  vegan: food.filter((vegan)=> {return vegan.vegan === true}),
  Entrees: food.filter((ent)=>ent.meal === "entree"),
  sushi: food.filter((sushi)=>sushi.meal === "sushi"),
  desserts: food.filter((des)=>des.meal === "dessert"),
  drinks: food.filter((drink)=>drink.meal === "drink"),
}

function theme(){
  DOMSelectors.theme.addEventListener("click", function(event){
  event.preventDefault
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool")
    document.body.classList.toggle("main");
    DOMSelectors.card.classList.add("second");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm")
    document.body.classList.toggle("main");
    DOMSelectors.card.classList.add("second");
  }
})

}
theme();


function von(x){
  if(x === true){
    return "vegan"
  }else{
    return "not vegan"
  }
  }
  von(filter.vegan.vegan)

function all(btn,filter){
btn.addEventListener("click", function(event){
  event.preventDefault();
  clear()

  function main(){
    let string = von()
    filter.forEach((item)=>  
    DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `
     <div class="card">
     <img src = "${item.img}" alt="" class="card-img"><img>
     <div class = "name"> ${item.name} </div>
     <div class = "veganornot">${string}</div>
     <div class="type">${item.meal}</div>
     <div class="price">${item.price}</div>
     </div>`))
    }
  main();
})
}


all(DOMSelectors.form,food)
all(DOMSelectors.form1,filter.SoupS)
all(DOMSelectors.form2,filter.App)
all(DOMSelectors.form3,filter.vegan)
all(DOMSelectors.form4,filter.Entrees)
all(DOMSelectors.form5,filter.sushi)
all(DOMSelectors.form6,filter.desserts)
all(DOMSelectors.form7,filter.drinks)