function fact(a){
var fac = 1;
for (var i = 1; i <= a; i++) {
  fac = fac * i;
}
return fac;
}

console.log(`Factorial is:`, fact(5));
