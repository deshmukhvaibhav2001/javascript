const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newnums=myNums.filter((NUM)=>NUM>4)
// const newnums=myNums.filter((NUM)=>{ 
//     return NUM>4
// })

// using foreach 
const newnums=[]
myNums.forEach((NUM)=>{

    if (NUM>4) {
        newnums.push(NUM)
        
    }
})
// console.log(newnums);

const Books=[
    {title:' book1 ',genre:' science ', publish:' 1998 ',edition:'2007 ' },
    {title:' book2 ',genre:'history ', publish:' 1994 ',edition:'2001 ' },
    {title:' book3 ',genre:' non-fiction', publish:' 2001 ',edition:'2020 ' },
    {title:' book4 ',genre:'science ', publish:' 1987 ',edition:'2002 ' },
    {title:' book5 ',genre:' history', publish:'2005  ',edition:'2021 ' },
    {title:' book6 ',genre:'fiction ', publish:' 1999 ',edition:'2010 ' },
    {title:' book7 ',genre:'history', publish:'2007  ',edition:'2023 ' },
    {title:' book8 ',genre:'science ', publish:' 1995 ',edition:'2012 ' },
    {title:' book9 ',genre:' non-fiction', publish:' 1870 ',edition:'1992 ' }
]


let userBooks=Books.filter((Bk)=>Bk.genre ==='history')

userBooks=Books.filter((Bk)=>{return Bk.publish>=2000})

// console.log(userBooks);


// map

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNumber= myNumbers.map((num)=>num+10)
// const newNumber=myNumbers.map((num)=>{return num + 10 })

// chaining
const newNumber=myNumbers
                .map((num)=> num * 10)
                .map((num)=> num + 1)
                .filter((num)=>num>=40)


console.log(newNumber)
 