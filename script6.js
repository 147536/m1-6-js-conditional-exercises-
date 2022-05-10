// Program that asks for a number and displays that number squared and cubed (multiplied by itself two and three times). If the number is less than 1, do not compute the cube or square. //

let number = parseInt(prompt("Enter the number:"));

if (number < 1) {
    alert(`Cannot display result, number is less than 1`);
} else {
    alert(`The squared number is: ${number * number}.
The cubed number is: ${(number * number) * number}`)
};
