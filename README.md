Map

A função map é uma das funções de ordem superior (higher-order functions) em JavaScript. Ela é usada para transformar uma matriz (array) existente em outra matriz, aplicando uma função a cada elemento da matriz original.
Ela recebe um argumento obrigatório, que é uma função callback. Essa função callback é executada para cada elemento da matriz original, e deve retornar um novo valor que será adicionado à nova matriz resultante.

É importante notar que a função map não modifica a matriz original, ela retorna uma nova matriz. Além disso, a função callback passada para a função map pode receber três argumentos opcionais: o valor do elemento atual, o índice do elemento atual e a matriz original completa. Esses argumentos podem ser úteis em alguns casos, como para filtrar elementos com base em uma condição ou realizar cálculos mais complexos.
