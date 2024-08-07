/*
    Sliding window pattern:
    This pattern involves creating a window which can either be an array or number from one position to another.
    Depending on a certain condition, the window will either increase or close (and a new window is created)
    Very useful for keeping track of a subset of data in an array/string etc.

    Example:
    Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function
    should calculate the maximum sum of n consecutive elements in the array.

    maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
    maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) //17
    maxSubarraySum([], 4) // 0
*/

// Brute force: time complexity = O(n^2)

function maxSubarraySum1(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Same problem using sliding window:
// time complexity = O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    const x = arr[i - num];
    tempSum = tempSum - x + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// sliding window problem 2:
/*
    Given an array of positive numbers and a positive number 'S', find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. 
    Return 0 if no such subarray exists.

    Example 1:
    Input: [2,1,5,2,3,2], S = 7
    Output: 2
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [5,2]

    Example 2:
    Input: [2,1,5,2,8], S = 8
    Output: 1
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

    Example 3:
    Input: [3,4,1,1,6], S = 8
    Output: 3
    Explanation: Smallest subarray with a sum greater than or equal to '8' are [3,4,1] or [1,1,6]

*/

function minimumSubArrayLength(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < nums.length) {
    // if current window does not add up to the given sum then, move the window to the right

    if (total < sum && end < nums.length) {
      total = total + nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then we can shrink the window
    else if (total >= sum) {
      minLength = Math.min(minLength, end - start);
      total -= nums[start];
      start++;
    }
    // if current total is less than required total but we reach the end, then we will need to take care of this or else we will be in infinite loop
    else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

// sliding window problem 3:
/*
  Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
  findLongestSubstring('') //0
  findLongestSubstring('rithmschool') // 7
  findLongestSubstring('thisisawesome') // 6
*/

function findLongestSubstring(str) {
  let widowStart = 0;
  let maxLength = 0;
  const seen = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];

    if (seen[char]) {
      widowStart = Math.max(widowStart, seen[char] + 1);
    }
    seen[char] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - widowStart + 1);
  }
  return maxLength;
}

function minimumSubArrayLength2(arr, target) {
  const maxItCanBe = arr.length + 1;
  let windowStart = 0;
  let windowEnd = 0;
  let min = maxItCanBe;
  let total = 0;

  while (windowStart < arr.length) {
    if (total < target) {
      total += arr[windowEnd];
      windowEnd += 1;
    } else if (total >= target) {
      min = Math.min(min, windowEnd - windowStart);
      total -= arr[windowStart];
      windowStart += 1;
    } else {
      break;
    }
  }
  return min === maxItCanBe ? 0 : min;
}

/* 
  You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as 
  many fruits as possible to be placed in the given baskets.

  You will be given an array of characters where each characters represents a fruit tree. The farm has following restrictions:

  1. Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
  2. You can start with any tree, but you can't skip a tree once you have started.
  3. You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

  Write a function to return the maximum number of fruits in both baskets.

  Example 1: 
  Input: Fruit: ['A', 'B', 'C', 'A', 'C']
  Output: 3
  Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

  Example 2: 
  Input: Fruit: ['A', 'B', 'C', 'B', 'B' , 'C']
  Output: 5
  Explanation: We can put 3 'B' in one basket and 2 'C' in the other from the subarray ['B', 'C', 'B', 'B', 'C']
*/

function fruitIntoBasket(arr) {
  let windowStart = 0;
  let basket = {};
  let max = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const currentFruit = arr[windowEnd];
    if (!basket[currentFruit]) {
      basket[currentFruit] = 1;
    } else {
      basket[currentFruit] += 1;
    }

    while (Object.keys(basket).length > 2) {
      const firstFruitWePicked = arr[windowStart];
      basket[firstFruitWePicked] -= 1;
      if (basket[firstFruitWePicked] === 0) {
        delete basket[firstFruitWePicked];
      }
      windowStart += 1;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
}

console.log(JSON.stringify(fruitIntoBasket('abcccac'), null, 4));

// function fruitIntoBasket2(arr) {
//   let windowStart = 0;
//   let basket = {};
//   let max = 0;

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     const currentFruit = arr[windowEnd];
//     basket[currentFruit] = windowEnd;

//     if (Object.keys(basket).length > 2) {
//       delete basket[arr[windowStart]];
//       windowStart = windowEnd - 1;
//     }
//   }
// }
