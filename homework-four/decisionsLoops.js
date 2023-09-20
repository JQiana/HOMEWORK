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