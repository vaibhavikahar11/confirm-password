
document.getElementById("registrationform").addEventListener('input', function () {
    validateform();
});


function validateform(){
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const Confirmpassword=document.getElementById("confirmpassword").value;
   
    const submitbtn=document.getElementById("submitbtn");
    const error=document.getElementById("errorelement");

    let isvalid=true;
 
 if(!username || !password ||!Confirmpassword){
    isvalid=false;
 }
 if(password!==Confirmpassword){
    error.textContent  ="password not match";
    error.classList.remove('success');
    error.classList.add('error');
    isvalid=false;
 }
 else{
    error.textContent="password match";
    error.classList.remove('error')
    error.classList.add('success')
    
 }
 if(isvalid){
    submitbtn.classList.add('enabled');
    submitbtn.disabled=false;
   
 }
 else{
    submitbtn.classList.remove("enabled");
    submitbtn.disabled=true;
 }
}