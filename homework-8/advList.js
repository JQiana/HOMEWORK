var codeList = document.querySelectorAll('codeList li');

let img = document.createElement("li");
    for(let i=0; i<img.length; i++){
        let allLists = document.getElementsByTagName('ul');
        let listItems = document.createElement("listIcon")
        setAttribute("src", "addbtn");
        document.getElementById('codeBox').appendChild(listItems);

    }

function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

var viewInfo = document.querySelector('main');
viewInfo.addEventListener('click', displayInfo, false);

function displayInfo(e) {
    var target = getTarget(e);
    if (target.tagName == "H2") {
        var tParent = target.parentNode;
        var parentDiv = tParent.children;
        console.log(parentDiv[1]);
        if (parentDiv[1].style.display == "none") {
            parentDiv[1].style.display = "block";
        } else {
            parentDiv[1].style.display = "none";
        }
    }
}

var myList = document.querySelector("#codeBox ul");
var addBtn = document.getElementsByTagName('input')[0];

addBtn.addEventListener('click', addItem, false);

function addItem() {
    var newItem = prompt("New Item:");
    var newLI = document.createElement('li');
    var newLIText = document.createTextNode(newItem);
    newLI.appendChild(trashIcon);
    newLIText.appendChild(newItem);
    myList.appendChild(newLI);
}

//let tParent= document.getElementById("codeBox").parentNode.nodeName;
function changeProp(e) {
    var target = getTarget(e);
    var tParent= document.getElementById("codeBox").parentNode.nodeName;
    if(target.tagName == "li"){
        document.getElementById("codeBox").removeChild(tParent);
    }else{
        ++1
    }
}
