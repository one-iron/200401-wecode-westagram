const id = document.getElementById('inputId');
const pw = document.getElementById('inputPw');
const changeStyle = document.getElementById('loginButton');

id.addEventListener('keyup',function(){
    if(id.value.length > 0 && pw.value.length > 0){
        changeStyle.style.backgroundColor ="#0095F6";
    }
    else{
        changeStyle.style.backgroundColor ="#B2DFFC";
    }
})

pw.addEventListener('keyup',function(){
    if(id.value.length > 0 && pw.value.length > 0){
        changeStyle.style.backgroundColor ="#0095F6";
    }
    else{
        changeStyle.style.backgroundColor ="#B2DFFC";
    }
})