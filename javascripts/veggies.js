// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  let selectedPrice = 0

  // Private variable to store the different meat prices
  var veggiePrices = {
    
		lettuce: 1.00,
		tomato: 0.90,
		onion: 0.80,
		pickle: 0.70,
		olive: 0.60

	};

  // Augment the original object with another method
  maker.addVeggie = function(selectedTopping) {
    if (selectedTopping === "Lettuce") {
      selectedPrice = veggiePrices.lettuce;
    } else if (selectedTopping === "Tomato") {
      selectedPrice = veggiePrices.tomato;
    } else if (selectedTopping === "Onion") {
      selectedPrice = veggiePrices.onion;
    } else if (selectedTopping === "Pickle"){
      selectedPrice = veggiePrices.pickle;
    } else if (selectedTopping === "Olive"){
      selectedPrice = veggiePrices.olive;
    } else {
      console.log("choose a veggie");
    }
    console.log(`${selectedTopping} = $${selectedPrice.toFixed(2)}`);
    return selectedPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});