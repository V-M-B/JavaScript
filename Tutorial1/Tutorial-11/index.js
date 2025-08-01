// const user=new Object()//singleton

// const user={}//non-singleton

const user={}

user.id="123abc"
user.name="Swammy"
user.islogedIn=true

// console.log(user);


//obj nesting
const ruser={
    uid: "123a",
    fullname:{
        userfullname:{
            fname:"Ram",
            lname:"Sham"
        }
    }

}

// console.log(ruser.fullname);
// console.log(ruser.fullname?.userfullname.fname);


const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"c",4:"d"
}

// const obj3={obj1,obj2}//problem not comined
// 

//m-2
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

//m-3
// const obj4={...obj1,...obj2}
// console.log(obj4);

//
// const user=
// [
//     {
//         id:1,
//         name:"a"
//     },
                    //array of objects
//     {
//         id:2,
//         name:"b"
//     }
// ]


//gives all the "key" in an "ARRAY"
    // console.log(Object.keys(user));


//gives all the "VALUE" in an "ARRAY"
    // console.log(Object.values(user));


    
// *****************************************************

//DE-structure can be done in array & obj

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh",
  };
  
  const {courseInstructor:Instructor}=course
  console.log(Instructor);
  
  ///JSON
  // {
  //     name:"hitesh"
  //     course:"JS"
  //     price:"free"
  // }
  
  // [
  //     {},
  //     {}
  // ]
  