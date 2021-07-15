
function startTime() {
  var time = new Date();
  var hours = time.getHours();
  if (hours < 10) hours = '0' + hours;
  var minutes = time.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  var seconds = time.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  document.getElementById('hoursId').innerHTML=hours;
  document.getElementById('minutesId').innerHTML=minutes;
  document.getElementById('secondsId').innerHTML=seconds;
  // var day = time.getDay();
  // var month = time.getMonth();
  // var year = time

setTimeout("startTime()", 1000);
}

function displayOption() {
  var sel = document.getElementById('mySelect');
  var x = sel.selectedIndex;
    document.getElementById('notify').innerHTML="You chose " + sel.options[x].text + "!";
}
