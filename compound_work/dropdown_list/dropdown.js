function favLang(listid, inputId) {
  var mylist = document.getElementById(listid);
  if (mylist.options[mylist.selectedIndex].text !== "---Choose Language---") {
    document.getElementById(inputId).value = mylist.options[mylist.selectedIndex].text;
    alert("You have selected: " + mylist.options[mylist.selectedIndex].text);
  }else{
    document.getElementById(inputId).value = "";
  }
}
