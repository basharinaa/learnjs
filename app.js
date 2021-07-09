var timeNode = document.getElementById('time-node');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');


function getCurrentTimeString() {
   return new Date().toTimeString().replace(/ .*/, '');
}

setInterval(
   () => timeNode.innerHTML = getCurrentTimeString(),
   1000
);