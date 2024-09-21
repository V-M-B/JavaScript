//high order loop
//for of loop

const array = [1, 2, 3, 4, 5];

for (const i of array) {
  // console.log(array);
}

//** */
//MAP
//** */

//it is a object

const map = new Map();

map.set("a", "1");
map.set("aa", "11");
map.set("aaa", "1a1");
//it only prints unique value
// console.log(map);

for (const [key, value] of map) {
  //de-structing of array
  // console.log(key);
}

const myobj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "apple",
};
//to iterate in "obj"  and  others.

for (const key in myobj) {
  // to iterate obj
  // const element = object[key];
  // console.log(key);
  // console.log(`${key} shortcut is for ${myobj[key]}`);
}

for (const key in array) {
  // iterating array
  //   console.log(array[key]);
}

// for (const key in object) {
//     //map can not be iteratable
// }

//********************* */
//********************* */
//********************* */

const coding = ["js", "ruby", "css", "html", "react"];

// coding.forEach(function(item) {//no name of the function , bcuz this is call back
//     console.log(item);

// });

//*********************using arrow */
// coding.forEach((i)=>{
//     console.log(i);

// })

//******** using with function*/
function printme(ii) {
//   console.log(ii);
}

coding.forEach(printme)

//***********parameter which it takes */
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})


//array with multiple obj

const nobj=[
    {
        name:"cv",
        age:78
    },
    {
        name:"dv",
        age:38
    }
]

//getting the value form the arrya of object using for each
nobj.forEach((item)=>{
    console.log(item.age);
    
})