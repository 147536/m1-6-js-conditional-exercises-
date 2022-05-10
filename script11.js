// Program that asks us for two integers between 25 and 75 and that tells us if there is a digit in common between the two numbers.//
let number1 = prompt("Enter first number:");
let number2 = prompt("Enter second number:");
let number1P1 = number1.substring(0, 1);
let number1P2 = number1.substring(1);
if (number1 < 25 || number1 > 75 || number2 < 25 || number2 > 75) {
    alert(`The numbers entered must be between 25 and 75`)
} else if (number2.indexOf(number1P1) != -1 || number2.indexOf(number1P2) != -1) {
    alert(`There is a common digit between the two numbers.`)
} else {
    alert(`There is no equal digit between the two numbers.`)
}

