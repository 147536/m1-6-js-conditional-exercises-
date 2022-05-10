// Program that when prompted by the user's age. If the age is equal to or less than 8 we show the message "Go on the slide", if it is not, we show "You are too old to use the slide". //

let age = parseInt(prompt("Enter your age:"));
if (age <= 8) {
    alert(`Go on the slide!`);
} else {
    alert(`You are too old to use the slide`);
};