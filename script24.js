// Program that tells if the digits of a three-digit number are all odd, all even, or mixed. The Program asks the user for a number, and displays the number, followed by the message "All figures are even", "All figures are odd" or "The number has even and odd figures".//

let N, a, b, c;
N = Number.parseInt(prompt("Enter the number: "));
if (N < 100 || N >= 999) {
  alert(`You must enter a 3-digit number.`)
} else {
    [a, b, c] = [N % 2, N / 10 % 2, N / 100 % 2];
    if (a ^ b || a ^ c) {
    alert("The number contains both even and odd digits");
  } else {
    if (a) {
      alert("The number contains all odd digits");
    } else {
      alert("The number contains all even digits");
    }
  }
}