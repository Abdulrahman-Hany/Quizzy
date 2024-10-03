function checkRequired(value){
    if(value != ""){
        return true;
    }
}
/* fullname validation */ 
function checkFullname(value){
    let fullnamePattern=/^[A-Z][a-z]+ [A-Z][a-z]+$/; //Ali Ahmed
    return fullnamePattern.test(value);
}
/* email validation */ 
function checkEmail(value){
    let Pattern=/^[^@]+@[^@]+\.[^@]+$/;
    return Pattern.test(value);
}

function checkPhone(value){
    let Pattern=/^(010|011|012|015)[0-9]{8}$/;
    return Pattern.test(value);
}

function checkConfPass(pass,confPass){
    if(pass == confPass){
        return true;
    }
}
/* phone validation */ 
/* password validation */ 
/* conf password validation */ 
function checkRequiredStyle(input,spanId,message,color){
    input.style.borderColor=color;
    document.querySelector(spanId).innerText=message;
}