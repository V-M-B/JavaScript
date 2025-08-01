function myname() {
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
}

// myname() //fun refer    //()  exec

// function addnumbers(n1, n2){//para
//   console.log(n1 + n2);
// };

// // addnumbers(2,2)//arguments
// const result=addnumbers(3,5)
// console.log("result",result);

// ***********************************************
function loginmsg(username) {
  //to give user which is dummy u can use (username=dummyuser)

  // if (username===undefined) {
  //     console.log("pls enter a user name");

  // }

  if (!username) {
    console.log("pls enter a user name");
  }
  return `${username}  just loged in`;
}
// console.log(loginmsg("Bean"));



// ***************************************************************


// function calculatePrice(...num1) {//...->rest and spread operatoer
//     return num1
// }

// console.log(calculatePrice(2,4,6,8,0));



const user={
    name:"hitesh",
    age:65
}

function handleobj(any) {
    console.log(`username is ${any.name} and age is ${any.age}`);
    
    
}
// handleobj(user)


const myarray=[100,200,300,500,600]

function returna(getArray) {
    return getArray[1]
    
}

// console.log(returna(myarray));
console.log(returna([1,1,3,4]));

