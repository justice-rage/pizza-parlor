'use strict';

// Business Logic

function Pizza(topping, size) {
  this.topping = [];
  this.size = [];
}

Pizza.prototype.addToppings = function(toppings) {
  this.topping.push(toppings);
}

Pizza.prototype.addSize = function(pizzaSize) {
  this.size.push(pizzaSize);
}

Pizza.prototype.price = function() {

  let sizePrice = 0;
  let toppingPrice = 0;

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

  const turnUserToppingInputIntoOneArray = this.topping.flat();
  toppingPrice = turnUserToppingInputIntoOneArray.length;

  const orderTotal = sizePrice + toppingPrice;
  return orderTotal;
}

// User Interface

$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();

    let pizzaOrder = new Pizza();

    const requestedPizzaSize = $("#requested-size").val();
    const requestedPizzaToppings = $("input#requested-toppings").val();

    pizzaOrder.addToppings(requestedPizzaToppings.split(','));
    pizzaOrder.addSize(requestedPizzaSize);

    let totalPizzaOrderPrice = pizzaOrder.price();
    $(".final-pizza-cost").text(`$${totalPizzaOrderPrice}.00`);
  });
});