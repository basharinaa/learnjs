var element = document.getElementById('hoursId'),


function GetDivElement() {
    hours = 2;
    element.innerHTML = hours;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    setInterval('GetDivElement()',500);
  });

// var minutes = document.getElementById('minutesId');
// var seconds = document.getElementById('secondsId');
// document.getElementById("hoursId").innerHTML = show;