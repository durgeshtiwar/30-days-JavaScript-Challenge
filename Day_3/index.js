let num_1 = 343;
if (num_1>0) {
  console.log("Given No. is Positive");
}else if (num_1<0) {
  console.log("Given No. is Negative");
} else {
  console.log("Given No. is Zero");
}
let personAge = 21;
if (personAge>=18) {
  console.log("Person are eligible to vote");
} else {
  console.log("Person are not eligible to vote");
}

let num_2 = 125;
let num_3 = 256;
let num_4 = 144;
if (num_2>num_3 && num_2>num_4) {
  console.log(num_2 + " is Greater");
}else
{
  if (num_3>num_4) {
    console.log(num_3 +" is Greater");
  }else
  {
    console.log(num_4 +" is Greater");
  }
}

let num_5 = 1;
switch (num_5) {
  case 1:
    console.log("Given day are sun");
    break;
  case 2:
    console.log("Given day are mon");
    break;
  case 3:
    console.log("Given day are tue");
    break;
  case 4:
    console.log("Given day are wen");
    break;
  case 5:
    console.log("Given day are thu");
    break;
  case 6:
    console.log("Given day are fri");
    break;
  case 7:
    console.log("Given day are sat");
    break;
  default:
    console.log("Invalid Input");
    break;
}
let score = 85;
switch (true) {
  case score>80:
    console.log("Grade A");
    break;
  case score>60:
    console.log("Grade B");
    break;
  case score>40:
    console.log("Grade C");
    break;
  case score>20:
    console.log("Grade D");
    break;
  case score>0:
    console.log("Grade f");
    break;
  default:
    console.log("Invalid Input");
    break;
}

let num_6 = 1428;
num_6%2 === 0 ? console.log("Given no. is Even") : console.log("Given no.is Odd");

let year = 2000;
if (year%100 === 0) {
  year%400 === 0 ? console.log("Given Year is Leap Year"):console.log("Given Year is not a Leap Year");
} else
{
  year%4 === 0 ? console.log("Given Year is Leap Year"):console.log("Given Year is not a Leap Year");
}