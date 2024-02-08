var c=300
let a=300
if(true){
    let z=30
    const b=20
    console.log("INNER:",a);
}
// console.log(a);
// console.log(b);
// console.log(c);


// nested function

function One(){
    const username ="vaibhav"

    function Two(){
       const website="youtube"
       console.log(username); 
    }
    // console.log(website); // we cannot access this 

    Two()
}
One()

//***********  hoisting  ***************** */ 
console.log(addone(5));
function addone(num){
    return num+1
}

// this is not allow hoisting is depend on function declearation

addtwo(8)
 const addtwo =function(num){
    return num+2
 }

