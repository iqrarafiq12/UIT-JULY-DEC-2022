// Q.01 | Write a JavaScript function that reverse a number.
num = '32243'
console.log(parseFloat(num));

// Q.02 | Write a JavaScript function that checks whether a passed string is palindrome or not?
function checkPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);

console.log(value);

// Q.03 | Write a JavaScript function that generates all combinations of a string.
function substrings(str1) {
  var array1 = [];
  for (var x = 0, y = 1; x < str1.length; x++, y++) {
    array1[x] = str1.substring(x, y);
  }
  var combi = [];
  var temp = "";
  var slent = Math.pow(2, array1.length);

  for (var i = 0; i < slent; i++) {
    temp = "";
    for (var j = 0; j < array1.length; j++) {
      if ((i & Math.pow(2, j))) {
        temp += array1[j];
      }
    }
    if (temp !== "") {
      combi.push(temp);
    }
  }
  console.log(combi.join());
}

substrings("dog");

// Q.04 | Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabet_order(str) {
  return str.split('').sort().join('');
}
console.log(alphabet_order("talkactiveperson"));

// Q.05 | Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(str) {
  var array1 = str.split(' ');
  var newarray1 = [];

  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quickly grow brown fox"));

// TASK 06 | Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longest_str_in_array(arra) {
  var max_str = arra[0].length;
  var ans = arra[0];
  for (var i = 1; i < arra.length; i++) {
    var maxi = arra[i].length;
    if (maxi > max_str) {
      ans = arra[i];
      max_str = maxi;
    }
  }
  return ans;
}
console.log(longest_str_in_array(["this", "is", "a", "web", "deveolopment", "course"]));

//  TASK 07 | write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//given string
function vowel_count(str1) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for (var x = 0; x < str1.length; x++) {
    if (vowel_list.indexOf(str1[x]) !== -1) {
      vcount += 1;
    }

  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

// TASK 08 | write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}
else {
  console.log("The number is not a prime number.");
}

// TASK 09 | write a JavaScript function which accepts an argument and returns the type.
function detect_data_type(value) {
  var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

  if (typeof value === "object" || typeof value === "function") {
    for (x = 0, len = dtypes.length; x < len; x++) {
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }

  return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('deveolopment'));
console.log(detect_data_type(false));

//  TASK 10 | Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix(n) {

  var i;
  var j;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {

        console.log(' 1 ');
      }

      else {
        console.log(' 0 ');
      }
    }
    console.log('----------');
  }
}
matrix(4);


// TASK 11 | Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function Second_Greatest_Lowest(arr_num) {
  arr_num.sort(function (x, y) {
    return x - y;
  });
  var uniqa = [arr_num[0]];
  var result = [];

  for (var j = 1; j < arr_num.length; j++) {
    if (arr_num[j - 1] !== arr_num[j]) {
      uniqa.push(arr_num[j]);
    }
  }
  result.push(uniqa[1], uniqa[uniqa.length - 2]);
  return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));

