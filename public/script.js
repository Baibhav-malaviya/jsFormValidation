
//!===========CODE FOR FORM VALIDATION===========//


const inputs = document.querySelectorAll('input');
inputs.forEach((input)=>{
    input.addEventListener('change',showError);
    input.addEventListener('keyup',showError);
});


function showError(){
   const btn = document.querySelector('input[type="submit"]');
   const selector = this.id;


   if(selector=="name"){
    const name = document.querySelector(`#${selector}`).value;
    if(name.length < 5 && !/[0-9]/.test(name)){
        btn.classList.add('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="*Name must be at least 5 characters";
        document.querySelector(`#${selector}`).style.border="2px solid red"
        document.querySelector(`#${selector}`).style.background="rgba(255,0,0,.03)"
    }else{
        btn.classList.remove('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="";
        document.querySelector(`#${selector}`).style.border="2px solid green"
        document.querySelector(`#${selector}`).style.background="rgba(0,255,0,.03)"
    }
   }
    


   
   if(selector=='mail'){
    const mail = document.querySelector(`#${selector}`).value;
    const _index1=mail.indexOf('@');
    const _index2=mail.indexOf('.');
    console.log();
    if(mail.includes('@')&& mail.includes('.') && mail.slice(mail.length-2,mail.length) != '..' && (mail.length-_index1) > 9 && (mail.length-_index2) > 2  ){
        btn.classList.remove('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="";
        document.querySelector(`#${selector}`).style.border="2px solid green"
        document.querySelector(`#${selector}`).style.background="rgba(0,255,0,.03)"
    }else{
        btn.classList.add('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="*Please enter a valid email address";
        document.querySelector(`#${selector}`).style.border="2px solid red"
        document.querySelector(`#${selector}`).style.background="rgba(255,0,0,.03)"
    }
   }




   if(selector=='tel'){
    const telephone = document.querySelector(`#${selector}`).value;
    const digits = telephone.split('').slice(1,telephone.length);//indian number also starts with +91 here '+' is handled
    const isValidNum = digits.every((digit)=>!isNaN(digit));
    console.log(isValidNum);
    if(isValidNum && telephone.length>=10 && telephone.length<=14){
        btn.classList.remove('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="";
        document.querySelector(`#${selector}`).style.border="2px solid green"
        document.querySelector(`#${selector}`).style.background="rgba(0,255,0,.03)"
    }else{
        btn.classList.add('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="*Please enter a valid telephone number";
        document.querySelector(`#${selector}`).style.border="2px solid red"
        document.querySelector(`#${selector}`).style.background="rgba(255,0,0,.03)"
    }
   }
    




   if(selector=='password'){
    const password = document.querySelector(`#${selector}`).value;
    if(password.length>=8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)){
        btn.classList.remove('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="";
        document.querySelector(`#${selector}`).style.border="2px solid green"
        document.querySelector(`#${selector}`).style.background="rgba(0,255,0,.03)"
    }else{
        btn.classList.add('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="*password must be at least 8 characters and contains a number and special characters";
        document.querySelector(`#${selector}`).style.border="2px solid red"
        document.querySelector(`#${selector}`).style.background="rgba(255,0,0,.03)"
    }

   }






   if(selector=='confirmPassword'){
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector(`#${selector}`).value;
    if(password==confirmPassword){
        btn.classList.remove('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="";
        document.querySelector(`#${selector}`).style.border="2px solid green"
        document.querySelector(`#${selector}`).style.background="rgba(0,255,0,.03)"
    }else{
        btn.classList.add('noPointer');
        document.querySelector(`#${selector} + div`).innerHTML="*Enter same as the password";
        document.querySelector(`#${selector}`).style.border="2px solid red"
        document.querySelector(`#${selector}`).style.background="rgba(255,0,0,.03)"
    }
   }

   
}




// const regex = new RegExp('[a-z]','g');

// let string = "f9A"
// string = regex.test(string);
// console.log(string);

//  // At least 8 characters
//  if (password.length < 8) {
//     return false;
//   }

//   // At least one uppercase letter
//   if (!/[A-Z]/.test(password)) {
//     return false;
//   }

//   // At least one lowercase letter
//   if (!/[a-z]/.test(password)) {
//     return false;
//   }

//   // At least one digit
//   if (!/[0-9]/.test(password)) {
//     return false;
//   }

//   // At least one special character
//   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
//     return false;
//   }


// // This is the code generated by chatGpt for email validation purposes , but it not so perfect that's why it is lying in comments😂
// const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// //Test the email against the pattern
// return pattern.test(email);

//!Code for the alert box


const giveFeedback = document.querySelector('#formSubmit');
    giveFeedback.addEventListener('click', () =>{
    setTimeout(() => {
        document.querySelector('.alert-success').classList.add('show');
    }, 2000);
    })

document.querySelector('.success-btn').addEventListener('click', () =>{
    location.reload();
})



//? ================CODE FOR TOGGLE BETWEEN LOGIN AND REGISTRATION=====================


const login = document.querySelector('#loginIcon');
const registration = document.querySelector('#registrationIcon');
const createNew=document.querySelector('.mainContainer form.login-form div h1');


login.addEventListener('click', function(){
    registration.style.boxShadow = 'none';
    registration.style.zIndex='0';
    this.style.boxShadow = '0 0 5px 0 rgba(0, 0, 0, 0.4)'
    this.style.zIndex = '1';
    document.querySelector('.mainContainer form.registration-form').style.display = 'none';
    document.querySelector('.mainContainer form.login-form').style.display='flex';
});
registration.addEventListener('click', registrationClick);
createNew.addEventListener('click',registrationClick);

function registrationClick(){
    login.style.boxShadow = 'none';
    login.style.zIndex='0';
    this.style.boxShadow = '0 0 5px 0 rgba(0, 0, 0, 0.4)'
    this.style.zIndex='1';
    document.querySelector('.mainContainer form.registration-form').style.display = 'flex';
    document.querySelector('.mainContainer form.login-form').style.display='none';
}

