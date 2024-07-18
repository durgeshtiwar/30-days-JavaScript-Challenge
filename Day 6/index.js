//1,2,3,4,5,6
let arr1 = [1,2,3,4,5];
console.log(arr1);
console.log("First element of array is "+arr1[0]);
console.log("Last element of array is "+arr1[4]);
arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(10);
console.log(arr1);

//7
let newArr1 = [];
arr1.map((data) =>{
  newArr1.push(data*2);
});
console.log(newArr1);
//8
let array2 = [3,6,9,12,15,18,20,62,33];
let newArray2 = [];
array2.filter((data)=>{
  if (data%2 === 0) {
    newArray2.push(data);
  }
})
console.log(newArray2);
//9
let totalSum = arr1.reduce((sum,num)=>{
  return sum+num;
});
console.log(totalSum);