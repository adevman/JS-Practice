function check(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var sortStr1 = sorts(str1);
  var sortStr2 = sorts(str2);

  return sortStr1 === sortStr2;
}

function sorts(str) {
  var arr = str.split('');
  var tmp;
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr.join('');
}


console.log(check("dog", "god"));
console.log(check("foo", "bar"));
console.log(check("foo", "fooo"));
