function isSubsequence(s, t) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  if (p1 === s.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isSubsequence('axc', 'ahbgdc'));
