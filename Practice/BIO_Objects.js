const course = {
    cNumber: "N220",
    cTittle:"Introduction to Media Application Development",
    seats:20,
    enrolled:18,
    avalibility: function(){
        return this.seats>this.enrolled;
    }
}

console.log(course.cNumber + "Open: " + course.avalibility());

//course.enroalled=course.enrolled+2;
course.enrolled+=2;

console.log(course.enrolled);
console.log(course.cNumber + " Open: " + course.avalibility()),

//Window Object
document.getElementById('hwDetails').innerHTML = "height: " + window.innerHeight + "<br/> width:" + window.innerHeight;

function IUPUIwebsite(){
    open("http://www.iupui.edu");
}

function printPage(){
    print()
}

document.getElementById('wpDetails').
innerHTML = window.location;
//use this one 

//document object
document.getElementById('dpDetails').
innerHTML = document.URL;

document.getElementById('update').innerHTML = document.lastModified;

//string object

function getGreeting(){
    let gMsg = document.getElementById('greeting'),value;
    gMsg = gMsg.trim();
    let half = gMs.charAt(gMsg.length/2);
    document.getElementById('messaginfo').
    innerHTML = "Your greeting is" + gMsg.
    length + "characters long and the middle character is" + half;
}

var coolText = document.getElementById('coolText').innerHTML;
console.log(coolText);
document.getElementById('coolText').
innerHeight = coolText.toUpperCase();
console.log('coolText');
coolText = coolText.replace("pretty","really");
console.log('coolText');

let classList = document.getElementById('classes').innerHTML;
let classArray = classList.split(",");
console.log(classArray);

//Number object
let myNum = 45.5786756;
document.getElementById('fixed').innerHTML = myNum.toFixed(1);
document.getElementById('precise').innerHTML = myNum.toPrecision(5);

//math object
let myPi = Math.PI;
console.log(myPi);

document.getElementById('round').
innerHTML = Math.round(myPi);
document.getElementById('ceil').
innerHTML = Math.ceil(myPi);
document.getElementById('floor').
innerHTML = Math.floor(myPi);
document.getElementById('random').
innerHTML = Math.random();

let rNum = Math.ceil(Math.random()*10)+1;
document.getElementById('random').innerHTML = rNum;

//Date object
let today = new Date();
document.write(today);
document.write("<br>Date:" + today.getDate());
document.write("<br>:Month" + today.getMonth());
document.write("<br>Day:" + today.getDay());
document.write("<br>Date:" + today.getDate());
document.write("<br>Year:" + today.getFullYear());
document.write("<br>Short Today:" + today.toDateString());