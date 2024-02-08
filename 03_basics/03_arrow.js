const user={
    username:"vaibhav",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this shows current context
    }

}

user.welcomeMessage()

user.username="sam"

user.welcomeMessage()
console.log(this);
 

//arrow function

const chai =()=>{
    let username="hitesh"
    password=1234567
}


// implicit return

const addTwo =(num1,num2)=>num1 +num2

console.log(addTwo(3,8));



