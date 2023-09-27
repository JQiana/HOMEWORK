let bank = 45.67;
let toy = 45.99;
let buyToy = bank>toy; //t/f
//bank small than toy so it has nothing show up
if(!buyToy){
    document.getElementById('bank').innerHTML = "Let's go buy it!";
}

//Birthday Month
let today = new Date();
let thisMonth = today.getMonth()+1;//9

if(thisMonth==7){
    document.getElementById('birthday').
    innerHTML = "Have a gret birthday!";
}else{
    document.getElementById('birthday').
    innerHTML = "No party for you this month"
}

function checkAge(){
    let myAge = document.getElementById('age').value;
    let ageText;

    if(myAge<18){
        ageText = "Sorry - you cammpt vpte.";
    } else if(myAge==18) {
        ageText = "You can finally vote!";
    } else {
        ageText = "Congrats - you can vote.";
    }

    document.getElementById('voteAge').innerHTML = ageText;
}
//greeting
let tHours = today.getHours();
let greeting;
tHours = 18;
if(tHours<=12){
    greeting = "Good Morning!";
}else if (myHours>16 && myHours<=20){
    greeting = "Googd Evening!";
}else{
    greeting = "Good Noght";
}
document.getElementById('myTime').innerHTML = greeting;

//student
let midterm = 78;
let final = 87;
let total = midterm+final+47+62;
let myAvg = (total/350)*100;
var studentText;

if(midterm>50 && final>72){
    studentText = "You passed the class";
}else {
    studentText = "Sorru - You did not pass the class";
}

if((midterm>50 && final>72) || myAvg>80){
    studentText+="<br/>The class is not complete";
}

document.getElementById('msg').innerHTML = studentText;

//Random Number
function newNum(){
    let rNum = Math.floor(Math.random()*20)+1;
    document.getElementById('rNum20').innerHTML = rNum;
}