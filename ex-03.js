const prompt = require("prompt-sync")()

var n = Number(prompt("Digite o valor de N ? "))
var name = prompt("Digite um nome do funcionario ? ")
var currentWage = Number(prompt("Digite salario atual ? "))

for (index = 0; index == n; index++) {

    if (currentWage <= 150) {
        console.log(`${name} Seu salário atual é ${currentWage} e o novo salário é ${currentWage * 1.25}`)

    }
    else if (currentWage <= 300) {
        console.log(`${name}   Seu salário atual é ${currentWage} e o novo slário é ${currentWage * 1.20}`)
    }
    else if (currentWage <= 600) {
        console.log(`${name}Seu salário atual é ${currentWage} e o novo slário é ${currentWage * 1.15}`)
    }
    else {
        console.log(`${name} Seu salário atual é ${currentWage} e o novo slário é ${currentWage * 1.10}`)
    }
}


