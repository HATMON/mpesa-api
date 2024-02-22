<!DOCTYPE html>
<html>
<head>
	<title>M-Pesa Payment Gateway</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<div class="container">
		<h1>M-Pesa Payment Gateway</h1>
		<form id="payment-form">
			<label for="phone">Enter your phone number:</label>
			<input type="text" id="phone" name="phone" placeholder="e.g. 2547xxxxxxxx">
			<br>
			<label for="amount">Enter amount to pay:</label>
			<input type="number" id="amount" name="amount" placeholder="e.g. 100">
			<br>
			<button type="submit">Pay with M-Pesa</button>
		</form>
	</div>
	<script src="script.js"></script>
</body>
</html>