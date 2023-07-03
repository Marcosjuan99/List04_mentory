const prompt = require("prompt-sync")()

var x = Number(prompt("Qual o valor de X ? "))
var a = 0
var b = 0

while (a + b != x) {
    var newA = Number(prompt("digite o novo valor de A ? "))
    var newB = Number(prompt("digite o novo valor de B ? "))
    a = newA
    b = newB
}
console.log("O valor de A + B é igual a X");