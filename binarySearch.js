var arr = [1, 5, 13, 18, 33, 42, 50];

function binarySeacrh(n) {
  var start = 0,
    end = arr.length - 1;
  var mid,
    found = 0;
  while (start <= end) {
    mid = (start + end) / 2;
    if (n > arr[mid]) start = mid + 1;
    else if (n < arr[mid]) end = mid - 1;
    else {
      found = 1;
      console.log("Found!");
      break;
    }
  }
  if (found == 0) console.log("Not Found!");
}

binarySeacrh(13);
binarySeacrh(20);
