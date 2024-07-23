//1
// console.log("Start processing");
// let promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolve");
//   }, 2000);
// })
// promiseOne.then((successMessage)=>{
//   console.log(successMessage);
// }).
// catch((errorMessage)=>{
//   console.log(errorMessage);
// })
//2
// let promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promiss Rejected");
//   }, 2000);
// })
// promiseTwo.then((successMessage)=>{
//   console.log(successMessage);
// }).catch((errorMessage)=>{
//   console.log(errorMessage);
// });

//3
// let promiseThree = new Promise((resolve, reject) => {
//   resolve("Hello promise chaining is decleared here.");
// })
// promiseThree.then((successMessage)=>{
//   console.log(successMessage);
//   return new Promise((resolve, reject) => {
//     resolve("This is the second chaining of promise chaining resolve");
//   }).
//   then((successMessage)=>
//   {
//     console.log(successMessage);
//     return new Promise((resolve, reject) => {
//       reject("Promise Rejected here");
//     }).catch((errorMessage)=>{console.log(errorMessage)})
//   })
// })

//4
// function resolveAfter2Second()
// {
//   console.log("Start slow Promise");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("slow");
//       console.log("slow Promise  is done");
//     }, 2000);
//   });
// }
// function resolvAfter1Second() {
//   console.log("Start fast Promise");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("fast");
//       console.log("fast promise is done");
//     }, 1000);
//   });
// }

// async function sequentialStart() {
//   console.log("== sequentialStart starts ==");
//   const slow = resolveAfter2Second();
//   console.log(await slow);
//   const fast = resolvAfter1Second();
//   console.log(await fast);
//   console.log("== sequentialStart done ==");

// }
// sequentialStart();
//5
// function rejected_promise() { 
//   return new Promise((resolve, reject) => {
//     reject(new Error( 
//       "This promise is Rejected...")); 
//   });
// }     
// async function display_Rejected()
// {
//   try {
//     await rejected_promise();
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// display_Rejected();

//6
// let promise = new Promise((resolve, reject) => {
//   const response = fetch('https://dummyjson.com/posts/1');
//   resolve(response);
// })
// promise.then((response)=>{
//   return response.json();
// }).then((response)=>{
// console.log(response);
// })
//7
// async function request(){
//   const response = await fetch('https://dummyjson.com/posts/1');
//   const something = await response.json();
//   console.log(something);
// }
// request();

//9
// const timeOut = (t) =>
// {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Promise Completed in ${t} second`);
//     }, t);
//   })
// }
// const durations = [1000,2000,3000];
// const promise = [];
// durations.map((duration)=>{
// promise.push(timeOut(duration));
// })
// console.log(promise);
// Promise.all(promise).then(Response=>console.log(Response));
//10
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});