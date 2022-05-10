// Program that prompts the user for two values and: a. If the two values are equal it shows 0, b. If the two values have the same remainder when dividing by 6 display the smaller, c. If not, show the larger of the two. //
let value1 = parseInt(prompt("Enter first value:"));
let value2 = parseInt(prompt("Enter second value:"));
if (value1 === value2) {
    alert(`The two values are equal (0)`)
} else if ((value1 % 6 === value2 % 6) && value1 > value2) {
    alert(`The smaller value is ${value2}`)
} else if ((value1 % 6 === value2 % 6) && value1 < value2) {
    alert(`The smaller value is ${value1}`)
} else if (value1 > value2) {
    alert(`The larger value is: ${value1}`)
} else if (value1 < value2) {
    alert(`The larger value is: ${value2}`)
};


