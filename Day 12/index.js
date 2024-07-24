//1
try {
  console.alert("Print Chai aur Code");
} catch (error) {
  console.log(error);
}
//2.3
const divide = (num1,num2) =>
{
  try {
    if (num2 === 0) {
      throw("Can Not Divide By Zero");
    }
    console.log( num1/num2 );
  } catch (error) {
    console.log(error);
  }
  finally{
    console.log("This is finally block and execute regardingless of try and catch block");
  }
} 
divide(5,0);

//4
// class CheckCondition extends Error { 
// 	constructor(msg) { 
// 		super(msg); 
// 	} 
// } 

// try { 
// 	if (10 != 20) 
// 		throw new CheckCondition("10 is not equal to 20"); 
// } 
// catch (err) { 
// 	console.error(err); 
// }
//5
// class CheckCondition extends Error { 
// 	constructor(msg) { 
// 		super(msg); 
// 	} 
// } 

// try { 
//   let str = prompt("Enter a string")
// 	if (str === '') 
// 		throw new CheckCondition("Null String"); 
//   console.log("String Enter by user "+str);
// } 
// catch (err) { 
// 	console.error(err); 
// }

//6
let promise = new Promise((resolve, reject) => {
  reject("Promise was rejected very strictly");
});
promise.catch(
  error => console.log(error)
)
//7,9
// const fetchData = async() =>{
//   try {
//     const response = await fetch("http://...com/data"/*"https://dummyjson.com/posts/1"*/);
//     const data = await response.json();
//     console.log(data);
    
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// fetchData();

//8
let newPromise = new Promise((resolve, reject) => {
  const response = fetch("http://...com/data"/*"https://dummyjson.com/posts/1"*/);
  reject("Invalid URL");
})
newPromise.catch((error)=>{
  console.log(error);
})