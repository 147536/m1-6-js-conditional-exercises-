// Program in which the user is asked the position in which he finished. Later, if the value of the position is 1 we will show the following message "You won!", if not we will show "The important thing is to participate". //
let position = parseInt(prompt("Enter the position you finished in:"));
if(position === 1) {
    alert(`You won!`)
} else {
    alert(`The important thing is to participate`)
}