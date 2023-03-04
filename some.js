//                                      some()
// ========================================================================================

// Verificar se há algum número primo

function isPrime(value) {
  for (let i = 2; i < value; i ++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value > 1;
}

const numbers = [6, 8, 11, 12, 14, 42];

console.log(numbers.some(isPrime));

// Verificar por condições em valores/objetos

const team = [
  { id: 12, name: "Topper Harley", pilot: true },
  { id: 44, name: "Ranada Thompson", pilot: true },
  { id: 23, name: "Pete Thompson", pilot: false },
  { id: 12, name: "Kowalski", pilot: false },
];

console.log(team.some(person => person.pilot));