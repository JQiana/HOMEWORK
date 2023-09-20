let bank = 45.67;
let toy = 45.99;
let buyToy = bank>toy; //t/f
//bank small than toy so it has nothing show uo\p
if(!buyToy){
    document.getElementById('bank').innerHTML = "Let's go buy it!";
}