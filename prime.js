var a = 17;
var count = 0;

for (var i = 2; i < a / 2; i++) {
  if (a % i == 0) count++;
}

if (count == 0) console.log(`${a} is a prime number`);
else console.log(`${a} is not a prime number`);
