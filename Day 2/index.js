let num_1 = 342;
let num_2 = 7;
console.log(num_1+num_2);
console.log(num_1-num_2);
console.log(num_1*num_2);
console.log(num_1/num_2);
console.log(num_1%num_2);

let num_3 = 125;
console.log(num_3 += 5);
console.log(num_3 -= 5);

console.log(num_1>num_2);
console.log(num_1<num_2);
console.log(num_1>=num_1);
console.log(num_1<=num_2);

console.log(num_3 == "125");
console.log(num_3 === "125");

if (num_1>num_2 && num_1>=num_1) {
  console.log("&& Operator Checked");
}else{
  console.log("&& Operator not Checked");
}
if (num_1<num_2 || num_1<=num_2) {
  console.log("|| Operator Checked");
}else{
  console.log("|| Operator not Checked");
}
if (!false) {
  console.log("! Operator Checked");
}

(num_1>num_2) ? console.log("Ternary Operator Checked") : console.log("Ternary Operator not Checked");
(num_1<num_2) ? console.log("Ternary Operator Checked") : console.log("Ternary Operator not Checked");