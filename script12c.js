// Program in which the user is asked the position in which he finished. Then, using SWITCH: If the position value is 1, we show the message with "Gold Medal", if the position value is 2, we show the message with "Silver Medal", if it is 3 "Bronze Medal" and when rest "The important thing is to participate". //
let position = parseInt(prompt("Enter the position you finished in:"));
switch (position) {
    case 1:
        alert(`Gold Medal`);
        break;
    case 2:
        alert(`Silver Medal`);
        break;

    case 3:
        alert(`Bronze Medal`);
        break;

    default:
        alert(`The important thing is to participate`);
        break;
}