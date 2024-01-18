
/*function  validateName()
{
    const name = document.getElementById('username').value;
    const form = document.getElementsByName('form');
    const message = document.getElementById('message');
    var regexPatternname = /^[A-Za-z][A-Za-z0-9]+$/;
    if (name.trim().length == 0) {

        message.innerHTML = "Username can't be blank";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (name.length < 8) {
        message.innerHTML = "Username must be more than 8 characters.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (!regexPatternname.test(name)) {
        message.innerHTML = "UserName is InValid. username should start with an alphabet.No special characters.";
        message.style.display = "block";
        return false;
        message.style.display = none;

    }
    else{
        return true;
    }

}
function validateEmail(){
    const email = document.getElementById('email').value;
    var regexPatternemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const message = document.getElementById('message');
     if (!regexPatternemail.test(email)) {
        message.innerHTML = "Email is InValid.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else{
        return true;
    }
}
function validatePhone()
{
    const phone = document.getElementById('contact').value;
    const message = document.getElementById('message');
    if (phone.trim().length != 10) {
        message.innerHTML = "Phone number must be 10 digits.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (isNaN(phone)) {
        message.innerHTML = "Phone number can have numerals only.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else{
        return true;
    }
}
function validatePass()
{
    const pass = document.getElementById('pass').value;
    let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/; 
    const message = document.getElementById('message');
    if(!regexpass.test(pass))
    {
        message.innerHTML = "Password is week.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }

    else {

        return true;
    
    }
    
    

}
function validateCpass()
{
    const pass = document.getElementById('pass').value;
    const cpass = document.getElementById('repeatpass').value;
    const message = document.getElementById('message');
    if (pass != cpass) {
        message.innerHTML = "Passwords doesn't match.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }

    else {
     return true;
    }
}
*/

function resetValue()
{
    window.location.href="../html/signup.html";



function handleSubmit() {

    const name = document.getElementById('username').value;
    const form = document.getElementsByName('form');
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const phone = document.getElementById('contact').value;
    const cpass = document.getElementById('repeatpass').value;
    var regexPatternname = /^[A-Za-z][A-Za-z0-9]{7,29}$/;
    var regexPatternemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    let passwordStrength = document.getElementById('passwordStrength');
    let poor = document.querySelector('#passwordStrength #poor');
    let weak = document.querySelector('#passwordStrength #weak');
    let strong = document.querySelector('#passwordStrength #strong');
    let poorRegExp = /^[a-z]/;
    let weakRegExp = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]/;
    let strongRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    const message = document.getElementById('message');
    if (name.trim().length == 0) {

        message.innerHTML = "Username can't be blank";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (name.length < 8) {
        message.innerHTML = "Username must be more than 8 characters.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (!regexPatternname.test(name)) {
        message.innerHTML = "UserName is InValid. Username should start with an alphabet,can include letters and digits only.";
        message.style.display = "block";
        return false;
        message.style.display = none;

    }
    else if (!regexPatternemail.test(email)) {
        message.innerHTML = "Email is InValid.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (phone.trim().length != 10) {
        message.innerHTML = "Phone number must be 10 digits.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (isNaN(phone)) {
        message.innerHTML = "Phone number can have numerals only.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    
    else if (pass.trim().length == 0) {
        message.innerHTML = " password can't be blank";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (pass.length < 8) {
        message.innerHTML = "Password must be more than 8 characters.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    /*else if(poorRegExp.test(pass))
    {
        poor.innerHTML="Poor password strength";
        poor.style.display = "block";
        poor.style.backgroundColor="red";
        return true;
        poor.style.display=none;
    }
    else if(weakRegExp.test(pass))
    {
        weak.innerHTML="Weak password strength";
        weak.style.display = "block";
        weak.style.backgroundColor="yellow";
        return true;
        weak.style.display=none;
    }
    else if(strongRegExp.test(pass))
    {
        strong.innerHTML="strong password";
        strong.style.display = "block";
        strong.style.backgroundColor="green";
        return true;
        strong.style.display=none;
    }
    else if(regexpass.test(pass))
    {
        message.innerHTML = "Strong password";
        message.style.display = "block";
        message.style.backgroundColor="green";
        return false;
        message.style.display = none;
    }*/
    else if (cpass.trim().length == 0) {
        message.innerHTML = "confirm password can't be blank";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else if (pass != cpass) {
        message.innerHTML = "Passwords doesn't match.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }

    else {

        return true;
    }
}
   /*function validatePassword() {


    const pass = document.getElementById('pass').value;


    let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    let passwordStrength = document.getElementById('passwordStrength');
    let poor = document.querySelector('#passwordStrength #poor');

    let poorRegExp = /^[a-z]/;
    let weakRegExp = /^(?=.*?[A-Z][A-Za-z\d@.#$!^%*?&])/;
    let strongRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    const message = document.getElementById('message');
    if (poorRegExp.test(pass)) {
        poor.innerHTML = "Poor password strength";
        poor.style.display = "block";
        poor.style.backgroundColor = "red";
        poor.style.display = none;
    }
       else  if (weakRegExp.test(pass)) {
            weak.innerHTML = "Weak password strength";
            weak.style.display = "block";
            weak.style.backgroundColor = "yellow";

            weak.style.display = none;
       }
           else if (strongRegExp.test(pass)) {
                strong.innerHTML = "strong password";
                strong.style.display = "block";
                strong.style.backgroundColor = "green";
                
                strong.style.display = none;
            }
            return true;
        }
*/
    
function validatePassword()
{
    var code = document.getElementById("pass");
    var strengthbar = document.getElementById("meter");
    strengthbar.style.display="block";
   let passwordStrength = document.getElementById('passwordStrength');
let poor = document.querySelector('#passwordStrength #poor');
code.addEventListener("keyup", function() {
  checkpassword(code.value);
});


function checkpassword(password) {
  var strength = 0;
 
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/) && password.length>=8) {
    strength += 1;

  }
  if (password.length < 8) {
    poor.innerHTML = "minimum number of characters is 8";
  }

  if (password.length > 15) {
    poor.innerHTML = "maximum number of characters is 15";
  }

  
  switch (strength) {
    case 0:
      strengthbar.value = 0;
    break;

    case 1:
      strengthbar.value = 25;
      poor.style.backgroundColor="red";
      poor.innerHTML = "Poor Password strength,include uppercase letter.";
      break;

    case 2:
      strengthbar.value = 50;
      poor.style.backgroundColor="yellow";
      poor.innerHTML = "Weak Password strength,include numeral.";
      break;
      case 3:
        strengthbar.value = 75;
        poor.style.backgroundColor="orange";
      poor.innerHTML = "Medium Password strength,include special symbols.";
        break;
  
      case 4:
        strengthbar.value = 100;
        poor.style.backgroundColor="green";
       poor.innerHTML = "Strong Password strength";
        break;
       return true;
    }
  }
  
}


