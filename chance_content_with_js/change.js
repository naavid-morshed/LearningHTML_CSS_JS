function changeText() {
  if (document.getElementById("myHeader").innerHTML == "Hello World!") {
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
  } else {
    document.getElementById("myHeader").innerHTML = "Hello World!";
  }
}
