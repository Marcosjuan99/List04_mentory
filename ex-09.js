const prompt = require("prompt-sync")()

// 2 - Desenvolva um algoritimo que tranforma um número romando em decimal
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: s = "III"
// Output: 3
// Explanation: III = 3

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
var symbol = "MII"
var decimal = 0
var previousValue = 0

for (var i = symbol.length - 1; i >= 0; i--) {
    var result = symbol[i];
    var value = romanNumerals[result];
    previousValue = value;

    if (value < previousValue) {
        decimal -= value;
    } else {
        decimal += value;
    }


}

console.log(decimal);
