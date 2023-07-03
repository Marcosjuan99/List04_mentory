const prompt = require("prompt-sync")()


var n = Number(prompt("Qual o valor de N ? "))
var a = Number(prompt("Qual o valor de A ? "))
var b = Number(prompt("Qual o valor de B ? "))
var count = 0

for (var index = 0; index <= n; index++) {
    if (index % 2 != 0) {
        console.log('valores de n', index);
        count = count + index
    }
}

var countABetweenB = 0

for (var index = a; index <= b; index++) {
    if (index % 2 != 0) {
        console.log('valores entre A e B', index);
        countABetweenB = countABetweenB + index
    }
}

console.log('Soma de N', count);
console.log('Soma de A entre B', countABetweenB);