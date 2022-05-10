// Program that asks the user for 3 numbers. If the result of the sum of the first two is equal to the third number, display it on the screen, if not, it shows you that the third is not the sum of the previous two. //
let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));
let number3 = parseInt(prompt("Enter the third number:"));

if (number1 + number2 === number3) {
    alert(`The sum of the first two numbers is equal to the third (${ number3 }).`);
} else {
    alert(`The third number is not equal to the sum of the previous two`);
};