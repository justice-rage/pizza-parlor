# _Pizza Parlor_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_

## Tests:

---

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