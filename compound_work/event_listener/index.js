document.getElementById("id1").addEventListener("click", addData("para"));
function addData(id) {
    document.getElementById(id).innerHTML = "Hello World" + "<br>" + "Welcome to the  javaTpoint.com";
}