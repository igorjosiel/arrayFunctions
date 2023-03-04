//                                      every()
// ========================================================================================

// Verifica se todos os elementos de um array são maiores que 10
const numbers = [12, 5, 8, 130, 44];

console.log(numbers.every(number => number > 10));

// Verifica se todos têm mais de 18 anos
const students = [
  { id: 12, name: 'Igor', age: 25 },
  { id: 23, name: 'Teste', age: 32 },
  { id: 45, name: 'Fulano', age: 15 },
  { id: 26, name: 'Lupita', age: 22 },
];

console.log(students.every(student => student.age >= 18));