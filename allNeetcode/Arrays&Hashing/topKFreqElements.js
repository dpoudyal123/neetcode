/*
  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
  
  Example 1:
  Input nums = [1,1,1,2,2,3], k = 2
  Output:[1,2]

  Input nums = [1], k = 1
  Output: [1]
*/

function topKFrequent(nums, k) {
  const map = new Map();
  for (let i of nums) {
    const count = map.get(i) || 0;
    map.set(i, count + 1);
  }
  let i = 0;
  result = [];
  values = [...map.entries()].sort((a, b) => b[1] - a[1]);
  while (i < k) {
    result.push(values[i][0]);
    i++;
  }
  return result;
}
// using this way time comp = O(nlogn) and space comp = O(n)

/*
  Another way is to solve using bucket sort time comp = O(n) and space = O(n)
*/
function topKFrequent2(nums, k) {
  let map = new Map();
  let bucket = [],
    result = [];
  for (let i of nums) {
    let count = map.get(i) || 0;
    map.set(i, count + 1);
  }
  for (let [ele, freq] of map) {
    bucket[freq] = bucket[freq] ? bucket[freq].add(ele) : new Set().add(ele);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length >= k) break;
  }
  return result;
}

function topKFrequent3(nums, k) {
  // same as topKFrequent2 but without using new Set()
  let map = new Map();
  let bucket = [],
    result = [];
  for (let i of nums) {
    let count = map.get(i) || 0;
    map.set(i, count + 1);
  }
  for (let [ele, freq] of map) {
    if (!bucket[freq]) {
      bucket[freq] = [];
    }
    bucket[freq].push(ele);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length >= k) break;
  }
  return result;
}

// console.log(JSON.stringify(topKFrequent2([1, 1, 1, 2, 2, 3], 2), null, 4));
console.log(JSON.stringify(topKFrequent3([1, 2], 2), null, 4));
