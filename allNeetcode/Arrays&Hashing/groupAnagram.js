/*
  Given an array of strings strs, group the anagram together. You can return the answer in any order.
  
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all
  original letters exactly once.

  Example 1:
  Input strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
  Output = [['bat'],['nat', tan'], ['ate', 'eat', 'tea']]

  Input = ['']
  Output = [['']]
  
  Input = ['a']
  Output = [['a']]
*/

function groupAnagram(strs) {
  const grouped = new Map();
  for (let str of strs) {
    const splitted = str.split('');
    const sorted = splitted.sort();
    const joined = sorted.join('');
    if (!grouped.has(joined)) {
      grouped.set(joined, []);
    }
    grouped.get(joined).push(str);
  }
  const result = [];
  grouped.forEach((element) => {
    result.push(element);
  });
  console.log(JSON.stringify(result, null, 4));
  return result;
}
groupAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
