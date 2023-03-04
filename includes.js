//                                      includes()
// ========================================================================================

// Números

console.log([2, 3, 8].includes(3));

// Pessoas

const people = [
  { id: 10, name: 'Lara', age: 23, group: 'user' },
  { id: 14, name: 'Igor', age: 25, group: 'developer' },
  { id: 16, name: 'Fulano', age: 29, group: 'p.o.' },
  { id: 17, name: 'Maria', age: 24, group: 'designer' },
];

const filteredUsers = people.filter((p => p.name.includes('ar')));

console.log(filteredUsers);