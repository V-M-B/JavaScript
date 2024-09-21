//Loops/Iteration

//for

// for (let i = 0; i < 10; i++) {
//   //printing 0-9
//   const element = i;
//   if (element == 5) {
//     console.log("5 is the best number");
//   }
//   console.log(element);
// }

let myarray = ["flash", "batman", "superman"];

for (let index = 0; index < myarray.length; index++) {
  const element = myarray[index];
  console.log(element);
}

//** */
//break
//** */
// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`);
//         break;
        
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

//** */
//continue
//** */
// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`);
//         continue
        
//     }
//     console.log(`value of i is ${index}`);
    
    
// }


//** */
//while
//** */


let index=0
// while (index<=10) {
//     console.log(`value of index is ${index}`);
//     index++
// } 

let myarray1 = ["flash", "batman", "superman"];
let arr=0
while (arr < myarray1.length) {
  console.log(`value is ${myarray1[arr]}`);
  arr++;
}


//** */
//do-while loop
//** */

let s=0

do {
  console.log(`score ${s}`);
  s++
} while (s<=10);