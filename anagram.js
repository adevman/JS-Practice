function check(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var sortStr1 = str1.split("").sort().join("");
  var sortStr2 = str2.split("").sort().join("");

  return sortStr1 === sortStr2;
}

console.log(check("dog", "god"));
console.log(check("foo", "bar"));
console.log(check("foo", "fooo"));
