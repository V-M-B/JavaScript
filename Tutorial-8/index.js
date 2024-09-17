//ARRAY
// const myarr=[1,2,3,4,5,true,"vmb"]//elements

// console.log(myarr[0]);//indexingṇ

//shallow copy
//prp share the same point 
//deep copy
//prp do not the share the same point

const myarr2=new Array(11,22,33,44)
// console.log(myarr2[3]);


// //array methods

// myarr2.push(55)
// myarr2.push(66)
// myarr2.pop()
// console.log(myarr2);
// //[ 11, 22, 33, 44, 55 ]

// myarr2.unshift(00)
// console.log(myarr2);//add @ start not optimal
// myarr2.shift
// console.log(myarr2);//removes 1st element



//slice splice

console.log("A",myarr2);
const myn=myarr2.slice(1,3)

console.log(myn);
console.log("B",myarr2);


const myn2=myarr2.splice(1,3)//splice 
console.log(myn2);