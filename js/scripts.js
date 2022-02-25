'use strict';

// Business Logic

// Constructor Function: Pizza
function Pizza(topping, size) {
  this.topping = [];
  // this.size = size;
  this.size = [];
}

// Function: Pushes customer requested toppings into topping array
Pizza.prototype.addToppings = function(toppings) {
  this.topping.push(toppings);
}

// Function: Pushes customer requested size into size array
Pizza.prototype.addSize = function(pizzaSize) {
  this.size.push(pizzaSize);
}

// Variable: Customer pizza order
// const testPizzaOrder = new Pizza();

// Function: Order Pricing
Pizza.prototype.price = function() {

  // Initially Empty Variables
  let sizePrice;
  let toppingPrice;

  // Pricing: Pizza Size
  switch (this.size) {
    case 'small':
      sizePrice = 5;
      break;
    case 'medium':
      sizePrice = 10;
      break;
    case 'large':
      sizePrice = 15;
      break;
  };

  // Pricing: Pizza Toppings - Each topping costs $1
  toppingPrice = pizzaOrder.topping.length;

  // Pricing: Add size and topping selection for order total
  const orderTotal = sizePrice + toppingPrice;
  return orderTotal;
}

////////////////////////////////////////////////////

// User Interface 
$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    // const pizzaOrder = new Pizza();

    const requestedPizzaSize = $("#requested-size").val();
    const requestedPizzaToppings = $("input#requested-toppings").val();

    // const addPizzaToppingsToOrder = pizzaOrder.addToppings(requestedPizzaToppings);
    // const addPizzaSizeToOrder = pizzaOrder.price(requestedPizzaSize);

    // const totalPizzaOrderPrice = roboTranslator(userInput);

    let pizzaOrder = new Pizza();
    pizzaOrder.addToppings(requestedPizzaToppings);
    pizzaOrder.addSize(requestedPizzaSize);

    console.log(requestedPizzaSize, requestedPizzaToppings);
    console.log(pizzaOrder);
    // console.log(pizzaOrder);

    // $(".result").text(cleanedUserInput);
  });
});

// programming language selector example
// $(document).ready(function(event) {

//   $("form#quiz").submit(function(event) {
//     const identifyWith = $("#identify-with").val();
//     const favoriteColor = $("#favorite-color").val();
//     const preferredOrganization = $("#preferred-organization").val();

//     // unhides ruby language result
//     if (identifyWith === "precious-gems" && favoriteColor === "red") {
//       $('#ruby').show();
//       $("#python").hide();
//       $("#javascript").hide();
//     } 
//     // unhides python language result
//     else if (identifyWith === "snakes" && favoriteColor === "green") {
//       $('#python').show();
//       $("#ruby").hide();
//       $("#javascript").hide();
//     } 
//     // unhides javascript language result
//     else if (identifyWith === "aesthetics" && favoriteColor === "yellow") {
//       $('#javascript').show();
//       $("#python").hide();
//       $("#ruby").hide();
//     } else {
//       $('#javascript').show();
//       $("#python").hide();
//       $("#ruby").hide();
//     }
//     event.preventDefault();
//   });
// });

// mr-robogers-neighborhood example
// $(document).ready(function() {
//   $("form#input-form").submit(function(event) {
//     event.preventDefault();
//     const userInput = parseInt($("input#user-input").val());
//     const translatedInput = roboTranslator(userInput);
//     const userInputStringForm = translatedInput.toString();
//     const cleanedUserInput = userInputStringForm.replace(/,/g,' ');

//     $(".result").text(cleanedUserInput);
//   });
// });