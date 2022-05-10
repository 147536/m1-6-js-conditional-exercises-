// Program that asks the user for three numbers and tells if the difference between one of them is exactly 20 less than one of the others. For example, if the user enters 20, 40, and 55, the program will say that the first number is 20 less than the second. //
let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));
let number3 = parseInt(prompt("Enter the third number:"));

if (number1 == (number2 - 20)) {
    alert(`The first number is 20 less than the second`);
} else if (number1 == (number3 - 20)) {
    alert(`The first number is 20 less than the third`);
} else if (number2 == (number1 - 20)) {
    alert(`The second number is 20 less than the first`);
} else if (number2 == (number3 - 20)) {
    alert(`The secodnd number is 20 less than the third`);
} else if (number3 == (number1 - 20)) {
    alert(`The third number is 20 less than the first`);
} else if (number3 == (number2 - 20)) {
    alert(`The third number is 20 less than the second`);

};