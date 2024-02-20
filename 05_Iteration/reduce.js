const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currentvalue){
//     console.log(`acc:${acc} and currval:${currentvalue}`);
//     return acc+ currentvalue
// },0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);



const shoppingCart=[
    {

        item:"js course",
        price:999
    },
    
    {

        item:"py course",
        price:1999
    },
    
    {

        item:"data science course",
        price:4999
    },
    
    {

        item:"web api course",
        price:2999
    }
    
]

const pricetopay=shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(pricetopay);