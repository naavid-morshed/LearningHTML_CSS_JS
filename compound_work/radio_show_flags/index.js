function changeFlag() {
  var radio_options = document.getElementsByName("country");
  var image = document.getElementById("img");

  if (document.getElementById("r1").checked) {
    image.src = "https://th.bing.com/th?id=OIP.hsvmtpJAHNP3nTbxQkOYCAHaEe&w=321&h=194&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
  } else {
    image.src = "https://th.bing.com/th?id=OIP.h1NSz4FHs2HQHGo2x1emHAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
  }
}

document.getElementById("radio_list").addEventListener("change", changeFlag);
