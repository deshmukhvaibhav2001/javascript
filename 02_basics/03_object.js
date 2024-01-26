

//object literals 

const mySym=Symbol("key1 ")

 const Jsuser={
    name:"vaibhav",
    [mySym]:"mykey1",
    "full name":"vaibhav Balasaheb deshmukh",
    age:23,
    location:"pune",
    email:"vaibhav@gmail.com",
    isLoggedIn:false
}

console.log(typeof Jsuser.name)
console.log(Jsuser.email)
console.log(Jsuser["name"])
console.log(Jsuser["full name"])
console.log(Jsuser[mySym]);

// to change the value in the object 

Jsuser.location="kaij"
console.log(Jsuser["location"]);

// if you wanyt no one to change the value ,you can freeze the value

// object.freeze(Jsuser)

// function in object 

Jsuser.greeting= function(){
    console.log("hello js user");
}

Jsuser.greetingTwo= function(){
    console.log(`hello js user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


