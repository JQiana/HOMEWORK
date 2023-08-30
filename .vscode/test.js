var fName="Greg"; //string
var book="Greg's Dog";
var lName= "Brooks";
var myAge= 27; //Number
var student= true; //boolean

let hometown="Indianapolis";
const DIMEVAL = 10;

let fullName = fName + "" + lName;

console.log(hometown);
document.write("I love my dog");
document.getElementbyId('fullName'). innerHTML += fullName + " is<i> " + myAge + "</i>years old!";

console.log("Student" + typeof student);
console.log("DIMEVAL" + typeof DIMEVAL);

//Lunch Problem
let banan = 1.5;
let sandwich = 4.5;
let chips = 1.75;
let drink = 2;
let lunch = banan + sandwich + drink + chips*2;
console.log("Lunch" + lunch);
const TAXRATE = 0.07;
let lunchTotal = lunch + (lunch*TAXRATE);
let cash = 12.50;
document.write("<p>Do you have enough cash for lunch?:" + (cash>lunchTotal) + "</p>");