//1
let button = document.querySelector(".btn");
let para = document.querySelector(".para");
button.addEventListener("click",()=>{
  para.innerText = "Random String Generator using JavaScript";
})
//2,3,4
let hideButton = document.querySelector(".hide-img-btn");
hideButton.addEventListener("dblclick",()=>{
  let img = document.querySelector(".img");
  let parents = img.parentNode;
  parents.removeChild(parents.childNodes[1]);
})
hideButton.addEventListener("mouseover",()=>{
hideButton.style.backgroundColor = 'red';
})
hideButton.addEventListener("mouseout",()=>{
  hideButton.style = "non";
})

//5,6
let input = document.querySelector(".input");
let keyup = document.querySelector(".keyup");
input.addEventListener("keydown",(event)=>{
  console.log(event.code+" Pressed");
})
input.addEventListener("keyup",(event)=>{
  keyup.textContent = `${event.target.value}`; 
})

//7,8
let form = document.querySelector("#form");
form.addEventListener("submit",(event)=>{  
  event.preventDefault();
  let textField = document.querySelector(".text-field");
  let cars = document.querySelector("#cars");
  let para = document.querySelector("#log");
  para.innerText = cars.value;
  console.log(textField.value);
})

//9,10
const customUI = document.createElement('ul');

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', () => {
        console.log('Responding')
    })
    customUI.appendChild(newElement);
}
document.body.appendChild(customUI);