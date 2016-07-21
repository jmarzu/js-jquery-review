// fib(n)
// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// Example Input

// var number = 7;

// Example Output

// 13


function fib(n) {
  console.log('yeah it worked');

  fibArray = [1, 1]
  for (var i = 2; i < n; i++) {
    number = fibArray[i-2] + fibArray[i-1];
    fibArray.push(number);
  }
  console.log(fibArray);
};

fib(7)




