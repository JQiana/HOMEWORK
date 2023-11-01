document.getElementById('title').innerText = "DOM Manipulation";

document.getElementById('container').style.backgroundColor = "lightblue";

document.getElementsByTagName('li')[0].style.color="crimson";

document.getElementsByTagName('li')[2].style.backgroundColor="pink";

document.getElementsByTagName('li')[6].style.backgroundColor="yellow";

let allItems = document.getElementsByTagName('li');

for(let i=6; i<allItems.length; i++) {
    allItems[i].style.backgroundColor="lightgray";
    allItems[i].style.color="royalBlue";
}


document.getElementsByTagName('button').style.backgroundColor="rebeccapurple";
let allbtn = document.getElementsByTagName('button');
for(let i=0; i<allItems.length; i++) {
    allbtn[a].style.fontStyle="italic";
    allbtn[a].style.color="white";
    allbtn[a].style.border="white";
//    allbtn[a].style.backgroundClip="rebeccapurple";
}


function clickme(){
    let newItem = prompt("Click Me:");
    let newLiItem = document.createElement('li');
    let newLiText = document.createTextNode(newItem);
    newLiItem.appendChild(newLiText);

    let allLists = document.getElementsByTagName('ul');
    let list = allLists[allLists.length-1];

    list.appendChild(newLiItem);
}

function deleteItem(){
    let allLists = document.getElementsByTagName('ul');
    let list = allLists[allLists.length-1];
    let lastItem = list.lastElementChild;
    list.removeChild(lastItem);
}