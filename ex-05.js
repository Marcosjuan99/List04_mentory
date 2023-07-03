const prompt = require("prompt-sync")()



var number = Number(prompt("Digite um número ? "));

var result = number

while (result !== 0) {
    result = result / 2;
    console.log(result);
}
