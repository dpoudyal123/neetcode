/*
    Multiple pointers
    Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on certain condition.
    Very efficient for solving problems with minimal space complexity as well.
    Example:
    1. Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or undefined if a pair does not exist.
    sumZero([-3, -2, -1, 0, 1, ,2, 3]) // [-3, 3]
    sumZero([-3, -2, -1, 0, 2, 4, 5])  // [-2,2]
    sumZero([-2, 0, 1, 3]) // undefined
    sumZero([1,2,3]) // undefined

    2. Write a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative
    numbers in the array, but it will always be stored.
    countUniqueValues([1, 1, 1, 2]) // 2
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7

*/

// Example 1 SOLUTION
// time complexity = O(n), space complexity = O(1)
function sumZero(arr) {
  const left = 0;
  const right = arr.left - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// Example 2 solution
function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

/*
  Explanation for example 2 solution:
  For example we have this array passed in [1, 1, 1, 2, 3, 3, 4]
  have a pointer i in first position, and j in next position shown below
   i
  [1, 1, 1, 2, 3, 3, 4]
      j
  now we compare them is i === j ? if same we will move j by one shown below but leave i where it is and compare again 
   i
  [1, 1, 1, 2, 3, 3, 4]
         j
  is i === j ? if same we move j by one again shown below:
   i
  [1, 1, 1, 2, 3, 3, 4]
            j
  now here i != j, now we move i by one 
      i
  [1, 1, 1, 2, 3, 3, 4]
            j
  and put what ever element j represents currently into where ever i is currently (where j is currently at i.e. 2) which will be like this:
      i
  [1, 2, 1, 2, 3, 3, 4]
            j
  now, i will be looking at 2 and move j forward by 1
      i
  [1, 2, 1, 2, 3, 3, 4]
               j
  now 2 !== 3, so we move i by one again
         i
  [1, 2, 1, 2, 3, 3, 4]
               j
  and again put what ever element j represents currently into where ever i is currnelty (where j is currently at i.e. 3) which will be like this:
         i
  [1, 2, 3, 2, 3, 3, 4]
               j
  again, i will be looking at 3 and move j forward by 1
         i
  [1, 2, 3, 2, 3, 3, 4]
                  j
  3 === 3, so just move j by one
         i
  [1, 2, 3, 2, 3, 3, 4]
                     j
  again, 3 !== 4, we move i by one and j is already at the end of array 
            i
  [1, 2, 3, 2, 3, 3, 4]
                     j
  and again put what ever element j represents currently into where ever i is currently (where j is currently at i.e. 4) which will be like this:
            i
  [1, 2, 3, 4, 3, 3, 4]
                     j
  now we are looking at current index of i which in this case is 3 and by adding 1 to the current index we will get 
  the total numbers of unique elements in that array
*/

/*
  Write a function called avergaePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the
  average of the pair equals the target average. There may be more than one pair that matches the average target.
  averagePair([1, 2, 3], 2.5) // true
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
  averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
  averagePair([], 4) // false
*/

function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === target) return true;
    else if (avg < target) start++;
    else end--;
  }
  return false;
}

/*
  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string from a subsequence of the
  characters in the second string. In other words, the function show check whether the characters in the first string apper somewhere in the second 
  string, without their order changing
  Eg:
    isSubsequence('hello' ,'hello world') // true
    isSubsequence('sing' ,'string') // true
    isSubsequence('abc' ,'abracadabra') // true
    isSubsequence('abc' ,'acb') // false
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

/*
  Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

  Eg: 
    pairWithTargetSum([1, 2, 3, 4, 6] ,6) // [1,3] because numbers at index 1 and 3 add up to 6: 2+4
    pairWithTargetSum([2, 5, 9, 11] ,11) // []
*/

function pairWithTargetSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let sum = 0;

  while (start < end) {
    sum = arr[start] + arr[end];
    if (sum === target) return [start, end];
    else if (sum > target) end--;
    else start++;
  }
  return [-1, -1];
}
