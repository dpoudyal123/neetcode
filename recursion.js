/* 
    Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of 
    Math.pow() - do not worry about negative base
    and exponent.
    // power(2, 0) // 1
    // power(2, 2) // 4
    // power(2, 4) // 16
*/

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

/* 
    Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g.
    factorial (4!) = 24 because 4*3*2*1 = 21
    // factorial(1)  //1
    // factorial(2)  //2
    // factorial(4)  //24
    // factorial(7)  // 5040
*/

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

/*
    Write a function called productOfArray which takes in an array of numbers and returns the product of them all
    productOfArray([1, 2, 3]) // 6
    productOfArray([1, 2, 3, 10]) // 60
    productOfArray([]) // 0
*/

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

/*
  Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the funciton
  recursiceRange(6) // 21
  recursiceRange(10) // 55
*/
function recursiceRange(num) {
  if (num === 0) return 0;
  return num + recursiceRange(num - 1);
}

/*
  Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that Fibonacci sequence is the sequence of whole numbers
  1,1,2,3,5,8, ... which stars with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers
  // fib(4) // 3
  // fib(10) // 55
  // fib(28) // 317811
  // fib(35) // 9227465]
*/

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/*
  Write a function called reverse which accepts a string and returns a new string in reverse.
  reverse('abc') // cba
  reverse('qwert) // trewq
*/

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

/*
  Write a recursive function called isPalindrome which returns true if the string passed to it is a palindorme. Otherwise it returns false
*/

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return true;
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

/*
  someRecursive.
  Write a recursive function called someRecursive which accepts array and a callback. The function returns true if a single value in the arrray returns true when passed to 
  the callback. Otherwise it returns false.
  
  Example of callback function to pass:
  const isOdd = val => val % 2 !== 0;
  someRecursive([1,2,3,4], isOdd) // true
  someRecursive([4, 6, 8], isOdd) // false

  someRecursive([1,2,10], val => val > 9) // true
  someRecursive([1,2,9], val => val === 10 ) // false
*/

function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}

/*
  Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
  flatten([1, 2, 3, [4, 5], [[6]]]) // [1,2,3,4,5,6]
  flatten([1, [2, 3], [4, 5], [[6]]]) // [1,2,3,4,5,6]
*/

function flatten(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
