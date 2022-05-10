// Program that asks for two numbers and shows the addition, subtraction, multiplication, the mean, the largest and the smallest. //
let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));
alert(`The sum of the two numbers is: ${number1 + number2}.
The rest of the two numbers is: ${number1 - number2}.
The multiplication of the two numbers is: ${number1 * number2}.
The mean of the sum of these two numbers is: ${(number1 + number2) / 2}.
${ number1>number2 ? `The greater of the two numbers is: ` + number1 
:  number2>number1 ? `The greater of the two numbers is: ` + number2 
: `The two numbers are the same`}
${ number1>number2 ? `The smaller of the two numbers is: ` + number2 
:  number2>number1 ? `The smaller of the two numbers is: ` + number1 
: `The two numbers are the same`}`);