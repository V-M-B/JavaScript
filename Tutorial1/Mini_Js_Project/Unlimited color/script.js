//genrate random hex code
const randomColor = function () {
  const hex = "0123465789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId
const startColorChanging = function () {
    if(intervalId==null)
    {
        intervalId=setInterval(changeBgcolor, 1000);

    }
   

  function changeBgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopColorChanging = function () {
  clearInterval(intervalId);
  intervalId=null
};

document.querySelector("#start").addEventListener("click", startColorChanging);

document.querySelector("#stop").addEventListener("click", stopColorChanging);
