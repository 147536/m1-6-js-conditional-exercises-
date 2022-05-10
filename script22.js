// Program for a car rental company. We will have to ask the user for their age. If the user is under 18, they will not be able to rent a vehicle and we will tell them on the screen. If you are of legal age, we ask if you have a driving license. If the answer is negative, you will not be able to rent a car and we will warn you on the screen. If you are of legal age, we will ask you for both your name and surname, the city where you pick up the vehicle and the number of days you want to rent the car (car rental per day has a cost of 25 euros and if you rent it for a week, the cost will be 150 euros). Print on the screen the data of the client who is going to rent the car and the total cost of the rental. //
let age = parseInt(prompt(`How old are you?`));
if (age < 18) {
    alert(`You cannot rent a vehicle.`)
} else if (age >= 18) {
    let driveLicensed = prompt(`Do you have a driver's license (yes or no)?`)
    if (driveLicensed === "yes") {
        let name = prompt(`What´s your name:`)
        let pickupCity = prompt(`City where you will pick up the vehicle?`)
        let rentDays = parseInt(prompt(`Number of days you will rent the vehicle?`))
        alert(`Name of the driver: ${name}.
        City where you will pick up the vehicle: ${pickupCity}.
        Number of days you will rent the vehicle: ${rentDays}.
        Daily vehicle rental price: 25 Euros.
        Total price of vehicle rental: ${rentDays * 25} Euros.`)
    } else if (driveLicensed === "no") {
        alert(`You cannot rent a vehicle.`)
    } else {
        alert(`Please answer yes or no.`)
    }
}