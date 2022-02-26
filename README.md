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