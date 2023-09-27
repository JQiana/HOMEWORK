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
}else if (tHours>16 && tHours<=20){
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

//Dice roll

function rollDie(){
    var dieImage='';
    let rNum = Math.floor(Math.random()*6)+1;
    switch(rNum){
        case 1:
            dieImage = "die_face_1.png";
            break;
        case 2:
            dieImage = "die_face_2.png";
            break;
        case 3:
            dieImage = "die_face_3.png";    
            break;
        case 4:
            dieImage = "die_face_4.png";
        case 5:
            dieImage = "die_face_5.png";
        case 6:
            dieImage = "die_face_6.png";
        default:
            console.log("not working")
    }
    document.getElementById('dice_1').innerHTML = '<img src="image/'+dieImage+'"/>';
    rNum = Math.floor(Math.random()*6)+1;
    switch(rNum){
        case 1:
            dieImage = "die_face_1.png";
            break;
        case 2:
            dieImage = "die_face_2.png";
        case 3:
            dieImage = "die_face_3.png";    
        case 4:
            dieImage = "die_face_4.png";
        case 5:
            dieImage = "die_face_5.png";
        case 6:
            dieImage = "die_face_6.png";
        default:
            console.log("not working")
    }
    document.getElementById('dice_2').innerHTML = '<img src="image/'+dieImage+'"/>';
}

//<img src="image/die_face_1.png">

//seasons of the year

//this Month hods this month
var seasonsText;
switch(true){
    case (thisMonth==12 || thisMonth<=2):
    seasonsText = "It's winter!";
    break;
    case (thisMonth>=3 && thisMonth<=5):
    seasonsText = "It's spring!"
    break;
    case (thisMonth>=6 && thisMonth<=8):
        seasonsText = "It's summer!";
        break;
    case(thisMonth>=9 && thisMonth<=11):
    seasonsText = "It's fall!";
    break;
    default:
        seasonsText = "That is not an option.";
}