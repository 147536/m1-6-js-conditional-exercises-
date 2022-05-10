// Program that asks the user for two numbers. Then it will show a message that tells how the two are related. For example if you type 5 and 7 , it shows "5 is less than 7". //
let number1 = parseInt(prompt("Enter first number:"));
let number2 = parseInt(prompt("Enter second number:"));
if (number1>number2) {
    alert(`${number1} is greater than ${number2}`)
} else if (number1<number2) {
    alert(`${number1} is less than ${number2}`)
} else {
    alert(`The two numbers are the same`)
};