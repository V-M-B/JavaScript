




setInterval(function () {

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

    var div = document.getElementById('clock');
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    div.innerHTML += 'Current Time: ${hours}:${minutes}:${seconds}';
    l̥
  }, 1000);