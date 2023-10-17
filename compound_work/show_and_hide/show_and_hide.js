var flag = true;
function showOrHide() {
  var cform = `
    <form action='Comment'>
        Enter Name:<br>
        <input type='text' name='name'/><br/>  
        Enter Email:<br><input type='email' name='email'/><br>
        Enter Comment:<br/>  
        <textarea></textarea><br><input type='submit' value='Post Comment'/>
    </form>`;

  if (flag) {
    document.getElementById("mylocation").innerHTML = cform;
    flag = false;
  } else {
    document.getElementById("mylocation").innerHTML = "";
    flag = true;
  }
}
