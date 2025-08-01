const coding = ["js", "ruby", "css", "html", "react"];

coding.forEach((item) => {
  // console.log(item);
  // return item
  //*foreach doesnot return any value
});

//*************************** */

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let n = num.filter((num) => num > 4); //it returns the values -imlicitly
// console.log(n);

let n1 = num.filter((num) => {
  //to return explicitly bucz opened the scope
  return num > 4;
});
// console.log(n1);


//*********************** */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')
  let userBooks = books.filter( (bkj) => bkj.publish >= 1995 && bkj.genre==="History")
//   console.log(userBooks);




//   ***************************************
//map returns the value
//filter doesnot in (paranthesis),,it will in { }


const mynumbers=[1,2,3,4,5,6,7,8,9]
const newn=mynumbers.map((n)=>(n+10))
// console.log(newn);



//************Chaining ****/
const mynum=[1,2,3,4,5,6,7,8,9]

const mapchain=mynum.map((nu)=>(nu+10))
.map((nu)=>(nu+1))
.filter((nu)=>nu>=15)
// console.log(mapchain);



// ********** REDUCE ***********

const numb=[1,2,3]

const total=numb.reduce(function (acc,curval) {
    console.log(`acc:${acc} and curvalue:${curval}`);
    // return acc+curval
    //currvalue is in the array start from the index 0
},0)//accumulator value
// console.log(total);


// const tot=numb.reduce( (acc,curval) =>acc+acc,0)

const shooping=
[{
    name:"sdvvdb",
    age:8,
    price:1001
},
{
    name:"vvdb",
    age:8,
    price:999
}];

const pricepay=shooping.reduce((acc,item) => acc+item.price,0)
console.log(pricepay);
