const para = document.getElementById("paraid");
const numInput = document.getElementById("numInputId");

para.innerHTML = numInput.value; // runs once during first web load, after changing input listener runs

numInput.addEventListener("change", func);

function func() {
  para.innerHTML = numInput.value;
  para.setAttribute("title", numberToEnglish(numInput.value));
}
