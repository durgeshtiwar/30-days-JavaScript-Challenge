for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  console.log(i*5);
}

let i = 1;
let sum = 0;
while (i<=10) {
  sum += i;
  i = i+1;
}
console.log("Sum = " + sum);
let i1 = 10;
while (i1>=1) {
  console.log(i1);
  i1 = i1-1;
}

let i2 = 1;
do {
  console.log(i2);
  i2=i2+1;
} while (i2<=5);
let num = 5;
let fact = 1;
do {
  fact = fact * num;
  num = num-1;
} while (num>=1);
console.log(fact);

for (let i = 1; i <= 5 ; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log("\n")
}

for (let i = 1; i <= 10; i++) {
  if (i==5)
    continue;
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i==7)
      break;
    console.log(i);
  }