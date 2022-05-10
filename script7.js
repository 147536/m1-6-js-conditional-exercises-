// Program where we introduce two numbers, a numerator and a denominator. If the denominator is not zero, we display the result of dividing the numerator by the denominator. If the denominator is zero, we display the message "Cannot divide by zero". //
let number1 = parseInt(prompt("Enter a number for the numerator:"));
let number2 = parseInt(prompt("Enter a number for the denominator:"));

if (number2 === 0) {
    alert(`Cannot divide by zero`);
} else { 
    alert(`The numerator divided by the denominator is equal to: ${(number1 / number2)}`)
};
