var SandwichMaker = (function(maker) {
  // Private variable to store the different cheese prices
  let selectedPrice = 0

  var cheesePrices = {

    provolone: 1.00,
		american: 1.00,
		swiss: 0.90,
		vegan: 0.60

	};
	
  maker.addCheese = function(selectedTopping) {
    if (selectedTopping === "Provolone") {
      selectedPrice = cheesePrices.provolone;
    } else if (selectedTopping === "American") {
      selectedPrice = cheesePrices.american;
    } else if (selectedTopping === "Swiss") {
      selectedPrice = cheesePrices.swiss;
    } else if (selectedTopping === "Vegan"){
      selectedPrice = cheesePrices.vegan;
    } else if (selectedTopping === "None"){
      selectedPrice = 0
    } else {
      console.log("pick a cheese")
    }
    console.log(`${selectedTopping} = $${selectedPrice.toFixed(2)}`);
    return selectedPrice;
  };

  return maker;

})(SandwichMaker || {});