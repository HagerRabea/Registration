////////////////////////log in page /////////////////////////////////
var emailInputLogin=document.getElementById("emailInputLogin");
var passwordLogin=document.getElementById("passwordLogin");
var login=document.getElementById("login");
var loginButtun=document.getElementById("loginButtun");
//////////////sign Up Page //////////////////////////////////////////
var nameInputSignup=document.getElementById("nameInputSignup");
var emailInputSignup=document.getElementById("emailInputSignup");
var passwordSignup=document.getElementById("passwordSignup");
var signup=document.getElementById("signup");
var signuplink=document.getElementById("signuplink");
var reqire=document.getElementById("reqire");
var signerror=document.getElementById("signerror");
///////////////////////home page/////////////////////////////////////
var welcomeName=document.getElementById("welcomeName");
var togglePassword=document.getElementById("togglePassword");
var passwordToggle=document.getElementById("passwordToggle");

/////////////////////////////////////////////////////////////////////
var check=0;;
if(localStorage.getItem("signupArr")==null){
    var signupArr=[];
  }else{
    var signupArr= JSON.parse(localStorage.getItem("signupArr"));
  }
function signupAdd(){
    for(var i=0; i<signupArr.length; i++){
        if(emailInputLogin==signupArr[i].userEmail){
            check++;
        }}
        console.log(namevalidation());
        console.log(emailvalidation());
        console.log(passwordvalidation());
        if(namevalidation()&&emailvalidation()&&passwordvalidation()&&check==0){
        var user={
            userName:nameInputSignup.value,
            userEmail:emailInputSignup.value,
            userPassword:passwordSignup.value
        }
        signupArr.push(user);
        localStorage.setItem("signupArr",JSON.stringify(signupArr));
        signupClear();
    }
    else if(nameInputSignup.value==""||emailInputSignup.value==""||passwordSignup.value==""){
        signerror.classList.remove("d-none");
    }else if(check!=0){
        signerror.classList.remove("d-none");
        signerror.innerHTML="this email is already exist";
    }
}
if(login||welcomeName){
var index=0;}

function loginhager(){
    for( var i=0; i<signupArr.length; i++){
        if(emailInputLogin.value==""&&passwordLogin.value==""){
            reqire.classList.remove("d-none");
            reqire.innerHTML="All input Is required";
        }
        else if(emailInputLogin.value==signupArr[i].userEmail&&passwordLogin.value==signupArr[i].userPassword){
                index=i;
            
            login.setAttribute("href","home.html"); 
        break;
       
        }else{
            reqire.classList.remove("d-none");
            reqire.innerHTML="incorrect email or password";
        }
    }
}

function loginclear(){
    emailInputLogin.value="";
    passwordLogin.value="";
}
function signupClear(){
    nameInputSignup.value="";
    emailInputSignup.value="";
    passwordSignup.value="";
}


function namevalidation(){
        var rgex=/[a-z0-9 ]{3,20}$/;
        var isMatch=rgex.test(nameInputSignup.value);
        if (isMatch){
            return true;
        }else{
            return false;
        }
}
function emailvalidation(){
    var rgex=/[a-z0-9 ](@){1}[a-z0-9 ](.){1}[a-z]/;
    var isMatch=rgex.test(emailInputSignup.value);
    if (isMatch){
        return true;
    }else{
        return false;
    }
    
}

function passwordvalidation(){
    var rgex=/[a-z0-9 @#$%^&*]{8,20}/;
    var isMatch=rgex.test(passwordSignup.value);
    if (isMatch){
        return true;
    }else{
        return false;
    }
}

if(togglePassword){
togglePassword.addEventListener("click",function(e) {
        // toggle the type attribute
if(passwordSignup.getAttribute("type")=="password"){
    passwordSignup.setAttribute("type","text");
}else if(passwordSignup.getAttribute("type")=="text"){
    passwordSignup.setAttribute("type","password");
}
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});}


if(passwordToggle){
passwordToggle.addEventListener("click",function(e) {
    // toggle the type attribute
if(passwordLogin.getAttribute("type")=="password"){
    passwordLogin.setAttribute("type","text");
}else if(passwordLogin.getAttribute("type")=="text"){
    passwordLogin.setAttribute("type","password");
}
// toggle the eye / eye slash icon
this.classList.toggle('bi-eye');
});}

// if(welcomeName){
//     welcomeName.innerHTML=`welcome ${signupArr[index].userName}`;
// }

