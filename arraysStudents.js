var aText = document.getElementById('answers');

let grades = [78.86,92,77];
aText.innerHTML = "Array:" + grades;
aText.innerHTML+="Second Value:" + grades[1];
grades[1]=83;
aText.innerHTML += "<br/>Array:" + grades;
aText.innerHTML += "<br/>Array Length:" + grades.length;
let lastGrade = grades.length-1; //result will be 3
let lgValue = grades[lastGrade]++;
aText.innerHTML += "<br/>Last Grade Change:" + lgValue;
aText.innerHTML += "<br/>Array:" + grades;
aText.innerHTML += "<br/>Third Array Value" + grades[2];
let gradeTotal = grades[0]+grades[1]+grades[3];
aText.innerHTML += "<br/>Array Average:" + (gradeTotal/grades.length);
aText.innerHTML += "<br/>Above Average:" +((gradeTotal/grades.length)>80);

let tops = ['tishirts', 'sweater','sweatchirt','blouse','button-down','hoosie'];

let exText = document.getElementById('extraAnswers');

tops.push('tank');
exText.innerHTML = "Array Push:" + tops;

//removes last value
tops.pop();
exText.innerHTML+="<br/>Array Pop:" + tops;

//remove first value
tops.shift();
exText.innerHTML+="<br/>Array Shift:" + tops;

//add value at beginning
tops.unshift("T-shirt");
exText.innerHTML+="<br/>Array Inshift:" + tops;

//Add/Delet values in the middle
tops.splice(2,1); //Delet sweatshirt
exText.innerHTML+="<br/>Delet Sweatshirt:" + tops;

tops.splice(3,0,"sweatshirt","tank");
exText.innerHTML+="<br/>Add Sweatshirt and tank:" + tops;

let bottoms=['jeans','shorts','skirts','slacks','sweatpants'];

let outfits=[tops,bottoms];

document.write(outfits[0][1] + "" + outfits[1][3]);

//OBJECT

const friend = {
    fName:"william",
    lName:"Stevens",
    age:27,
    studnet:false,
    fullName: function(){
        return this.fName + " " + this.lName;
    }
}

console.log(friend.fullName()+"is" + friend.age + "years old.");

const car = {
    Year:2012,
    Make:"Toyota",
    Model:"Camery",
    Automatic:fals,
    mpg:1500,
    efficiency: function(){
        return (this.mpg>40);
    }
}

document.getElementById('car').innerHTML = "I own a" + car.Year + " " + car.Make + " " 
+ car.Model + ".";

document.getElementById('efficiency').innerHTML = car.Make 
+ " " +car.Model + "Efficiency:" + car. efficiency();