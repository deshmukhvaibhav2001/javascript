// // for of

// const arr=[1,2,3,4,5]
// for (const x of arr) {
//     console.log(x);
    
// }

// let a="javascript"
// for (const y of a) {
//     console.log(y);
    
// }

// // for of

// const greeting ="Hello Vaibhav"

// for (const greet of greeting) {


//     console.log(`Each char is ${greet}`);

    
// }
// // Maps

// // const country=new Map([["India",91],["usa",1],["uk",44]])
// // console.log(country);


// //loop on map

// const map =new Map()
// map.set('in',"india")
// map.set('uk',"united kingdom")
// map.set('usa',"united states of america")
// map.set('in',"india")

// console.log(map);

// for (const [key ,value] of map) {
//     console.log(key +':-'+ value);
    
// }

// for each loop

const coding =["js","ruby","java","c"]

coding.forEach(function (item) {
    console.log(item);
});

coding.forEach((value)=>{
    console.log(value);
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const mycodding =[

    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"j"
    },
    {
        languageName:"ruby",
        languageFileName:"rb"
    },
    {
        languageName:"cpp",
        languageFileName:"c+"
    },

]

mycodding.forEach((item) => {
    
    console.log(item.languageName);
    
});