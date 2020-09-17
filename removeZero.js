var arr = [4, 0, 25, 2, 0, 65, 0, 48, 8];
console.log("Array before:", arr);
var res = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] != 0) res.push(arr[i]);
}

arr = res;

console.log(arr);
