var aText = document.getElementById('answars');

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
aText.innerHTML += "<br/>Array Average:" + (gradetotal/grades.length);
aText.innerHTML += "<br/>Above Average:" +((gradeTotal/grades.length)>80);
