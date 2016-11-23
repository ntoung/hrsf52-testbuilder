// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  if (cardNumber.length == 14 && (cardNumber.startsWith('38') || cardNumber.startsWith('39'))) {
  	return "Diner\'s Club";
  }

  if (cardNumber.length == 15 && (cardNumber.startsWith('34') || cardNumber.startsWith('37'))) {
  	return "American Express";
  }

  if ((cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19) && cardNumber.startsWith('4')) {
  	return "Visa";
  }

  if (cardNumber.length == 16 && ((cardNumber.startsWith('51') || cardNumber.startsWith('52') ||
	cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')))) {
  	return "MasterCard";
  }

  if ((cardNumber.length == 16 || cardNumber.length == 19) &&
	(cardNumber.substring(0,3) >= 644 && cardNumber.substring(0,3) <= 649 || 
	cardNumber.startsWith('6011') || cardNumber.startsWith('65'))) {
  	return "Discover";
  }

  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  if ((cardNumber.length >= 12 || cardNumber.length <= 19) &&
		(cardNumber.substring(0,4) == 5018 || 
		 cardNumber.substring(0,3) <= 5020 ||
		 cardNumber.substring(0,3) <= 5038 ||	
		 cardNumber.substring(0,3) <= 6304 )) {
  	return "Maestro";
  }

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


// 38345678901234 (Diner's Club)
// 39345678901234 (Diner's Club)
// 343456789012345 (American Express)
// 373456789012345 (American Express)
// 4123456789012 (Visa)
// 4123456789012345 (Visa)
// 4123456789012345678 (Visa)
// 5112345678901234 (MasterCard)
// 5212345678901234 (MasterCard)
// 5212345678901234 (MasterCard)
// 5412345678901234 (MasterCard)
// 5512345678901234 (MasterCard)