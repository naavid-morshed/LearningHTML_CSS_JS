function checkDate(id) {
  const date = new Date();
  document.getElementById(id).innerHTML = date.toLocaleDateString();
}

function checkTimer(id) {
  const date = new Date();
  const hours = date.getHours() < 10 ? "0".concat(date.getHours()) : date.getHours();
  const minutes = date.getMinutes() < 10 ? "0".concat(date.getMinutes()) : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? "0".concat(date.getSeconds()) : date.getSeconds();
  const mil = date.getMilliseconds() < 10 ? "00".concat(date.getMilliseconds()) 
            : date.getMilliseconds() < 100? "0".concat(date.getMilliseconds()) 
            : date.getMilliseconds();
  const am_pm = hours > 11 ? " PM" : " AM";
  document.getElementById(id).innerHTML = hours + ":" + minutes + ":" + seconds + ":" + mil + am_pm;
}
