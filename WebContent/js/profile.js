/**
 * This method is used to clear error message from the screen
 */
function clearErrorMessage() {
	document.getElementById("nameError").innerHTML = "";
	document.getElementById("emailError").innerHTML = "";
	document.getElementById("mobileError").innerHTML = "";

}

function validateForm() {
	var name = document.profileform.name.value;
	if (name.length == 0) {
		document.getElementById("nameError").innerHTML = "Number cannot be empty."
		document.profileform.name.focus();
		return;
	}

	var email = document.profileform.email.value;
	if (email.length == 0) {
		document.getElementById("emailError").innerHTML = "Email cannot be empty."
		document.profileform.email.focus();
		return;
	}

	var mobile = document.profileform.mobile.value;
	if (mobile.length == 0) {
		document.getElementById("mobileError").innerHTML = "Mobile cannot be empty."
		document.profileform.mobile.focus();
		return;
	} else {
		var phoneno = /^\d{10}$/;
		if (!mobile.match(phoneno)) {
			document.getElementById("mobileError").innerHTML = "Mobile is not valid.";
			document.profileform.mobile.focus();
			return;
		}
	}
	//class Profile{String name;String email} //Profile p=new Profile();
	var profile = {};
	profile.name = name;
	profile.email = email;
	profile.mobile = mobile;
	console.log(profile);

} //end of validateForm method