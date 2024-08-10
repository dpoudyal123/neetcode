function replaceElements(arr) {
  // always rightMax will be -1
  // reverse iteration
  // new max = max(old, arr[i])

  rightMax = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const newMax = Math.max(rightMax, arr[i]);
    arr[i] = rightMax;
    rightMax = newMax;
  }
  return arr;
}

console.log(JSON.stringify(replaceElements([17, 18, 5, 4, 6, 1]), null, 4));
