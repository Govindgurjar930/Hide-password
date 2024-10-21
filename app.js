let eyeicon=document.getElementById("eyeicon");
let paasword=document.getElementById("password");

eyeicon.onclick=function(){
    if (paasword.type=="password"){
        paasword.type="text";
        eyeicon.src="eye-open.png";
    }else{
        paasword.type="password";
        eyeicon.src="eye-close.png";
    }
}