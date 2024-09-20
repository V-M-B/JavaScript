//Immediately Invoked Function Expression (IIFE)


//******this is named iife******

(function cold() {
      console.log("cold coffe");
    })();
    //; is used to write the two function
    
    // 1()=function defination
    // 2()=function exection
    
    
    //******this is un-named iife******
  (() => {
    console.log("name is name");
  }
)();
