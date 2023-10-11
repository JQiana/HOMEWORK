function enterRoom(){
    alert("You enter the room and it's really dark and the growl is getting louder.");

    if(tool.toUpperCase()=="SHOVEL"){
        alert("Luckily you chose the shovel. You aere able to defeat the beast by knocking him out with your" + tool);
    } else if(tool.toUpperCase()=="LADDER"){
        alert("You tried to climb your" + tool + "but the beast dragged you down and devoured you.");
    }else is(tool.toUpperCase()=="FLASHLIGHT"){
        alert("You were able to blind the beast with your" + tool + "and escape.");
        let alertAC = Prompt("Do you tell authorities about the beast? ALERT ot HOME");

        if(alertAC.toUpperCase()=="ALERT"){
            alertAControl();
        }else {
            goHome();
        }
    }
}

function leaveRoom(){
    alert("You chose to leave. Chicken!");
}

function startGame(){
    let player = prompt("Welcome to my choose-your-own advanture game.Please start by entering your name:");
    alert("Welcome," + player + "! Today we are going on a campus adventure? Are you ready?Click ok to begin.");
    let tool = prompt("To begin your adventure, you need to select a tool. Please pick your tool of choice: ladder, flashlight, or shovel");
    let room = prompt("You are wlking throught the campus center and hear a menacing frowl coming from another room. do you ENTER or LEAVE?");

    if(room.toUpperCase()=="ENTER"){
        enterRoom();
    } else {
        leaveRoom();
    }
}