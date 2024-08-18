/*
  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
  
  Example 1:
  Input nums = [1,1,1,2,2,3], k = 2
  Output:[1,2]

  Input nums = [1], k = 1
  Output: [1]
*/

function topKFrequent(nums, k) {
  if (nums.length === 1) {
    return nums;
  }
  const obj = nums.reduce((agg, num) => {
    agg[num] = agg[num] + 1 || 1;
    return agg;
  }, {});
  return Object.keys(obj).reduce((agg, key) => {
    const value = obj[key];
    if (value > 1 && agg.length <= k) {
      agg.push(key);
    }
    return agg;
  }, []);
}

console.log(JSON.stringify(topKFrequent([1, 1, 1, 2, 2, 3], 2), null, 4));
