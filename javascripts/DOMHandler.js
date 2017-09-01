// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping = [];

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiments-chooser");
var veggieChooser = document.getElementById("veggies-chooser");
var totalButton = document.getElementById("total-button");
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

function setTotal(chosen){
  finalSandwichPrice += SandwichMaker.addTopping(chosen);
}

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  setTotal(SandwichMaker.addMeat(selectedTopping));
});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  setTotal(SandwichMaker.addCheese(selectedTopping));
});

breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  setTotal(SandwichMaker.addBread(selectedTopping));
});

veggieChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  setTotal(SandwichMaker.addVeggie(selectedTopping));
});

condimentChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  setTotal(SandwichMaker.addCondiment(selectedTopping));
});

totalButton.addEventListener("click", function(event) {
  finalSandwichPrice = SandwichMaker.getTotalPrice();
  document.getElementById("price-output").innerHTML = `<h3>sandwich price: $${finalSandwichPrice.toFixed(2)}</h3>`;
})