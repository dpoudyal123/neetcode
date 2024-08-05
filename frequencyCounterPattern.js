/*
    Frequency conter: 
        This pattern uses objects or sets to collect values/frequency of values.
        This can often avoid the need for nested loops O(n^2) operations with array/strings.
        Example: 
            Anagram:
            Given two srtings, write a function to determinte if the second string is an anagram of the first.
            validAnagram('', '') // true
            validAnagram('aaz', 'zza') // false
*/

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let firstEle of first) {
    if (lookup[firstEle]) {
      lookup[firstEle] += 1;
    } else {
      lookup[firstEle] = 1;
    }
    console.log(lookup); // output: {a:3, n:1, g:1, r:1, m:1}
    /* 
          this if statements can also be written as two lines below
          lookup[firstEle] ? (lookup[firstEle] += 1) : (lookup[firstEle] = 1);
          lookup[firstEle] = ++lookup[firstEle] || 1; 
      */
  }
  for (let secondEle of second) {
    if (!lookup[secondEle]) {
      return false;
    } else {
      lookup[secondEle] -= 1;
    }
    return true;
  }
}
