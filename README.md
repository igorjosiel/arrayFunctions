Map

A função map é uma das funções de ordem superior (higher-order functions) em JavaScript. Ela é usada para transformar uma matriz (array) existente em outra matriz, aplicando uma função a cada elemento da matriz original.
Ela recebe um argumento obrigatório, que é uma função callback. Essa função callback é executada para cada elemento da matriz original, e deve retornar um novo valor que será adicionado à nova matriz resultante.

É importante notar que a função map não modifica a matriz original, ela retorna uma nova matriz. Além disso, a função callback passada para a função map pode receber três argumentos opcionais: o valor do elemento atual, o índice do elemento atual e a matriz original completa. Esses argumentos podem ser úteis em alguns casos, como para filtrar elementos com base em uma condição ou realizar cálculos mais complexos.

Filter

A função filter() em JavaScript é uma função de ordem superior (higher-order function) que permite filtrar elementos de um array de acordo com uma determinada condição. A função filter() cria um novo array com todos os elementos que passam no teste implementado pela função de callback fornecida.

A função filter não modifica a matriz original, ela retorna uma nova matriz. Além disso, a função callback passada para a função map pode receber três argumentos opcionais: o valor do elemento atual, o índice do elemento atual e a matriz original completa. Esses argumentos podem ser úteis em alguns casos, como para filtrar elementos com base em uma condição ou realizar cálculos mais complexos.

Reduce

A função reduce() em JavaScript é uma função de ordem superior (higher-order function) que permite reduzir um array a um único valor, aplicando uma função de callback para cada elemento do array. A função reduce() recebe dois argumentos.
Ela pode ser usada para calcular a soma de todos os elementos de um array de números. A função de callback recebe dois argumentos: o acumulador e o elemento atual. A cada iteração, a função soma o elemento atual ao acumulador e retorna o resultado, que se torna o novo valor do acumulador na próxima iteração.

O segundo argumento da função reduce() que ela pode receber é o valor inicial do acumulador.

Every

O método every é uma função de ordem superior no JavaScript que é usada para verificar se todos os elementos de um array satisfazem uma determinada condição. Ele retorna true se todos os elementos do array passam na condição especificada, caso contrário, retorna false.
A função callback deve retornar um valor booleano, que indica se o elemento passa na condição especificada. Se a função retornar false para um elemento, o método every retornará false imediatamente e não continuará a verificar os outros elementos.

Os parâmetros dessa função são: o array que está sendo verificado e uma função callback que é executada para cada elemento do array. A função callback recebe três argumentos: o valor atual do elemento, o índice do elemento e o próprio array.

Some

O método some é uma função de ordem superior no JavaScript que é usada para verificar se pelo menos um elemento de um array satisfaz uma determinada condição. Ele retorna true se pelo menos um dos elementos do array passa na condição especificada, caso contrário, retorna false.
Os parâmetros dessa função são: o array que está sendo verificado e uma função callback que é executada para cada elemento do array. A função callback recebe três argumentos: o valor atual do elemento, o índice do elemento e o próprio array.

A função callback deve retornar um valor booleano, que indica se o elemento passa na condição especificada. Se a função retornar true para um elemento, o método some retornará true imediatamente e não continuará a verificar os outros elementos.