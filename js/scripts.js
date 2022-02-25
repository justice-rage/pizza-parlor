'use strict';

// Constructor Function: Pizza
function Pizza(topping, size) {
  this.topping = [];
  this.size = size;
}

// Function: Pushes customer requested toppings into topping array
Pizza.prototype.addToppings = function(toppings) {
  this.topping.push(toppings);
}

const pizza1 = new Pizza('small');
const pizza2 = new Pizza('medium');
const pizza3 = new Pizza('large');

// Function: Order Pricing
Pizza.prototype.price = function() {

  // Initially Empty Variables
  let sizePrice;
  let toppingPrice;

  // Pricing: Pizza Size
  switch (this.size) {
    case "small":
      sizePrice = 5;
      break;
    case "medium":
      sizePrice = 10;
      break;
    case "large":
      sizePrice = 15;
      break;
  };

  // Pricing: Pizza Toppings
  this.addToppings.forEach(function() {
    toppingPrice += 1;
  })

  // switch (this.topping) {
  //   case "anchovie":
  //     toppingPrice = 1;
  //     break;
  //   case "pepperoni":
  //     toppingPrice = 2;
  //     break;
  //   case "artichoke":
  //     toppingPrice = 3;
  //     break;
  //   case "cheese":
  //     toppingPrice = 4;
  //     break;
  // };

  // Pricing: Add size and topping selection for order total
  // const orderTotal = sizePrice + toppingPrice;
  const orderTotal = sizePrice + toppingPrice;
  return orderTotal;
}