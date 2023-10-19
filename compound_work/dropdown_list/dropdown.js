function favTutorial() {
  var mylist = document.getElementById("myList");
  if (mylist.options[mylist.selectedIndex].text !== "---Choose Language---") {
    document.getElementById("favourite").value =
      mylist.options[mylist.selectedIndex].text;
    alert("You have selected: " + mylist.options[mylist.selectedIndex].text);
  }
}
