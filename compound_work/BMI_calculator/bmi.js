var arrayOfClientData = new Array();

function submitData(nid, aid, hid, wid, bid) {

  //used regex here, \d inside "\ \"" represents numbers from 0-9
  if (document.bmi_form.bmi_name.value == "" || /\d/.test(document.bmi_form.bmi_name.value)) {
    alert("Invalid Name");
  } else if (document.bmi_form.bmi_age.value == 0) {
    alert("Invalid Age");
  } else if (document.bmi_form.bmi_height.value == 0) {
    alert("Invalid Height");
  } else if (document.bmi_form.bmi_weight.value == 0) {
    alert("Invalid Weight");
  } else {

    arrayOfClientData.push({
        name: document.bmi_form.bmi_name.value,
        age: document.bmi_form.bmi_age.value,
        height: document.bmi_form.bmi_height.value,
        weight: document.bmi_form.bmi_weight.value,
        bmi: (document.bmi_form.bmi_weight.value/
             (document.bmi_form.bmi_height.value * document.bmi_form.bmi_height.value)).toFixed(2),
    });

    document.getElementById(nid).innerHTML = arrayOfClientData[arrayOfClientData.length - 1].name;
    document.getElementById(aid).innerHTML = arrayOfClientData[arrayOfClientData.length - 1].age;
    document.getElementById(hid).innerHTML = arrayOfClientData[arrayOfClientData.length - 1].height;
    document.getElementById(wid).innerHTML = arrayOfClientData[arrayOfClientData.length - 1].weight;
    document.getElementById(bid).innerHTML = arrayOfClientData[arrayOfClientData.length - 1].bmi;

    document.bmi_form.reset();
  }
}

function editPressed(){
    document.bmi_form.bmi_name.value = arrayOfClientData[arrayOfClientData.length - 1].name;
    document.bmi_form.bmi_age.value = arrayOfClientData[arrayOfClientData.length - 1].age;
    document.bmi_form.bmi_height.value = arrayOfClientData[arrayOfClientData.length - 1].height;
    document.bmi_form.bmi_weight.value = arrayOfClientData[arrayOfClientData.length - 1].weight;
}

function del(){
    document.getElementById("nid").innerHTML = "";
    document.getElementById("aid").innerHTML = "";
    document.getElementById("hid").innerHTML = "";
    document.getElementById("wid").innerHTML = "";
    document.getElementById("bid").innerHTML = "";
}
