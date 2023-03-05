//                                      map()
// ========================================================================================

const numbers = [1, 4, 5, 9, 14, 23];

// Dobrar valores
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

// Fahrenheit para Celcius
const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celcius = fahrenheit.map((elem) => Math.round((elem - 32) * 5/9));

console.log(celcius);