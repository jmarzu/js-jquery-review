// isPalindrome(string)
// Checks if a string is a palindrome, and returns true or false

// Example Input

// var str = 'racecar';

// Example Output

// false


function isPalindrome(string) {
  var newString = string.split('');;
  var arr = newString.reverse();
  var stringCheck = arr.join('');
  if (stringCheck === string) {
    console.log('Yeah buddy, those are Palindromes!');
  } else {
    console.log('Those are not Palindromes!');
  };
};

isPalindrome('racecar');
