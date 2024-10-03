onload=function(){
    const regForm=document.forms['RegForm'];
    const username=document.forms['RegForm']['username'];
    const password=document.forms['RegForm']['password'];
    const email=document.forms['RegForm']['email'];
    const confPass=document.forms['RegForm']['conf-password'];
    const phone=document.forms['RegForm']['phone'];
    const showPassword=document.getElementById("show-password");
    const hidePassword=document.getElementById("hide-password");
    showPassword.addEventListener("click",function(){
        password.type="text";
        showPassword.style.display="none";
        hidePassword.style.display="inline";
    });
    username.addEventListener("blur",function(){
        if(!checkFullname(this.value)){
            checkRequiredStyle(username,"#username-error","fullname isn't valid..","red");
        }else{
            checkRequiredStyle(username,"#username-error","","green");
        }
    });
    email.addEventListener("blur",function(){
        if(!checkEmail(this.value)){
            checkRequiredStyle(this,"#email-error","email isn't valid..","red");
        }else{
            checkRequiredStyle(this,"#email-error","","green");
        }
    });

    phone.addEventListener("blur",function(){
        if(!checkPhone(this.value)){
            checkRequiredStyle(this,"#phone-error","phone isn't valid..","red");
        }else{
            checkRequiredStyle(this,"#phone-error","","green");
        }
    });
    
    regForm.onsubmit=function(){
        let isValid=true;
        let usernameVal=username.value;
        let passwordValue=password.value;
        let confPassValue=confPass.value;
        let phoneValue=phone.value;
        let emailValue=email.value;

        if(!checkFullname(usernameVal)){ 
            isValid=false;
        }
        if(!checkEmail(emailValue)){ 
            isValid=false;
        }
        if(!checkPhone(phoneValue)){ 
            isValid=false;
        }
        if(!checkConfPass(passwordValue,confPassValue)){ 
            isValid=false;
        }
        if(isValid == true){
            
            let newUser={ 
                username:usernameVal,
                email:emailValue,
                phone:phoneValue,
                password:passwordValue
            }
            // push userdata into users
            let users; // undefined
            if(localStorage.getItem('users')!=null){
                users=localStorage.getItem('users'); 
                users=JSON.parse(users);
                users.push(newUser); // array of objects  => array
            }else{
                users=[];
                users.push(newUser);
            }
            let usersStr=JSON.stringify(users); // array to string
            localStorage.setItem('users',usersStr);
        }
        return isValid;
    }
}