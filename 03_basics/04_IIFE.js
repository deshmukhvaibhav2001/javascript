// Immediately Invoked Function Expressions
// some time we affected by global scope pollution so we use iife 

// named IIFE 
(function chai(){
    console.log(`db connected`);
})();


((name)=>{
    console.log(`DB CONNECTED TO ${name}`);
})('vaibhav');









