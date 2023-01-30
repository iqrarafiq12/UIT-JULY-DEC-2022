/* TASK 01 */
/*Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.*/
var X = prompt('WHATS YOUR NAME?');
var firstName = "IQRA";
var lastName = " RAFIQ";
fullName = firstName + lastName;
console.log(fullName);


/* TASK 02 */
/* Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser */
var x = (prompt('WHATS YOUR FAVORITE MOBILE PHONE MODEL'));
var txt = ["REALME", "SUMSUNG", "OPPO"];
var length = txt.length;
console.log(length);

/* TASK 06  */
/* Repeat Q1 using string concat() method */
const y = prompt('WHATS YOUR NAME?');
var firstName = "MUHAMMAD";
var lastName = " RAFIQ KHAN";
fullName = firstName + lastName;
console.log(fullName);

/* TASK 10 */
/*Write a program that takes user input. Convert and
show the input in capital letters. */
let text = "welcome to my website !";
let result = text.toUpperCase();
console.log(result);

/* TASK 11 */
/*Write a program that takes user input. Convert and
show the input in title case. */
let  str = "Welcome to my website !";
let str2= str.toString();
console.log(str2);

/* TASK 12 */
/*Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */
const num = "35.36";
const dotsRemoved = num.replaceAll('.', '');
console.log(dotsRemoved);

/* TASK 13 */
/* Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ . */
var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}

/* TASK 16 */
/* Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser. */
const str0 = 'UNIVERSITY OF KARACHI';
console.log(str0.split(""));
// return value is ["I love freeCodeCamp"]
