// Program that asks the user to write a day of the week (Monday, Tuesday...). It will show you on the screen what day it says it is if it is between Monday and Friday (For example "Today is Monday") and if it's the weekend show "It's the weekend". The program has been done once once using SWITCH and another using ELSE IF. //

// Program with "SWITCH" //

let weekDay = (prompt("Enter the name of a day of the week:"));
switch (weekDay) {

    case "monday":
        alert(`Today is monday`);
        break;

    case "tuesday":
        alert(`Today is tuesday`);
        break;

    case "wednesday":
        alert(`Today is wednesday`);
        break;

    case "thursday":
        alert(`Today is thursday`);
        break;

    case "friday":
        alert(`Today is friday`);
        break;

    case "saturday":
        alert(`Today is weekend`);
        break;

    case "sunday":
        alert(`Today is weekend`);
        break;

    default:
        alert(`Please enter a correct day of the week.`)
        break;
};

// Program with "ELSE IF" //

let weekDay2 = (prompt("Enter the name of a day of the week:"));

if (weekDay2 === "monday" || weekDay2 === "tuesday" || weekDay2 === "wednesday" || weekDay2 === "thursday" || weekDay2 === "friday" || weekDay2 === "friday") {
    alert(`Today is ` + weekDay2)
} else if (weekDay2 === "saturday" || weekDay2 === "sunday") {
    alert(`Today is weekend`)
} else {
    alert(`Please enter a correct day of the week.`)
};

