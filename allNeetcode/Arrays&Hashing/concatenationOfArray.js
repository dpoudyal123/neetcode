function concatenationOfArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length * 3; i++) {
    let y = i % arr.length;
    result.push(arr[y]);
  }
  return result;
}

// console.log(concatenationOfArray([1, 2, 1, 6], 2));
