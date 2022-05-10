// Program that given a phrase by the user, will draw its central character. If the length of the phrase is even, you must remove the two corresponding central characters. If it is odd, it must remove its only central character. //
let text = prompt("Enter a word or phrase:");
if ((text.length % 2) == 0) {
    alert(`This word or phrase is even and its 2 central characters are: ${text.substring(text.length/2 - 1, text.length/2 + 1)}`);
} else {
    alert(`This word or phrase is odd and its central character is: ${text.substring(text.length/2, text.length/2 + 1)}`);
}
