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
*/
