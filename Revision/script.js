// let message = document.querySelector(".message");
// message.innerText = message.innerText + ' from Apna College students"';
// console.log(message.innerText);

let box = document.querySelectorAll(".box");
let number = 1;
for (const element of box) {
  element.innerText = `Unique_${number}`;
  number++;
}