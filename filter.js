//                                      filter()
// ========================================================================================

const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];

const uniqueArray = yetAnotherArray.filter((elem, index, array) => array.indexOf(elem) === index);

console.log('Testando: ', uniqueArray);