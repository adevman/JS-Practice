var arr = [4, 25, 2, 65, 48, 8];
console.log("Array before sorting:", arr);

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j <= i; j++) {
    if (arr[i] < arr[j]) {
      var c = arr[i];
      arr[i] = arr[j];
      arr[j] = c;
    }
  }
}

console.log("Array after sorting:", arr);
