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

const pizzaOrder = new Pizza('', 'large');

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

  // Pricing: Pizza Toppings - Each topping costs $1
  toppingPrice = pizzaOrder.topping.length;

  // Pricing: Add size and topping selection for order total
  const orderTotal = sizePrice + toppingPrice;
  return orderTotal;
}