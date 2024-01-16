function handleSubmit() {

    
    const form = document.getElementsByName('form');
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
     var regexPatternemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/; 
    const message = document.getElementById('message');
    if (!regexPatternemail.test(email)) {
        message.innerHTML = "Email is InValid.";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    
    
    else if(!regexpass.test(pass))
    {
        message.innerHTML = "Password is week.Must include uppercase,lowercase letters,number and special symbols";
        message.style.display = "block";
        return false;
        message.style.display = none;
    }
    else {

        return true;
    }
}
function signUp()
{
    window.location.href="./html/signup.html";
}
    