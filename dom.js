//~~~~~~form script~~~~~~~~~//
//console log form details
const myForm = document.querySelector("#my-form");
const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const userList = document.querySelector("#userList");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);
const li3 = document.querySelector("#item3");

li3.innerHTML = `<table border=1>
<thead>
<tr>
<td>Name</td>
<td>Email</td>
<td>Action</td>
</tr>
</thead>
<tbody id="tableBody">
</tbody>
</table>`;
const tableBody = document.getElementById("tableBody");
//%%%%%%%%%%%%%%%%%% how to convert array/object into string
// const reg_arr=[];
// let string_array=JSON.stringify(reg_arr);

//%%%%%%%%store multiple values in local storage
// localStorage.setItem("registration", "[]");
function onSubmit(e) {
  e.preventDefault();
  // console.log(name1.value);
  // console.log(email.value);
  var obj1 = { name: name1.value, email: email.value };
  if (name1.value == "" || email.value == "") {
    msg.innerHTML = "Please fill credentials";
    setTimeout(() => {
      msg.innerHTML = "";
    }, 3000);
  }

  //task to update record
  const flag = localStorage.getItem("editFlag");
  const index = JSON.parse(localStorage.getItem("index"));
  console.log(flag, index);
  if (flag || index) {
    var registration = JSON.parse(localStorage.getItem("registration"));
    registration[index] = obj1;
    localStorage.setItem("registration", JSON.stringify(registration));
    localStorage.removeItem("index");
    localStorage.removeItem("editFlag");
    document.getElementById("submit_btn").value = "Add";
  } else {
    var registration_items = localStorage.getItem("registration");
    var reg_obj = JSON.parse(registration_items);
    reg_obj.push(obj1);
    // console.log(registration_items, reg_obj);
    localStorage.setItem("registration", JSON.stringify(reg_obj));
  }
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  displayRegistration();
  // localStorage.clear();
}

function displayRegistration() {
  var registration_items = JSON.parse(localStorage.getItem("registration"));
  console.log(registration_items);
  tableBody.innerHTML = "";
  registration_items.forEach((item, index) => {
    tableBody.innerHTML += `<tr><td>${item.name}</td>
    <td>${item.email}</td>
    <td>
    <a href="#" onclick="deleteRegi(${index})"><button>delete</button><a>
    
    </td>
    </tr>`;

    // "name:" + item.name + " " + " email:" + item.email + "<br>";
  });
}
displayRegistration();

//task 13 delete button
function deleteRegi(index) {
  if (confirm("do you really want to delete this record?")) {
    console.log("i m eating more more more galiya");
    const registration = JSON.parse(localStorage.getItem("registration"));
    // console.log(registration);
    // console.log(registration[index]);
    let removed = registration.splice(index, 1);
    localStorage.setItem("registration", JSON.stringify(registration));

    displayRegistration();
  }
}
