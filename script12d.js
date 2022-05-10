// Program in which the user is asked the position in which he finished. Then, using if/else, Places 1, 2 and 3 see the message "Get on the podium", the rest see the message "The race is over". //
let position = parseInt(prompt("Enter the position you finished in:"));
if (position === 1 || position === 2 || position === 3) {
    alert(`Get oh the podium`)
} else {
    alert(`The race is over`)
}