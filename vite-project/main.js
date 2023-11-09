import './style.css'
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js' */
const food = [
  { name: "Teriyaki", price: 12.99, meal: "meal", vegan: false},
  { name: "Avocado Salad", price: 8.99, meal: "salad", vegan: true}, 
  { name: "Ginger Salad", price: 8.99, meal: "salad", vegan: true},
  { name: "Beef nagimaki", price: 10.99, meal: "appetizer", vegan: false },
  { name: "Spicy Tuna Roll", price: 15.99, meal: "sushi", vegan: false},
  { name: "Tuna Roll", price: 15.99, meal: "sushi", vegan: false},
  { name: "AAC Roll", price: 15.99, meal: "sushi", vegan: true}, 
  { name: "California Roll", price: 15.99, meal: "sushi", vegan: false},   
  { name: "Shrimp Tempura Roll", price: 15.99, meal: "sushi", vegan: false}, 
  { name: "Miso Soup", price: 6.99, meal: "soup", vegan: true}, 
  { name: "Clear Soup", price: 6.99, meal: "soup", vegan: true},
  { name: "Tom Yum Soup", price: 6.99, meal: "soup", vegan: false},
  { name: "Coconut Soup", price: 6.99, meal: "soup", vegan: false},
  { name: "Fried Rice", price: 4.99, meal: "meal", vegan: false}, 
  { name: "Poke Bowl", price: 9.99, meal: "meal", vegan: false},
  {name: "Bubble Tea", price: 7.99, meal: "drink", vegan: false}, 
  {name: "Mango Iced Tea", price: 7.99, meal: "drink", vegan: true},
  {name: "Japanese Soda", price: 7.99, meal: "drink", vegan: true},
  {name: "Thai Iced Tea", price: 7.99, meal: "drink", vegan: false},   
  { name: "Crepe Cake", price: 5.99, meal: "dessert", vegan: false}, 
  { name: "Ice Cream", price: 3.99, meal: "dessert", vegan: false},
  { name: "Orea Donut", price: 3.99, meal: "dessert", vegan: false},  
  { name: "Pork Dumplings", price: 0.99, meal: "appetizer", vegan: false},
  { name: "Veggie Dumplings", price: 0.99, meal: "appetizer", vegan: true},
  { name: "Edamame", price: 0.99, meal: "appetizer", vegan: true}, 

]
document.querySelector('#app').innerHTML = `
    <h1>Cucumber Sushi</h1>
    <div class="card">
      <img src = "" alt="pic" class="card-img"></img>
      <div class = "first"></div>
      <div class = "last"></div>
      <div class="age"></div>
      </div>`

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

