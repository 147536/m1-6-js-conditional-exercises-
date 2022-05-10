// Program that asks you what the temperature is where you are and suggests what to do depending on it. The recommendations are: a. If it's over 40 degrees, go somewhere else, b. Between 30 and 40 degrees, turn on the air conditioning, c. Between 30 and 20 degrees, do nothing, d. Between 10 and 20 degrees, turn on the heating, e. If it's less than 10 degrees, go somewhere else. //
let temperature = parseInt(prompt("Enter the temperature of the place where you are in degrees Celsius:"));
if(temperature > 40 || temperature < 10) {
    alert(`Go somewhere else`)
} else if (temperature > 30 && temperature < 40) {
    alert(`Turn on the air conditioning`)
} else if (temperature > 20 && temperature < 30) {
    alert(`Do nothing, stay in place.`)
} else if (temperature > 10 && temperature < 20) {
    alert(`Turn on the heating.`)
} else {
    alert(`Please enter a correct temperature.`)
};