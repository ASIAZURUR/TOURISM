const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const phone=document.getElementById("phone");
// form.addEventListener('submit',(click)=>{
//  e.preventDefault();
//  checkinput();
// })
function checkinput(){
const usernameValue=username.value.trim(); 
 const emailValue  = email.value.trim(); 
  const passwordValue=password.value.trim(); 
  const password2Value= password2.value.trim(); 
  const phoneValue= phone.value.trim(); 
  if(usernameValue==""){
        setErrorFor(username,'username cannot be empty');
  }
  else{ 
      setSuccessFor(username);

  }
  if(emailValue==""){
    setErrorFor(email,'Email cannot be empty');
  }
   else if(!isEmail(emailValue)){
    setErrorFor(email,'Email is invalid');
  }else{
      setSuccessFor(email);
  }
  if(passwordValue=="")
  { 
    setErrorFor(password,'Password cannot be empty'); 
  }else if(!isPassword(passwordValue)){
    setErrorFor(password,'Password is invalid '); 
  }else{
    setSuccessFor(password);
  }
  if(password2Value==""){
    setErrorFor(password2,'Please confirm'); 
    
  }else if(passwordValue!== password2Value)
  {
    setErrorFor(password2,"Passwords doesn't match ");
  }else{
    setSuccessFor(password2);
  }if(phoneValue==""){
    setErrorFor(phone,"Phone number can't be empty"); 
  }else if(!isPhoneNo(phoneValue)){
    setErrorFor(phone,"Phone number is invalid")
  }else{
    setSuccessFor(phone);
  }
}
function setErrorFor(input,message){
    const formGroup=input.parentElement;
    const small=formGroup.querySelector('small');
    small.innerText=message;
    formGroup.className='form-group error';
}
function setSuccessFor(input){
    const formGroup=input.parentElement;
    formGroup.className='form-group success';
}
function isEmail(emailValue){
    return /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/.test(emailValue);
}
function isPassword(passwordValue){
  return/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9]{8,20}$/.test(passwordValue);
}
function isPhoneNo(phoneValue){
  return /^([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneValue);
}
