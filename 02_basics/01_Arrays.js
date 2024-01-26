// Arrays

const Myarr=[0,1,2,3,4,5,6]
const myArr2=new Array(7,8,9,10)
console.log(Myarr[3]);

//       Array methods

// join methods 
const newArr =Myarr.join();
console.log(newArr);

//concat methods 
const allNumber= Myarr.concat(myArr2)
console.log(allNumber);

// slice 


const myn1=Myarr.slice(1,3);
console.log(myn1)
console.log("A",Myarr);

// splice 

const myn2=Myarr.splice(1,3)
console.log(myn2)
console.log("B",Myarr)

// shift 

Myarr.shift();
console.log(Myarr);

// unshift

Myarr.unshift(9)
console.log(Myarr);

//push 

Myarr.push(8)
console.log(Myarr);

//pop

Myarr.pop()
console.log(Myarr);


