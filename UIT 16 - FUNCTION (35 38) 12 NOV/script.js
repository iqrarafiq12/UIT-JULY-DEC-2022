
//  TASK 01 Write a function that displays current date & time in your
// browser.
const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
console.log('Time: ' + time);

// TASK 02 | Write a function that takes first & last name and then it
// greets the user using his full name.
var firstName = "wednesday";
var lastName = " Adem";
var fullName = (firstName + lastName)
console.log(fullName); //prints Wedenesday Adem

var user = ("Rahid", "Ahmed");
console.log(user);  //prints Ahmed

// TASK 03 | Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// TASK 05 | Write a function that squares its argument.
let squaredNumber = Math.pow(5,2);
console.log("5*5 = ",squaredNumber);

let variable = 5 ;
let squaredNumber2 = Math.pow(variable,2);
console.log("5*5 = ",squaredNumber2);
// task 06 | Write a function that computes factorial of a number.
function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1;
  while (num > 1) { 
    num--;
    result = result * num;
    
  }
  return result; 
}
factorialize(5);
console.log(factorialize(5));
// TASK 08 | Write a nested function that computes hypotenuse of a
// right angle triangle.
const base = 8;
const perpendicular = 6;
const findHypotenuse = (base, perpendicular) => {
        const bSquare = base ** 2;
        const pSquare = perpendicular ** 2;
        const sum = bSquare + pSquare;
        const hypotenuse = Math.sqrt(sum);
        return hypotenuse;
};
console.log(findHypotenuse(base, perpendicular));
console.log(findHypotenuse(34, 56));
// TASK 09 | Write a function that calculates the area of a rectangle.
var length = parseInt(prompt("Type the length of a Rectangle : "));
var width = parseInt(prompt("Type the width of a Rectangle : "));

var solving_area = (length * width);

document.write("<br>");
document.write("<h2 style='color:black; text-align:center;'>How To Get Area Of The Rectangle</h2>");
document.write("<b style='color:black; font-size:18px;'> The <b style='color:red;'>Length</b> of Rectangle is <b style='color:red;'>" + length + "</b></b>.<br>");
document.write("<b style='color:black; font-size:18px;'> The <b style='color:red;'>Width</b> of Rectangle is <b style='color:red;'>" + width + "</b></b>.<br><br>");
document.write("<b style='color:black; font-size:18px;'> The <b style='color:red;'>Area</b> of Rectangle is <b style='color:red;'>" + solving_area + "</b></b>.");
// TASK 10 |  Write a JavaScript function that checks whether a passed
// string is palindrome or not?
function palindrome(str) {
        let i = 0;
        let j = str.length - 1;
        while(i < j) {
            if(str[i] == str[j]) {
                i++; 
                j--;
            }
            else {
                return false;
            }
        }
        return true;
    }
//     task 11 | Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//  TASK 12 | Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string. 
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));
// TASK 13 | Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// TASK 14  \| Create a function called calcCircumference:
function calcCircumfrence(radius) {
  var y = (Math.PI * radius) * 2;
console.log("The circumfrence is " + y + ".");
}
function calcArea(radius) {
  var x = (Math.PI * radius) * radius;
console.log("The area is " + x + ".");
}

calcCircumfrence(30);
calcArea(10);

// Create a function called calcArea:
function calcArea(width, height) {
  let result = width * height;
  return result;
};
 
 
let area=calcArea(10,5)
console.log(area)

area=calcArea(50,50)
console.log(area)