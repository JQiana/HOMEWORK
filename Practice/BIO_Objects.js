const course = {
    cNumber: "N220",
    cTittle:"Introduction to Media Application Development",
    seats:20,
    enrolled:18,
    avalibility: function(){
        return this.seats>this.enrolled;
    }
}

console.log(course.cNumber + "Open: " + course.availability());

//course.enroalled=course.enrolled+2;
course.enrolled+=2;

console.log(course.enrolled);
console.log(course.cNumber + " Open: " + course.availability()),

//Window Object
document.getElementById('hwDtails').
innerHTML = "height: " + window.innerHeight + "<br/> width:" + window.innerHeight;

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