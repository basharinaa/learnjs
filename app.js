
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

function divHeight(){
  const transformClass = document.querySelector('.transformClass');
  var rng1 = document.getElementById('divH');
  document.getElementById('divHnum').innerHTML="Now height of block is " + rng1.value + " px";
  rng12 = "'" + rng1 + "px"+"'";
  transformClass.style.height=rng12;
}

function fontSize(){
  var rng2 = document.getElementById('fS');
  document.getElementById('fontNum').innerHTML="Now font size is " + rng2.value + " px";
}
