function checkDate() {
  const date = new Date();
  document.getElementById("id1").innerHTML = date.toLocaleDateString();
}

function checkTimer() {
  const date = new Date();
  document.getElementById("id2").innerHTML = date.toLocaleTimeString();
}
