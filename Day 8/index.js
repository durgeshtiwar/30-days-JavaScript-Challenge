//1,2
let personName = "Kashivishwanath";
let personAge = 45;
let introduction = `First Line : The Name is ${personName} and Age is ${personAge}.
Second Line : The Name is ${personName} and Age is ${personAge}.`;
console.log(introduction);

//3,4
const array1 = ["Computer Science", "Mechanical", "Civil", "Electric", "Electronics"];
const [first,last] = array1;
console.log(first);
console.log(last);
const book = {
  title: "JavaScript",
  author: "Brendan Eich",
  yeraOfPublish: 1995,
  price: 1500,
}
const{title,author} = book;
console.log(title);
console.log(author);

//5
const newBookArray = ["All Branch", ...array1];
console.log(newBookArray);
//6
const sum = (...data) =>
{
  let result = 0;
  for (const i of data) {
    result += i;
  }
  return result;
}
const result = sum(1,2,3,4,5);
console.log(result);