// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  let selectedPrice = 0

  // Private variable to store the different meat prices
  var condimentPrices= {

    mayo: 1.00,
		mustard: 1.20,
    oil: 0.70,
		vinegar: 0.70,
		salsa: 0.60
    
	};

  // Augment the original object with another method
  maker.addCondiment = function(selectedTopping) {
    if (selectedTopping === "Mayo") {
      selectedPrice = condimentPrices.mayo;
    } else if (selectedTopping === "Mustard") {
      selectedPrice = condimentPrices.mustard;
    } else if (selectedTopping === "Oil"){
      selectedPrice = condimentPrices.oil;
    } else if (selectedTopping === "Vinegar"){
      selectedPrice = condimentPrices.vinegar;
    } else if (selectedTopping === "Salsa"){
      selectedPrice = condimentPrices.salsa;
    } else {
      console.log("choose a condiment");
    }
    console.log(`${selectedTopping} = $${selectedPrice.toFixed(2)}`);
    return selectedPrice;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);