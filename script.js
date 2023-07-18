// declare the variable
const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirm_password=document.getElementById("confirm_password");

form.addEventListener('submit',e=>
{
    e.preventDefault();//not relode the page
    checkInput(); //in the function work in name,email... write or wrong uses
    
});
function checkInput()
{
    const username_value=username.value.trim();
    const email_value=email.value.trim();
    const password_value=password.value.trim();
    const confirmpassword_value=confirm_password.value.trim();
    // = Asign the value
    // == equialization (write or wrong)
    // === checking
    if(username_value === '')
    {
       seterror(username,'User Cannot be Blank');
    }
    else
    {
       setsuccess(username);
    }

    if(email_value === '')
    {
        seterror(email,'Email Cannot be Blank');
    }
    else if(!isEmail(email_value))
    {
        seterror(email,'Not a Valid Email');
    }
    else
    {
     setsuccess(email);
    }

    if(password_value === '')
    {
        seterror(password,'Password Cannot be Blank');
    }
    else
    {
        setsuccess(password)
    }

    if(confirmpassword_value === '')
    {
        seterror(confirm_password,'Password Cannot be Blank');
    }
    else if(password_value !== confirmpassword_value)
    {
        seterror(confirm_password,'Conform Password Does Not Match');
    }
    else 
    {
        setsuccess(confirm_password);
    }
}
//call by argument
function seterror(input, message)
{
  const form_control = input.parentElement;
  const small = form_control.querySelector('small');
  form_control.className = 'form_control error';
  small.innerText = message;
}

function setsuccess(input)
{
    const form_control = input.parentElement;
    form_control.className ='form_control success';
}

function isEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1.3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
