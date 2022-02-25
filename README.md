Tests:

Describe: Pizza()

Test 1: "It should return a pizza object with two properties for toppings and size"
Code: const pizzaOrder = new Pizza(["anchovies", "pepperoni"], "medium");
Expected Output: Pizza { topping: ["anchovies", "pepperoni"], size: "medium"}

------------------

Describe: price()

Test 2: "It should return the orderTotal from the two parameters of pizzaSize and pizzaTopping"
Code: price("small", 1);
Expected Output: 6