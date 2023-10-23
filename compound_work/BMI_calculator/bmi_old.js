function submitForm(name_id,age_id,height_id,weight_id,bmiform){
    const weight = document.getElementById(weight_id).value;
    const height = document.getElementById(height_id).value;


    // if(document.getElementById(name_id).value == ""){
    //     a
    // }

    document.getElementById("table_name").innerHTML = document.getElementById(name_id).value;
    document.getElementById("table_age").innerHTML = document.getElementById(age_id).value + " years";
    document.getElementById("table_height").innerHTML = document.getElementById(height_id).value + " m";
    document.getElementById("table_weight").innerHTML = document.getElementById(weight_id).value + " Kg";
    document.getElementById("table_bmi").innerHTML = (weight/(height * height)).toFixed(2);
    document.getElementById(bmiform).reset();
}

function edit(){
    var age = Number(document.getElementById("table_age").innerHTML.slice(0,-6));
    var height = Number(document.getElementById("table_height").innerHTML.slice(0,-2));
    var weight = Number(document.getElementById("table_weight").innerHTML.slice(0,-3));

    document.getElementById("name_id").value = document.getElementById("table_name").innerHTML;
    document.getElementById("age_id").value = age;
    document.getElementById("height_id").value = height;
    document.getElementById("weight_id").value = weight;
}

function del(){
    document.getElementById("table_name").innerHTML = "";
    document.getElementById("table_age").innerHTML = "";
    document.getElementById("table_height").innerHTML = "";
    document.getElementById("table_weight").innerHTML = "";
    document.getElementById("table_bmi").innerHTML = "";
}
