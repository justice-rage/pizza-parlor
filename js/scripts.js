'use strict';

// Constructor Function: Pizza
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

const pizza1 = new Pizza('anchovie', 'small');
const pizza2 = new Pizza('pepperoni', 'medium');
const pizza3 = new Pizza('cheese', 'large');

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
  // switch (this.topping) {
  //   case 1:
  //     toppingPrice = 1;
  //     break;
  //   case 2:
  //     toppingPrice = 2;
  //     break;
  //   case 3:
  //     toppingPrice = 3;
  //     break;
  //   case 4:
  //     toppingPrice = 4;
  //     break;
  // };

  // Pricing: Add size and topping selection for order total
  // const orderTotal = sizePrice + toppingPrice;
  const orderTotal = sizePrice
  return orderTotal;
}