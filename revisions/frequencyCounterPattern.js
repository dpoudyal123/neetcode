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

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let str1Ele of str1) {
    if (lookup[str1Ele]) {
      lookup[str1Ele] += 1;
    } else {
      lookup[str1Ele] = 1;
    }
  }
  for (let str2Ele of str2) {
    if (!lookup[str2Ele]) {
      return false;
    } else {
      lookup[str2Ele] -= 1;
    }
    return true;
  }
}

/*
  write a function called same, which accepts two arrays. The function should return true if every value in the first array has it's corresponding value squared in the second array. The freq of 
  values must be the same.
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const lookup = {};
  const lookup2 = {};

  for (let arr1Ele of arr1) {
    if (lookup[arr1Ele]) {
      lookup[arr1Ele] += 1;
    } else {
      lookup[arr1Ele] = 1;
    }
  }
  for (let arr2Ele of arr2) {
    if (lookup2[arr2Ele]) {
      lookup2[arr2Ele] += 1;
    } else {
      lookup2[arr2Ele] = 1;
    }
  }
  for (let key in lookup) {
    if (!(key ** 2 in lookup2)) {
      return false;
    }
    if (lookup2[key ** 2] !== lookup[key]) {
      return false;
    }
  }
  return true;
}

console.log(JSON.stringify(same([1, 2, 3, 2], [9, 1, 4, 4]), null, 4));
