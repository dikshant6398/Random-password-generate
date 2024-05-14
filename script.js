const passInput=document.getElementById('Password');
let inputLength=document.getElementById('lenghtpass');
let Length=inputLength.value;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#&!";

const allchar=upperCase+lowerCase+number+symbol;
function createPassword(){
    Length=inputLength.value;
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(Length > password.length){
        password+=allchar[Math.floor(Math.random()*allchar.length)];
    }
    passInput.value=password;
   
}

function copyText(){
    passInput.select();
    document.execCommand("copy");
}
