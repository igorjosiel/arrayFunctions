//                                      find()
// ========================================================================================

// Pizzas
const pizzas = [
  "mussarela",
  "calabresa",
  "portuguesa",
  "marguerita",
];

const foundPizza = pizzas.find(pizza => pizza.startsWith('m'));

console.log(foundPizza);

// Frutas
const fruits = [
  { name: "jaca", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "cereja", quantity: 5 },
];

const foundFruit = fruits.find(fruit => fruit.name === "cereja");

console.log(foundFruit);