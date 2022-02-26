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
  switch (this.size.join()) {
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
  // toppingPrice = pizzaOrder.topping.length;
  const turnUserToppingInputIntoOneArray = this.topping.flat();
  // toppingPrice = this.topping.length;
  toppingPrice = turnUserToppingInputIntoOneArray.length;

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

    let pizzaOrder = new Pizza();

    // const requestedPizzaToppingsTransformedIntoArray = requestedPizzaToppings.split(',');

    pizzaOrder.addToppings(requestedPizzaToppings.split(','));
    pizzaOrder.addSize(requestedPizzaSize);

    let totalPizzaOrderPrice = pizzaOrder.price();

    console.log(requestedPizzaSize, requestedPizzaToppings);
    console.log(pizzaOrder);
    console.log(totalPizzaOrderPrice);

    $(".final-pizza-cost").text(totalPizzaOrderPrice);
  });
});