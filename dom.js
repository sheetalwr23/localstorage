//~~~~~~form script~~~~~~~~~//
//console log form details
const myForm = document.querySelector("#my-form");
const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const userList = document.querySelector("#userList");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);
const li3 = document.querySelector("#item3");

//%%%%%%%%%%%%%%%%%% how to convert array/object into string
// const reg_arr=[];
// let string_array=JSON.stringify(reg_arr);

//%%%%%%%%store multiple values in local storage
localStorage.setItem("registration", "[]");
function onSubmit(e) {
  e.preventDefault();
  // console.log(name1.value);
  // console.log(email.value);

  li3.innerHTML = "name:" + name1.value + " " + " email:" + email.value;
  if (name1.value == "" || email.value == "") {
    msg.innerHTML = "Please fill credentials";
    setTimeout(() => {
      msg.innerHTML = "";
    }, 3000);
  }
  var obj1 = { name: name1.value, email: email.value };

  var registration_items = localStorage.getItem("registration");
  var reg_obj = JSON.parse(registration_items);
  reg_obj.push(obj1);
  console.log(registration_items, reg_obj);
  localStorage.setItem("registration", JSON.stringify(reg_obj));
  // localStorage.clear();
}
