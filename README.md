# _Pizza Parlor_

#### By _**Justice Douglas**_

#### _A pizza restaurant website where a user can choose one or more individual toppings and a size to order a pizza and see the final cost._

## Technologies Used

* _Bootstrap_
* _CSS_
* _HTML_
* _JavaScript_
* _jQuery_

## Description

_A pizza restaurant website where a user can choose one or more individual toppings and a size to order a pizza and see the final cost. Users can select pizza sizes from small through large and can choose any and all pizza toppings of their dreams. Do keep in mind, while ordering toppings you must write it out as follows as an example: pepperoni, pineapple, cactus pear, peanut butter_

## Setup/Installation Requirements

* _Clone project from Github repository to local machine_
* _Navigate to your file manager and click on the HTML file to open in your browser._
* _You should now be able to order your pizza_

## Known Bugs

* _Failing to list toppings utilizing commas will output the cost of one through infinity toppings as only $1.00_

## Tests:

### Describe: Pizza()

- Test 1: "It should return a pizza object with two properties for toppings and size"
- Code: const pizzaOrder = new Pizza(["anchovies", "pepperoni"], "medium");
- Expected Output: Pizza { topping: ["anchovies", "pepperoni"], size: "medium"}

---

### Describe: price()

- Test 2: "It should return the orderTotal according to the pizza1 object size value"
- Code: pizza1.price("small");
- Expected Output: 5

---

- Test 3: "It should return the orderTotal according to the pizza1 object size and topping value"
- Code: pizza1.price("anchovie", "small");
- Expected Output: 6

---

### Describe: addToppings()

- Test 4: "It should push a requested topping into the pizza1 topping array"
- Code: pizza1.addTopping("anchovie");
- Expected Output: pizza1.topping = ['anchovie']

---

### Describe: price()

- Test 5: "It should return the length of the topping array and add it to toppingPrice"
- Code: pizzaOrder.addTopping("anchovie");
- Expected Output: toppingPrice = 1

---

### Describe: addSize()

- Test 6: "It should push the selected pizza size into the size array"
- Code: pizzaOrder.addSize("small");
- Expected Output: pizzaOrder.size = ['small]

---

### Describe: price()

- Test 7: "It should return the length of the topping array and add it to toppingPrice when there is more than one topping requested"
- Code: pizzaOrder.addTopping("pepperonie, olives");
- Expected Output: toppingPrice = 2

---

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) _02/25/2022_ _Justice Douglas_