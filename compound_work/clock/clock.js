function checkDate() {
  const date = new Date();
  document.getElementById("id1").innerHTML = date.toLocaleDateString();
}

function checkTimer() {
  const date = new Date();
  const mil = date.getMilliseconds();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const am_pm = hours > 12 ? " PM" : " AM";
  document.getElementById("id2").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + mil + am_pm;
  //   $(".id2").innerHTML = date.toLocaleTimeString()
}
