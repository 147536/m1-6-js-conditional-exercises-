// Program that when entering 3 values, shows us the smaller value. //
let value1 = parseInt(prompt("Enter the first value:"));
let value2 = parseInt(prompt("Enter the second value:"));
let value3 = parseInt(prompt("Enter the third value:"));
if(value1<value2 && value1<value3) {
    alert(`The smaller value of the three is the first ${value1}`)
} else if (value2<value1 && value2<value3) {
    alert(`The smaller value of the three is the second ${value2}`)
} else if (value3<value1 && value3<value2) {
    alert(`The smaller value of the three is the third ${value3}`)
} else {
    alert(`All three values are equal`)
}