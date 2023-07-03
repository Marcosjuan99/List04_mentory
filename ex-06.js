const prompt = require("prompt-sync")()

var n = Number(prompt("Digite um número para criar uma lista de Fibonacci: "));
var fibonacci = 0
var firstValue = 0 //contagemAnterior
var secondValue = 1//contagemPróxima


for (var index = 0; index < n; index++) {
    firstValue = secondValue
    secondValue = fibonacci
    fibonacci = secondValue + firstValue
    if (true) {
        console.log(`${firstValue} + ${secondValue} = ${fibonacci}`);
    }
}
