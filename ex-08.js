const prompt = require("prompt-sync")()
// 1 - Dado um array de números, transforme ele em número por extenso e some mais um a esse número e retorna um array onde cada index desse array é um número somando.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

var values = [1, 2, 3]
var Output = ""
for (index = 0; index < values.length; index++) {
    Output = Output + values[index]
}
Output = Number(Output) + 1

console.log(Output);