// Program that asks us for a value and asks if we want to convert it to centigrade (if you write C) or if we want to convert it to fahrenheit (if you write F) and shows us the value on the screen. //
let value = parseInt(prompt("Enter the value:"));
let temperatureUnit = (prompt("If you want to convert the value to Degrees Centigrade (ºC) enter C and if you want to convert it to Degrees Fahrenheit (ºF) enter F:"));
let temperatureCentigrados = ((value - 32) * 5) / 9;
let temperatureFahrenheit = ((value * 9) / 5) + 32;

if (temperatureUnit === "C") {
    alert(`The value in Centigrade Degrees (ºC) is: ${temperatureCentigrados} .`);
} else if (temperatureUnit === "F") {
    alert(`The value in Fahrenheit Degrees (ºF) is: ${temperatureFahrenheit}`);
} else {
    alert(`You must enter C for Centigrade or F for Fahrenheit.`);
}