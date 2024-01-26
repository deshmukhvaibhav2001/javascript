const marval_heros=["thor","IronMan","capAmerica"]
const Ind_heros=["Shaktiman","Bheem","sonpari"]

//concat

const allheros=marval_heros.concat(Ind_heros);
console.log(allheros);

// spread

const Newheros=[...Ind_heros,...marval_heros]
console.log(Newheros);

//flat

const num=[1,2,3,[4,5],7,[8,9,[10,11]]]
const allnum=num.flat(3)
console.log(allnum);

//of

let A=100;
let B=300;
let C=765;

console.log(Array.of(A,B,C))

//Indexof() ==The indexOf() method searches an array for an element value and returns its position
console.log(marval_heros.indexOf('thor'));

//lastindexof()
console.log(Ind_heros.lastIndexOf('Bheem'));

//********************************** ARRAY SORT ******************************/

//   1] Array sort()
//   2] Array reverse()
//   3]Array tosorted()
//   4]Array toRversed()
