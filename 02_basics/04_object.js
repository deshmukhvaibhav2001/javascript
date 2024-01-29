// we can declare object like this(singleton object) =>const tinderUser=new object()

const tinderUser={}

tinderUser.id="12344"
tinderUser.name="vaibhav"
tinderUser.isloggedIn=false


const regularUser={
    email:"deshmukh@gmail.com",
    fullName:{
        UserfullName:{
            firstname:"vishwajeet"
        }

    }
} 

console.log(regularUser.fullName.UserfullName.firstname);
console.log(regularUser.fullName);
console.log(regularUser.fullName.UserfullName);


// to combine the object 

//1] assign methode  2]spread methode

const obj1={a:1, b:2,c:3}
const obj2={d:4,e:5,f:6}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);


// spread
const obj4={...obj1,...obj2}
console.log(obj4);

// objects in array

const user=[
    {
        id:123,
        email:"d@gmail.com"
    },

    {
        id:127,
        email:"jj@gmail.com"
    },
    {
        id:553,
        email:"cc@gmail.com"
    },
    {
        id:567,
        email:"hh@gmail.com"
    },
    {
        id:569,
        email:"ff@gmail.com"
    }


]

console.log(user[3].email);

// 
console.log(tinderUser);
console.log(Object.keys(tinderUser));// and data type is array. the values are in array form
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//to check the key value is present or not

console.log(tinderUser.hasOwnProperty('isloggedIn'));


// Destructuring

const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor}=course

// we can assign new name to key value
const {coursename:Cname}=course
 console.log(Cname);












