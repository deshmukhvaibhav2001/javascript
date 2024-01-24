const Mydate =new Date()

console.log(Mydate.toDateString());
console.log(Mydate.toLocaleDateString());
console.log(Mydate.toString())

let d = new Date("01-14-2923")

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(d.getTime());
console.log(Math.floor((Date.now()/1000))); // to convert into minutes divide by 1000


