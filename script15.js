// Program that asks us for the number of ice creams we want to buy. Each ice cream is worth 2 euros. If we buy more than 10 ice creams, they give us one. The program will show on the screen the number of ice creams that they give us and how much we have paid for them. (We only give one free ice cream even if you buy many more ice creams than 10) //
let iceCream = parseInt(prompt("How many ice creams do you want to buy?: "));
if (iceCream >= 10) {
    alert(`You have bought ${iceCream} ice creams, you have paid for them ${iceCream * 2} Euros and they have given you 1 more. In total they have given him ${iceCream + 1} ice creams for ${iceCream * 2} euros`)
} else {
    alert(`You have bought ${iceCream} ice creams and have paid ${iceCream * 2} Euros for them.`)
}