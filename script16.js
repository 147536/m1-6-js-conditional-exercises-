// Display a menu with various options on the screen. Depending on what the user chooses, display the selection. Do it with both if else and switch. //
let option = parseInt(prompt("Select an option: "));
if(option === 1) {
    alert(`Red, Amour, The Last Night, Tales of the Pale August Moon, Spirited Away, The Leopard, Wild Strawberries, Nelly and Mr. Arnaud, The Bridges of Madison, Dubliners, Hannah and Her Sisters, Dersu Uzala, The River, Lands Penumbra, Big Fish, all Billy Wilder, all Hitchcock, all Pixar, all Buñuel, all Erice, all Kubrick and of course The Godfather.`)
} else if (option === 2) {
    alert(`Any music that moved you should do the trick, but if you can, make room for Chet Baker, Coltrane, Morricone, Bob Dylan, Miles Davis, Mozart and of course The Smiths.`)
} else if (option === 3) {
    alert(`Eat, whenever you can, in front of the sea. Everything tastes better in front of the sea.`)
} else {
    alert (`You must choose a correct option.`)
}