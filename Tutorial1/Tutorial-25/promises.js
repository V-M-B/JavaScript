//most of the time promises are used , and we also create it

const { response } = require("express");

const promise1 = new Promise(function (resolve, reject) {
  //DO ASYN TASK
  //BD CALLS,CRYPTOGRAPHY,
  setTimeout(function () {
    console.log("async task is completed");
    // resolve is a mtd
    resolve(); //cnted now with .then
  }, 1000);
}); //promise created

promise1.then(function () {
  console.log("promise consumed");
});

//method 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("asy method 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("asyn 2 resolved");
});

//Promies 3

const promies3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "coffee", email: "coffee@cf.com" });
  }, 100);
});

promies3.then(function (user) {
  console.log(user);
});

//promies 4
const promies4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "superman", job: "fly" });
    } else {
      reject("ERROR !");
    }
  }, 1000);
});

promies4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promies either resolved or rejected");
  });

//promise-5 asyn await => it is same as .then and .await

const promisefive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "java", job: "suntv" });
    } else {
      reject("ERROR !");
    }
  }, 1000);
});

async function consumePromisefive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log("error in promies5");
  }
}
consumePromisefive();

//async mtd

async function getAllusers(p) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", Error);
  }
}
// getAllusers()

//same in try catch
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
   return response.json()
})
.then((data)=>{
   console.log(data);
   
})

.catch((error)=>{
   console.log("error in");
   
})