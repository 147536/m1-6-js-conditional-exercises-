// Program that responds with pre-established answers according to the content of the question (specifically according to the symbols used). For example:

// Bob is a lazy teenager, in a conversation his answers are very limited: 

// a. Bob replies, "Sure!" if you ask him a question.
// b. Bob replies “Hey, chill out.” if you yell at him
// c. Bob replies “Hey, chill out! I know what im doing." If you ask him a question yelling at him.
// d. Bob replies “Okay, so we have those...” If you don't say anything to him.
// e. Bob replies "No more." to anything else.

// (We consider a sentence a question if it contains a ? symbol, we consider a shout a phrase that contains a !, we consider a shouting question if it has both the symbol ? like the !, and we consider saying nothing as an empty string)

let text = prompt(`Say something to Bob:`)
if (text.includes(`?`) && text.includes(`!`)) {
    alert(`Hey, chill out! I know what im doing.`)
} else if (text.includes(`?`)) {
    alert(`Sure!`)
} else if (text.includes(`!`)) {
    alert(`Hey, Chill out!`)
} else if (text === "") {
    alert(`Okay, so we have those...`)
} else {
    alert(`No more.`)
}