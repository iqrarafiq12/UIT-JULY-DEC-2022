/*TASK 01 |  WRITE A PROGRAM AND DISPKLAY THE CORRECT TIME & DATE IN YOUR BROWSER BUT I CHOOSE THE CONCOLE  */

// GET LOCALE MACHINE DATE TIME 
const date = new Date();
// GET THE DATE AS A STRING
const n = date.toDateString();
// GET THE TIME AS A STRING
const time = date.toLocaleTimeString();
// DISPLAY DATE 
console.log('Date:' + n);
// DISPLAY TIME 
console.log('Time:' + time);
// TASK ENDING 

/* TASK 02 | WRITE A PROGRAM THAT ALERTS THE CURRENTS MONTHIN WORDS. FOR EXAMPLE DECAMBER*/
function show_now(){
    var my_month=new Date()
    
    
    var month_name=new Array(12);
    month_name[0]="January"
    month_name[1]="February"
    month_name[2]="March"
    month_name[3]="April"
    month_name[4]="May"
    month_name[5]="June"
    month_name[6]="July"
    month_name[7]="August"
    month_name[8]="September"
    month_name[9]="October"
    month_name[10]="November"
    month_name[11]="December"
    
    alert ("Current month = " + month_name[my_month.getMonth()]); 

    }

    // TASK 03 | WRITE A PROGRAMM THAT SHOWS A ALERT ON THE FIRST THREE LATTERS OF THE DAY 


var currentDay = new Date();
currentDay.toDateString;
var b = currentDay.toString();
var c = b.slice(0,3);
alert("Today is " + c);

// TASK 04 | Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var currentDay = new Date();
currentDay.toDateString;
var a = currentDay.toString();
var b = a.slice(0.3);
alert("Today is not FunDay because Today is" + b );
if (currentDay == "sunday"){
    alert(" Today is Funday");
}
else if ( currentDay == " saturday"){
    alert("today is not Funday ");
}

/* TASK 05 | Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */
let day = 14;
if (day >15){
console.log("First fifteen days of the month")
}else{
console.log("Last days of the month")
}


// TASK 07 | Write a program that tests whether it's before noon and 
var a = new Date();
var b = a.toString();
var c = b.slice(16,19);
if (c === "12:"){
    console.log("it's PM")
}else if (c === "13:"){
    console.log("it's PM")
}else if (c === "14:"){
    console.log("it's PM")
}else if (c === "15:"){
    console.log("it's PM")
}else if (c === "16:"){
    console.log("it's PM")
}else if (c === "17:"){
    console.log("it's PM")
}else if (c === "18:"){
    console.log("it's PM")
}else if (c === "19:"){
    console.log("it's PM")
}else if (c === "20:"){
    console.log("it's PM")
}else if (c === "21:"){
    console.log("it's PM")
}else if (c === "22:"){
    console.log("it's PM")
}else if (c === "23:"){
    console.log("it's PM")
}else if (c === "24:"){
    console.log("it's AM")
}else if (c === "01:"){
    console.log("it's AM")
}else if (c === "02:"){
    console.log("it's AM")
}else if (c === "03:"){
    console.log("it's AM")
}else if (c === "04:"){
    console.log("it's AM")
}else if (c === "05:"){
    console.log("it's AM")
}else if (c === "06:"){
    console.log("it's AM")
}else if (c === "07:"){
    console.log("it's AM")
}else if (c === "08:"){
    console.log("it's AM")
}else if (c === "09:"){
    console.log("it's AM")
}else if (c === "10:"){
    console.log("it's AM")
}else if (c === "11:"){
    console.log("it's AM")
}


/* TASK 08 | Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate.  */
var lastday = function(y,m){
    return  new Date(y, m +1, 0).getDate();
    }
    console.log(lastday(2022,0));
    console.log(lastday(2022,1));
    console.log(lastday(2022,11));

// Write a program that displays in your browser the
// seconds that elapsed between the reference date 
// record start time
var startTime = new Date();
// later record end time
var endTime = new Date();
// time difference in ms
var timeDiff = endTime - startTime;
// strip the ms
timeDiff /= 1000;
// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
var seconds = Math.round(timeDiff % 60);
// remove seconds from the date
timeDiff = Math.floor(timeDiff / 60);
// get minutes
var minutes = Math.round(timeDiff % 60);
// remove minutes from the date
timeDiff = Math.floor(timeDiff / 60);
// get hours
var hours = Math.round(timeDiff % 24);
// remove hours from the date
timeDiff = Math.floor(timeDiff / 24);
// the rest of timeDiff is number of days
var days = timeDiff ;
console.log(timeDiff + startTime + endTime + seconds + minutes + hours + timeDiff)

//  TASK 11 | Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
const now = new Date();
now;
console.log(now)

// TASK 13 | 

var dob = new Date("09/16/1994");  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
  
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
  
//extract year from date      
var year = age_dt.getUTCFullYear();  
  
//now calculate the age of the user  
var age = Math.abs(year - 1970);  
  
//display the calculated age  
console.log("Age of the date entered: " + age + " years"); 


