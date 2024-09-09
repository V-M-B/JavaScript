//*********DATE******************** */
//Where date is calculated in miniseconds
let date=new Date();
// console.log(date);

// console.log(date.getTime());
// console.log(date.toString());
// console.log(date.toLocaleString());


// let mydate=new Date(2023,0,23);
// console.log(mydate.toDateString());

// let myd=new Date("2024-01-14");
let myd=new Date("02-14-2024");//ind
// console.log(myd.toLocaleString());


//*******Time-Stamp*********************************** */
let ts=Date.now();
// console.log(ts);
// console.log(myd.getTime());
// console.log(Math.floor(Date.now()/1000));//conv to sec


let nd=new Date();
// console.log(nd);
// console.log(nd.getMonth()+1);//it will start with 0 so add 1.
// console.log(nd.getDay());


console.log(nd.toLocaleString('default',{
    weekday:"long",
    // timeZone:""
}));




