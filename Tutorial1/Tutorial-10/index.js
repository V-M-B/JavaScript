//2 ways of creating object
//using constructor->Singleton  Object.create
//using obj literals   const jsuser={}

const mysym = Symbol("Key1");

const user = {
  [mysym]: "mykey1",

  name: "hockey",
  age: 200,
  email: "hockey@gmail.com",
  islogedIn: false,
  lastlogin: [" monday", "tuesday"],
};

// console.log(user.age);
// console.log(user["age"]);//Where age is taken as string so use ""
// console.log(user[mysym]);

//to overide values
// user.email="h@hockey.com"
// console.log(user.email);

//to avoid changes we use freeze
// Object.freeze(user)
// user.age=100
// console.log(user.age);

user.greeting = function () {
  console.log("hello User");
};
user.greeting1 = function () {
  console.log(`hi ${this.name}`);
};

console.log(user.greeting());
console.log(user.greeting1());
