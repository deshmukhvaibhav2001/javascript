function sayMyname(){
    console.log("vaibhav");
}

sayMyname()

//

function addTwonumbers(number1,number2){
   // console.log(number1+number2);
   let result = number1 + number2
   return result


}

const result=addTwonumbers(3,4)
console.log("Result:",result);


//addTwonumbers(3,4)


function loginuserMessage(username){
    return`${username} just logged in` 
}

console.log(loginuserMessage("hitesh"));

//  

function calculateCartPrice(val1,val2,...num1){
    //rest operator = ...

    return num1
}
console.log(calculateCartPrice(200,300,500))

// to handle object in function

const user ={
    username:"vaibhav",
    password:1234

}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and password is ${anyobject.password}`);

}

//handleobject(user)

// to pass object 
handleobject({
    username:"vishwajeet",
    password:23456
})

// to pass array
const mynewArray=[200,444,664,745]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(mynewArray));