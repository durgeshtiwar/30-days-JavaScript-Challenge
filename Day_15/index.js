//1
const outerFunc1 = () =>{
  let var1 = "Durgesh Tiwari";
  const innerFunc1 = () =>{
    return var1;
  }
  return innerFunc1;
}
const getFunc1 = outerFunc1();
console.log(getFunc1());
//2
const outerFunc2 = () =>{
  let counter = 0;
  const increment = () =>{
    return counter = counter + 5;
  }
  return increment;
}
const getFun2 = outerFunc2();
console.log(getFun2());

//3
const generateUniqueId = () =>{
  var id = 100 + Math.floor(Math.random()*100);
  console.log("Generated id is = "+id);
  const increment = () =>{
    return id = id + 5;
  }
  return increment;
}
const getFun3 = generateUniqueId();
console.log(getFun3());
//4
const outerFunc3 = () =>{
  let userName = "Shubham Tiwari";
  const innerFunc2 = () =>{
    return `Hello ${userName}.\nGood Morning`;
  }
  return innerFunc2; 
}
const getFun4 = outerFunc3();
console.log(getFun4());

//5
const outerFunc4 = () =>{
  createClosur = (i) =>{
    return("The index value is "+i);
  };
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr[i] = createClosur(i);
  }
  return arr;
}
console.log(outerFunc4());
//6
const function_Simple_Module = () =>{
  let items = [];
  return {
    addItems : (item) =>{
      items.push(item);
    },
    removeItems : (item) =>{
       items  = items.filter((data)=>{
        return data!=item;
      });
    },
    listItems : () =>{
      return items;
    }
  }
}
const getFun5 = function_Simple_Module();
getFun5.addItems("Durgesh Tiwari");
getFun5.addItems("Shubham Tiwari");
getFun5.addItems("Aditya Tiwari");
getFun5.addItems("Lavlesh Tiwari");
console.log(getFun5.listItems());
getFun5.removeItems("Shubham Tiwari");
console.log(getFun5.listItems());

//7
function salutation() { 
	let name = 'Durgesh'; 

	function greet() { 
		console.log(`Hello ${name}!`); 
	} 
	return greet; 
} 

let wish = salutation(); 
wish();
//8
const calculateFact = (num) =>{
  if (num === 1) {
    return 1;
  }
  return num * calculateFact(num-1);
}
console.log(calculateFact(5));