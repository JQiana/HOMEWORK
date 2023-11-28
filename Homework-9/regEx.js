let zipText = document.getElementById('zip');
let ccText = document.getElementById('ccard');
let phoneText = document.getElementById('phone');

//zipcode
function zip(){
    //let z = /^([0-9]{5})([-]?)([0-9]{4})$/;
    let z = /(^\d{5}$)|(^\d{5}-\d{4}$)|(^[0-9]{5}) ([0-9]{4}?)|(^\d{9}$)/;

    document.getElementById('zipAns').innerHTML = z.test(zipText.value)
}

zipText.addEventListener('blur', zip);

function phone(){
    let p = /(^\d{3})([- ]?)(\d{3})([- ]?)(\d{4}$)|([^( ]?)(\d{3})([) ] ?)(\d{3})([- ]?)(\d{4}$)/;
    document.getElementById('phoneAns').innerHTML = p.test(phoneText.value)
}
phoneText.addEventListener('blur',phone);

