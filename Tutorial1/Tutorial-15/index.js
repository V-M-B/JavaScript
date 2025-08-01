//arrow functions -> tells about the correct context

const user = {
  username: "asd",
  price: 999,
  welcomemsg: function (params) {
    console.log(`${this.username}, welcome to our website`);
    console.log(this);
  },
};
// user.welcomemsg()
// user.username="sam"
// user.welcomemsg()

// console.log(this);

// function one() {
//   console.log(this);
// }
// one();



// function two() {//this does'nt work inside the function
//     let username="jack"
//     console.log(this.username);
//   }

//   two()

// const a=function () //undefined
// {
//     let username="sam"
//     console.log(this.username);
    
// }
// a()


const a=() =>
{
    let username="sam"
    console.log(this.username);
    
}//undefined
// a()




//********************* */

const add2=(n1,n2)=>{   //datatype name = (parameter) =>{}
    return n1+n2
}
console.log(add2(1,2));


//implcit return
//if we rap in {curley} braces then u sud use return
//if we rap in (paranthesis) braces then no need of return

const add3=(n1,n2)=> n1+n2

console.log(add3(11,2));


const add4=()=> ({usernamer:"rock"})
console.log(add4());
