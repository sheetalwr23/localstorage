//~~~~~~form script~~~~~~~~~//
//console log form details
const myForm = document.querySelector("#my-form");
const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const userList = document.querySelector("#userList");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);
const li3 = document.querySelector("#item3");
function onSubmit(e) {
  e.preventDefault();
  console.log(name1.value);
  console.log(email.value);

  li3.innerHTML = "name:" + name1.value + " " + " email:" + email.value;
  if (name1.value == "" || email.value == "") {
    msg.innerHTML = "Please fill credentials";
    setTimeout(() => {
      msg.innerHTML = "";
    }, 3000);
  }
  localStorage.setItem("name", name1.value);
  localStorage.setItem("email", email.value);
  // localStorage.clear();
}

// //local storage
// localStorage.setItem("name", "sheetal");
// localStorage.removeItem("name");

// //session storage
// sessionStorage.setItem("name", "John");

// //cookie
// document.cookie = "name=bob";
