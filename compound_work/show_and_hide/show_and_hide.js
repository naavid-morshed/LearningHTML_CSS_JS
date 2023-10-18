function showOrHide(id) {
  var showForm = `
    <form action='Comment'>
        Enter Name:<br>
        <input type='text' name='name'/><br/>  
        Enter Email:<br><input type='email' name='email'/><br>
        Enter Comment:<br/>  
        <textarea></textarea><br><input type='submit' value='Post Comment'/>
    </form>`;
// ==   === 
  if (!document.getElementById(id).innerHTML) {
    document.getElementById(id).innerHTML = showForm;
  } else {
    document.getElementById(id).innerHTML = "";
  }
}
