// let message = document.querySelector(".message");
// message.innerText = message.innerText + ' from Apna College students"';
// console.log(message.innerText);

// let box = document.querySelectorAll(".box");
// let number = 1;
// for (const element of box) {
//   element.innerText = `Unique_${number}`;
//   number++;
// }

// let btn = document.createElement("button");
// btn.innerHTML = "Click me";
// let addbtn = document.querySelector("body").prepend(btn);
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// let para = document.createElement("p");
// para.innerText = "My Name is Durgesh Tiwari";
// document.querySelector("body").prepend(para);
// para.classList.add("new_class");


let btn = document.querySelector(".toggle-btn");
btn.addEventListener("click",(e)=>{
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }
})