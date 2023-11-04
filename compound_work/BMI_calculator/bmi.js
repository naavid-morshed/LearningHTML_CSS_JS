const arrayOfClientData = [];
let temp; //used to store then push new form data to array
let rowData = "";
let isEditing = false;
let editingIndex = 0; //used to capture editing index when pressed edit

function submitData() {
  //used regex here, \d inside "\ \"" represents numbers from 0-9
  if (
    document.bmi_form.bmi_name.value === "" ||
    /\d/.test(document.bmi_form.bmi_name.value)
  ) {
    alert("Invalid Name");
  } else if (document.bmi_form.bmi_age.value === 0) {
    alert("Invalid Age");
  } else if (document.bmi_form.bmi_height.value === 0) {
    alert("Invalid Height");
  } else if (document.bmi_form.bmi_weight.value === 0) {
    alert("Invalid Weight");
  } else if (isEditing) {
    isEditing = false;

    arrayOfClientData[editingIndex] = {
      name: document.bmi_form.bmi_name.value,
      age: document.bmi_form.bmi_age.value,
      height: document.bmi_form.bmi_height.value,
      weight: document.bmi_form.bmi_weight.value,
      bmi: (document.bmi_form.bmi_weight.value /
           (document.bmi_form.bmi_height.value * document.bmi_form.bmi_height.value)).toFixed(2),
    };

    printData();
    document.bmi_form.reset();
  } else {

    temp = {
      name: document.bmi_form.bmi_name.value,
      age: document.bmi_form.bmi_age.value,
      height: document.bmi_form.bmi_height.value,
      weight: document.bmi_form.bmi_weight.value,
      bmi: (document.bmi_form.bmi_weight.value /
           (document.bmi_form.bmi_height.value *document.bmi_form.bmi_height.value)).toFixed(2),
    };

    arrayOfClientData.push(temp);
    document.getElementById("bmi_table_body").innerHTML +=
        `<tr class="table-secondary">
                <td>${arrayOfClientData[arrayOfClientData.length - 1].name}</td>
                <td>${arrayOfClientData[arrayOfClientData.length - 1].age}</td>
                <td>${arrayOfClientData[arrayOfClientData.length - 1].height}</td>
                <td>${arrayOfClientData[arrayOfClientData.length - 1].weight}</td>
                <td>${arrayOfClientData[arrayOfClientData.length - 1].bmi}</td>
                <td>
                    <div class="container-fluid pe-0">
                        <div class="float-end">
                            <input class="btn btn-info" type="button" value="Edit" onclick="editPressed('${arrayOfClientData.length - 1}')">
                            <input class="btn btn-danger" type="button" value="Delete" onclick="del('${arrayOfClientData.length - 1}')">
                        </div>
                    </div>
                </td>
         </tr>`;
    document.bmi_form.reset();
  }
}

function editPressed(index) {
  isEditing = true;
  editingIndex = index;

  document.bmi_form.bmi_name.value = arrayOfClientData[index].name;
  document.bmi_form.bmi_age.value = arrayOfClientData[index].age;
  document.bmi_form.bmi_height.value = arrayOfClientData[index].height;
  document.bmi_form.bmi_weight.value = arrayOfClientData[index].weight;
}

function del(index) {
  arrayOfClientData.splice(index, 1);
  printData();
}

function printData() {
  rowData = "";
  for (let count = 0; count < arrayOfClientData.length; count++) {
    rowData += `<tr class="table-secondary">
                    <td>${arrayOfClientData[count].name}</td>
                    <td>${arrayOfClientData[count].age}</td>
                    <td>${arrayOfClientData[count].height}</td>
                    <td>${arrayOfClientData[count].weight}</td>
                    <td>${arrayOfClientData[count].bmi}</td>
                    <td>
                        <div class="container-fluid pe-0">
                            <div class="float-end">
                                <input class="btn btn-info" type="button" value="Edit" onclick="editPressed('${count}')">
                                <input class="btn btn-danger" type="button" value="Delete" onclick="del('${count}')">
                            </div>
                        </div>
                    </td>
                </tr>`;
  }

  document.getElementById("bmi_table_body").innerHTML = rowData;
}

document.getElementById("bmi_mode").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("radio_table").style.display = "block";
    document.getElementById("radio_calc").style.display = "none";
  }
});

document.getElementById("calc_mode").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("radio_table").style.display = "none";
    document.getElementById("radio_calc").style.display = "block";
  }
});