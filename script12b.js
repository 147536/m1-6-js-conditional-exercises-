// Program in which the user is asked the position in which he finished. Then, if the position value is 1, we show the message with "Gold Medal", if the position value is 2, we show the message with "Silver Medal", if it is 3 "Bronze Medal" and the rest "The important thing is to participate." //
let position = parseInt(prompt("Enter the position you finished in:"));
if(position === 1) {
    alert(`Gold Medal`)
} else if (position === 2) {
    alert(`Silver Medal`)
} else if (position === 3) {
    alert(`Bronze Medal`)
} else {
    alert(`The important thing is to participate`)
}