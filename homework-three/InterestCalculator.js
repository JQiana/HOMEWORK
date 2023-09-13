//let result = document.getElementById('result');
function calcInterest(principal,rate,time){
    var p = document.getElementById('principal').value;
    var r = document.getElementById('rate').value;
    var t = document.getElementById('time').value;
    //var duration = document.getElementById('duration').value;
    let interest = 1 + r * t;
    let result = p*interest;

    document.getElementById('result').
    innerHTML = "With a beginning principal of" + principal + "and with a growth rate of" + rate + "% for" + time + "years, your total interest will be" + simplr + "with a grand total of $" + result;
}