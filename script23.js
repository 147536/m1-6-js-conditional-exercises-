// Program that will show us on the screen if a year is a leap year or not. //
let year = parseInt(prompt(`Enter the year:`));
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    alert(`This year is leap year.`);
} else {
    alert(`This year is not a leap year.`);
}