//1
function checkNumber(num) {
  if (num%2 === 0) {
    console.log("Gine number is Even");
  }
  else
  {
    console.log("Given number is Odd");
  }
}
checkNumber(50);
//2
function squre(num) {
  return num*num;
}
let squreOfNum = squre(7);
console.log(`Squre of given no is = ${squreOfNum}`);

//3
let maximumNum = function (num1,num2) {
  if (num1>num2) {
    return num1;
  }
  else
  {
    return num2;
  }
}
console.log(maximumNum(45,96)+" is maximum from given no.");
//4
let fullStr = function (str1,str2)
{
  return str1+str2;
}
console.log(fullStr("chai","code"));

//5
const sum = (num1,num2) =>
{
  return num1+num2;
}
console.log("Sum is "+ sum(82,96));
//6
const checkString = (str) =>{
  const specialChar = /[^A-Za-z0-9]/;
  return specialChar.test(str);

}
console.log(checkString("@chaicode.com"));

//7
const products = (num1,num2 = 5) =>{
  return num1*num2;
}
console.log("Products of given no. is "+products(2));
//8
const person = (name,age = 21) =>
{
  let message = `Heyy ${name} good morning i hope your doing well.\nYour age is ${age}`;
  return message;
}
console.log(person("Durgesh Tiwari"));

//9
const func1 = (num1,num2) =>{
  return num1+num2;
}
const func2 = (func,num3) =>{
 console.log(func1(4,5));
 return num3 + func(2,3);
}
console.log(func2(func1,5));
//10
const func3 = (func4,func5,num) =>
{
  console.log(func4(4,5));
  func5(func4);
}
const func4 = (num1,num2) =>{
  return num1*num2;
}
const func5 = (func4) =>{
  console.log(`Products of given no. is = ${func4(4,5)}`)
}
func3(func4,func5,10);