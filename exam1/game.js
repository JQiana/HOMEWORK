function winningtext(){
    var currentwinnigs = '50';
    document.getElementById('cWinnings').innerHTML = currentwinnigs;
    let wintext = math.floor(math.radom()*6)+1;   
    document.getElementById('wText').innerHTML = "You rolled a" + wintext + "!";

    switch(wintext){
        case 1 (currentwinnigs*2):
            winningtext = "It is good to be number 1! You doubled your winnings!"
            break;
        case 2 :
            winningtext = "Second best is not good enough. Roll again"
            break;
        case 3 (currentwinnigs*0):
            winningtext = "Three is not a lucky number at all. You lose all your winnings!"
            break;
        case 4 (currentwinnigs += 400):
            winningtext = "Four is lucky like a four-leafed clover. You won 400 points!"
            break;
        case 5:
            winningtext = "Five Alive! You are still in the game, but there is no change in your winnings."
            break;
        case 6:{
            function addItem(){
                let item = prompt("Choose between 1-50");
                console.log(item);
            }
    }
}