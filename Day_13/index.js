import {addNumbers,person} from "./module1.js";
import* as newObj from "./module1.js";
import square from "./module2.js";
const _ = require("lodash");
//1,2,3,4,5
console.log("Sum of numbers is = "+addNumbers(5,6));
console.log(person.Work("Code"));
console.log(person);
console.log("Squre is = "+square(5));
console.log(typeof newObj);
console.log(newObj.addNumbers(10,20));
console.log(newObj.person);
console.log(newObj.myPinCode);

//6
let newFunc = _.after(3, function () {
    console.log('Saved');
});
newFunc();
newFunc();
newFunc();