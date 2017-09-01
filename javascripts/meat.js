// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  let selectedPrice = 0
  // Private variable to store the different meat prices
  var meatPrices = {
   
    chicken: 1.00,
    turkey: 0.90,
    ham: 0.80,
    bacon: 0.70,
    beef: 0.85
    
  };

  // Augment the original object with another method
  maker.addMeat = function(selectedTopping) {
    if (selectedTopping === "Chicken") {
      selectedPrice = meatPrices.chicken;
    } else if (selectedTopping === "Turkey") {
      selectedPrice = meatPrices.turkey;
    } else if (selectedTopping === "Ham") {
      selectedPrice = meatPrices.ham;
    } else if (selectedTopping === "Bacon"){
      selectedPrice = meatPrices.bacon;
    } else if (selectedTopping === "Beef"){
      selectedPrice = meatPrices.beef;
    } else {
      console.log("choose a meat");
    }
    console.log(`${selectedTopping} = $${selectedPrice.toFixed(2)}`);
    return selectedPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker || {});