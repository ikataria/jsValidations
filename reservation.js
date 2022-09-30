"use strict";

$(document).ready( () => {
	document.getElementById("pickup_date").focus();
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	$("#reservation_form").submit((ele) => {
		let validData = true;
		
		/*** Validation for pickup date field ***/ 
		const pickupDate = $("#pickup_date").val().trim();
		const dateArr = pickupDate.split('/');
		if(dateArr.length != 3){
			document.getElementById("pickupDate").textContent = "This field is required.";
			validData = false;
		}

		/*** Validation for days field ***/
		const days = $("#days").val().trim();
		if(!days || isNaN(days)){
			document.getElementById("daysCount").textContent = "Must be numeric.";
			validData = false;
		}

		/*** Validation for name field ***/
		const name = $('#name').val().trim();
		if(!name || !isNaN(name)){
			document.getElementById("nameSpan").textContent = "This field is required.";
			validData = false;
		}
		
		/*** Validation for email field ***/
		const email = $('#email').val().trim();
		if(!email || !emailPattern.test(email)){
			document.getElementById("emailSpan").textContent = "Must be a valid email address.";
			validData = false;
		}

		/*** Validation for phone field ***/
		const phone = $('#phone').val().trim();
		if(!phone || isNaN(phone) || (phone.length < 10 || phone.length > 10)){
			document.getElementById("phoneSpan").textContent = "This field is required.";
			validData = false;
		}

		if(!validData) ele.preventDefault();

	})	
});