document.getElementById('payment-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var phone = document.getElementById('phone').value;
	var amount = document.getElementById('amount').value;

	// Initialize M-Pesa API
	var mpesa = new Mpesa({
		businessShortCode: '174379', // Replace with your M-Pesa Business Short Code
		passkey: 'bfcbd306a96e49eb8b9d8584e56950' // Replace with your M-Pesa Passkey
	});

	// Initialize payment
	mpesa.stkPush({
		amount: amount,
		phone: phone,
		shortCode: mpesa.businessShortCode,
		password: mpesa.generatePassword(phone, amount),
		callback: function(response) {
			console.log(response);

			if (response.ResponseCode == 0) {
				alert('Payment successful!');
			} else {
				alert('Payment failed. Please try again.');
			}
		}
	});
});