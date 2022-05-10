// Program that with three exam grades (with a maximum value of 5 points in each of them) calculates the result of the final grade (adding the 3 grades) with the following ranges: a. 10 is license plate, 9 and up to 10 outstanding, 7 and up to 9 remarkable, 6 and up to 7 good, 5 and up to 6 sufficient and 0 to 5 fail. //
let grade1 = parseInt(prompt("Enter the grade obtained in the first exam (from 0 to 5):"));
let grade2 = parseInt(prompt("Enter the grade obtained in the second exam (from 0 to 5):"));
let grade3 = parseInt(prompt("Enter the grade obtained in the third exam (from 0 to 5):"));
let finalGrade = (grade1 + grade2 + grade3) / 3;
if (finalGrade === 10) {
    alert(`Final Grade: License Plate.`)
} else if (finalGrade >= 9 && finalGrade < 10) {
    alert(`Final Grade: Outstanding.`)
} else if (finalGrade >= 7 && finalGrade < 9) {
    alert(`Final Grade: Remarkable.`)
} else if (finalGrade >= 6 && finalGrade < 7) {
    alert(`Final Grade: Good.`)
} else if (finalGrade >= 5 && finalGrade < 6) {
    alert(`Final Grade: Sufficient`)
} else if (finalGrade >= 0 && finalGrade < 5) {
    alert(`Final Grade: Fail.`)
} else {
    alert(`You must enter a grade between 0 and 10.`)
}

