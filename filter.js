//                                      filter()
// ========================================================================================

const numbers = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];

const numbersWithoutRepetition = numbers.filter((elem, index, array) => array.indexOf(elem) === index);

console.log(numbersWithoutRepetition);