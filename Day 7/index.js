//1,2,3,4
const book = {
  title: "JavaScript",
  author: "Brendan Eich",
  yeraOfPublish: 1995,
  price: 1500,
}
console.log(book);
console.log(book.title);
console.log(book["author"]);

book["newMethod"] = () => {
  return `The Book Title's is ${book.title} and Author's is ${book.author}`;
}
console.log(book.newMethod());
book["updateNewMethod"] = (year) => {
  book.yeraOfPublish = year;
}
book.updateNewMethod(1996);
console.log(book);

//5
const library = {
  nameOfLibrary: "Digital Libray",
  nameOfStudent: ["Durgesh", "Aditya", "Lavlesh", "Roli", "Kishori"],
  nameOfDepartment: ["CSE","CE","ME","EEE","IT"],
  books: [
    {
      title: "C",
      author: "Dennis Ritchie",
      price: 1000,
    },
    {
      title: "C++",
      author: "Bjarne Stroustrup",
      price: 1500,
    },
    {
      title: "JavaScript",
      author: "Brenden Eich",
      price: 2000,
    },
    {
      title: "Python",
      author: "Guido van Rossum",
      price: 1500,
    }
  ],
}
console.log(library);
console.log(library.nameOfLibrary);
for (const item of library.books) {
  console.log(item.title);
}

//7
// book["thismethod"] = () =>{
//   return `The Book Title's is ${this.title} and Author's is ${this.yeraOfPublish}`;
// }
// console.log(book.thismethod());

//8
for (const key in library) {
  console.log(key);
}
//9
console.log(Object.keys(library));
console.log(Object.values(library));