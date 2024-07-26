//1
let elementtext = document.getElementById("chai");
elementtext.innerText = "Chai aur Code with JavaScript Challengs";
//2
let elementcolor = document.getElementsByClassName("dom");
elementcolor[0].style.backgroundColor = "Green";

//3
let newDiv = document.createElement("div");
newDiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
document.body.appendChild(newDiv);
//4
let newList = document.createElement("li");
let uList =  ["JavaScript", "Python", "C++", "Java"];
let list = document.getElementById("list");
for (let i = 0; i < uList.length; i++) {
  let li = document.createElement("li");
  li.innerText = uList[i];
  list.appendChild(li);
}
newList.appendChild(list);
document.body.appendChild(newList);

//5,6
document.body.removeChild(elementtext);
document.body.removeChild(newList);

//7,8
let image = document.getElementById("img");
image.setAttribute("src","./New Profile.jpg")

//9
let paragraph = document.getElementById("para");
let button = document.getElementById("btn");
button.addEventListener("click",()=>
  {
    paragraph.innerText = "It is used to add an attribute and provide it with a value to a specific element. If the attribute already exists, it just modifies or sets its value. "
  })
image.addEventListener("mouseover",()=>
{
  image.style.borderColor = "blue";
})
image.addEventListener("mouseout",()=>
  {
    image.style.borderColor = "black";
  })