//1,2,3,4,5,6,7,8
class Person
{
  constructor(name,age)
  {
    this.name = name;
    this.age = age;
  }
  getterMethod()
  {
    return `My Name is ${this.name}`;
  }
  setterMethod(newName)
  {
    this.name = newName;
  }
  static staticGreeting(name,age)
  {
    return `hello ${name} goood morning.\nAre ${age} year old ? this is your generic greeting method.`;
  }
  greeting()
  {
    return `hello ${this.name} goood morning.\nAre ${this.age} year old ?`;
  }
  update(newage)
  {
    this.age = newage;
  }
}
class Student extends Person
{
  static noOfStudent = 250;
  constructor(name,age,studentId)
  {
    super(name,age);
    this.studentId = studentId;
    this.constructor.noOfStudent = this.constructor.noOfStudent + 5;

  }
  newMethod()
  {
    return `Student Id is = ${this.studentId}`;
  }
  greeting()
  {
    return `hello ${this.name} goood morning.\nAre ${this.age} year old ? and your student is ${this.studentId}`;
  }
}
const obj1 = new Person("Durgesh Tiwari", 21);
console.log(obj1.greeting());
obj1.update(25);
console.log(obj1.greeting());
const obj2 = new Student("Durgesh",21,101);
console.log(obj2.newMethod());
console.log(obj2.greeting());
console.log(Person.staticGreeting("Shubham", 22));
console.log("Total no.of Students is = "+ Student.noOfStudent);
console.log(obj1.getterMethod());
obj1.setterMethod("Shubham Tiwari");
console.log(obj1.getterMethod());

//9,10
class Account 
{
  #balance = 156580;
  deposite(amount)
  {
    this.#balance = this.#balance + amount;
    return `After Deposite your cuurent Balence is = ${this.#balance}`;
  }
  withdraw(amount)
  {
    this.#balance = this.#balance - amount;
    return `After Withdraw your cuurent Balence is = ${this.#balance}`;
  }
}
const obj3 = new Account();
console.log(obj3.deposite(420));
console.log(obj3.withdraw(1000));
//confirm.log(#balance);  can not access