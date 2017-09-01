// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  let selectedPrice = 0

  // Private variable to store the different meat prices
  var breadPrices = {
  
    wheat: 0.90,
		sourdough: 0.98,
		rye: 0.60,
    white: 0.70
		
	};

  // Augment the original object with another method
  maker.addBread = function(selectedTopping) {
    if (selectedTopping === "Wheat") {
      selectedPrice = breadPrices.wheat;
    } else if (selectedTopping === "Sourdough") {
      selectedPrice = breadPrices.sourdough;
    } else if (selectedTopping === "Rye"){
      selectedPrice = breadPrices.rye;
    } else if (selectedTopping === "White"){
      selectedPrice = breadPrices.white;
    } else {
      console.log("choose bread");
    }
    console.log(`${selectedTopping} = $${selectedPrice.toFixed(2)}`);
    return selectedPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker || {});