
// TASK 01 | Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
    console.log("The number is zero");
}

else {
    console.log("The number is negative");
}
// b. round off value of the number
Math.round(3.45214 * 1)
console.log(Math.round(3.45214 * 1));
// c. floor value of the number
var result = Math.floor(3.45214 * 1);
console.log("Floor value: " + result);
// d. ceil value of the number
console.log(Math.ceil(1 * 3.45214));

//    TASK 03 | Write a program that displays the absolute value of a
// number.
console.log("absolute value of -4 is:" + Math.abs(-4));

//  TASK 04 |
var diceRoll = Math.floor(Math.random() * 6) + 1;
console.log('You rolled a ' + diceRoll);

// TASK 05 | Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
let num = Math.random();

if (num < 0.5) {
    console.log("Heads");
} else {
    console.log("Tails");
}
// TASK 06 | Write a program that shows a random number between 1
// and 100 in your browser.
var randomNum;
randomNum = Math.ceil(Math.random() * 100);
console.log("Random number between 1 and 100: " + randomNum)

//  TASK 07 |
//function that evaluate the value and returns result
function kiloweightConvert(value) {
    document.getElementById("Pounds").innerHTML = value * 2.2046;
    document.getElementById("Ounces").innerHTML = value * 35.274;
    document.getElementById("Grams").innerHTML = value * 1000;
    document.getElementById("Stones").innerHTML = value * 0.1574;
}

//  TASK 08 | Get a random integer from 1 to 10 inclusive
const Number = Math.ceil(Math.random() * 10);
console.log(Number);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == Number)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + gnum);
