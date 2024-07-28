//1
const calculateFact = (num) =>{
  if (num == 1) {
    return 1;
  }
  return num * calculateFact(num-1);
}
console.log("Factorial Of given no. is = " + calculateFact(5));
console.log("Factorial Of given no. is = " + calculateFact(6));
console.log("Factorial Of given no. is = " + calculateFact(7));
//2
const calculateFibonacci = (num) =>{
  if (num > 2) {
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
  }
  return 1;
}
console.log(calculateFibonacci(5));
console.log(calculateFibonacci(6));
console.log(calculateFibonacci(7));
console.log(calculateFibonacci(8));

//3
// let arr = [2,5,6,3,9,8,5,1];
// const calculateSum = (newArr) =>{
//   if (newArr.length > 1) {
//     return newArr.pop() + calculateSum(newArr);
//   }
//   return arr[0];
// }
// console.log(calculateSum(arr));
//4
const findMax = (newArr) =>{
  if (newArr.length === 1) {
   return newArr[0];
  }
  let rest = findMax(newArr.slice(1));
  return newArr[0] > rest ? newArr[0] : rest ;
}
let arr = [2,5,6,3,9,8,5,1];
console.log(findMax(arr));
 
//5,6
const reversString = (str) => {
  if (str.length > 1) {
    let restStr = str.slice(0,length - 1);
    return str.slice(str.length-1) + reversString(restStr);
  }
  return str[0];
}
let mystring = "DurruD";
let reversStr = reversString(mystring);
console.log(reversStr);
if (mystring === reversStr) {
  console.log("Given String is palindrome");
}
else{
  console.log("Given String is not palindrome");
}

//7
const searchNumber = (arr,num) => {
  const mid = Math.floor(arr.length / 2);
  if (arr[mid]>num) {
    let newArray = arr.slice(0,mid);
    return searchNumber(newArray,num);
  }
  if (arr[mid] < num) {
    let newArray = arr.slice(mid);
    return searchNumber(newArray,num);
  }
  if (arr[mid] === num) {
    return "Mil gya";
  }else{
    return "Nahi mila";
  }
}
let myArray = [1,3,5,6,8,9,10,15];
console.log(searchNumber(myArray,15));