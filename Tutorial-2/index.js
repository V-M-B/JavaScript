"use strict";
const { log } = require("console");
const { stringify } = require("querystring");

//tret all JS code as newer version

// alert(3+2)/we are using nodejs not browser

//data-type
let name = "vmv";
let age = 18;
let isloggedIn = false;

//**PRIMITIVE */
// Number
// bitint
// string
// Boolean
// null
// undefined
// symbol=unique

// object
// console.log(typeof age);

//**REFERENCES(NON PRIMITIVE) */
//array
//object
//function

// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id===anotherid);//fasle

// const bignumber=321654987654321;
// console.log(bignumber);

const heros = ["shakthiman", "naagraj", "doga"]; //array
let myobj = {
  name: "vmb", //object
  age: 22,
};

const myfun = function () {
  console.log("hello");
};
console.log(myfun);

//**************************************** */
//stack(primitive)//copy
let valuea = 10;
//heaP (non primitive)//refrences
