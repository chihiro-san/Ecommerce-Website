// The following lines of code are used to get references to the various error messages that 
//will be displayed to the user in case of invalid input.
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
// The function below validates the name field. It checks if the field is empty or 
//if the name entered is not in the correct format, which is 
//first name followed by last name.
function validateName() {
var name = document.getElementById('contact-name').value;
if(name.length == 0)
{
	nameError.innerHTML = 'Name is required';
	return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
{
	nameError.innerHTML = 'Write full name';
	return false;
}
nameError.innerHTML = 'valid';
return true;
}

// The function below validates the phone number field. It checks if the field is empty or 
//if the phone number entered is not in the correct format, which is a 10-digit number.
function validatePhone() 
{
    var phone = document.getElementById('contact-phone').value;
if(phone.length == 0)
{
	phoneError.innerHTML = 'Phone no is required';
	return false;
}
if(phone.length !== 10)
{
	phoneError.innerHTML = 'Phone no should be 10 digits';
	return false;  
}
if(!phone.match(/^[0-9]{10}$/))
{
	phoneError.innerHTML = 'Only digits please.';
	return false;
}
	phoneError.innerHTML = 'valid';
	return true;
}

// The function below validates the email field. It checks if the field is empty or if 
//the email address entered is not in the correct format, which is name@domain.com.
function validateEmail() 
{
    var email = document.getElementById('contact-email').value;
if(email.length == 0)
{
	emailError.innerHTML = 'Email is required';
	return false;
}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
{
	emailError.innerHTML = 'Email invalid'
	return false;
}
	emailError.innerHTML = 'valid';
	return true;
}

// The function below validates the message field. 
//It checks if the field has at least 30 characters
function validateMessage()
{
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
if(left>0)
{
	messageError.innerHTML = left + 'more characters required';
	return false;
}
	messageError.innerHTML = 'valid';
	return true;
}

// The function below is called when the form is submitted. It calls all the validation
// functions and checks if all of them return true. If not, it displays an error message 
//to the user
function validateform()
{
if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage())
{
	submitError.style.display = 'block';
	submitError.innerHTML = 'Please fix the error to submit';
	setTimeout(function(){submitError.style.display = 'none';}, 3000);
	return false;
}
else
{
    alert("Thank you ")
}
}