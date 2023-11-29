var passForm = document.forms[0];

var passBtn = passForm.getElementsByTagName('img')[0];

//event listener
document.getElementById("showPass").addEventListener("click",showPassword);

function showPassword(){
    var imgSrc = passBtn.getAttribute('src');
    var hidePassImg = imgSrc.indexOf('hide');
    hidePassImg =hidePassImg<0;
}


if(pass){
    document.getElementById('pass').setAttribute('src',"https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png");
}else{
    document.getElementById('pass').setAttribute('type',"text");
}