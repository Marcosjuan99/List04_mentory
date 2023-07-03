const prompt = require("prompt-sync")()

var listOfNumbers = 0
var sum = 0


while (listOfNumbers !== 9999) {
    var listOfNumbers = Number(prompt("Digite o numeros para a lista ? "))
    if (listOfNumbers != 9999) {
        sum = sum + listOfNumbers
    }
}
console.log(sum);
