// Program to assess whether commercials receive an extra. If they sell more than 500 euros, we give them an extra 5% of the total of what they have sold. The user enters their name and the sales. It shows your name on the screen, followed by the sales and in the event that the sales exceed 500 euros, 5% of the sales as an extra. //
let name = (prompt("Enter the name of the sales agent:"));
let sales = parseInt(prompt(`Enter the sales made by ${name}`));
if (sales > 500) {
    alert(`${name}'s sales have been ${sales} and his 5% commission is: ${(sales * 0.05)}`);
} else if (sales <= 500) {
    alert(`${name} sales have been ${sales}.`);
} else {
    alert(`You must enter a correct sales amount.`);
}