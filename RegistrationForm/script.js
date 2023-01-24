"use strict";
//for modal working
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const navigation = document.querySelector(".navigation");
//for form functioning
let userName = document.querySelector(".userName");
let errorInUserName = document.querySelector(".errorInUserName");
let email = document.querySelector(".email");
let createPin = document.querySelector(".createPin");
let confirmPin = document.querySelector(".confirmPin");
let errorInPassword = document.querySelector(".errorInPassword");
let correctEmail = document.querySelector(".correctEmail");
let incorrectEmail = document.querySelector(".incorrectEmail");
let button = document.querySelector(".button");
let correctIcon = document.querySelector(".correctIcon");
let incorrectIcon = document.querySelector(".incorrectIcon");
let correctIconUser = document.querySelector(".correctIconUser");
let incorrectIconUser = document.querySelector(".incorrectIconUser");
let eye = document.querySelector(".eye");
let closeeye = document.querySelector(".closeeye");
let black = document.querySelector("#black");
let white = document.querySelector("#white");
const closalModal2 = document.querySelector(".close-modal-2");
const showModal2 = document.querySelector(".show-modal-2");
const containerLogin = document.querySelector(".login-container");
const btnLogin = document.querySelector(".login__btn");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const check = document.querySelector(".check");
const login = document.querySelector(".login");
//timer//
const labelTimer = document.querySelector(".timer");
let logoutTimer = document.querySelector(".logout-timer");
let timerDiv = document.querySelector(".timerDiv");

console.log(openModal);

openModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  navigation.style.opacity = 0;
  containerLogin.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  navigation.style.opacity = 1;
  containerLogin.classList.add("hidden");
});

//Now to apply close property with the help of Esc button

document.addEventListener("keydown", function (any) {
  console.log(any.key);
  if (any.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    navigation.style.opacity = 1;
    containerLogin.classList.add("hidden");
  }
});

//registration submit button functioning
button.addEventListener("click", function (e) {
  e.preventDefault();
  //initial-validation
  if (
    createPin.value === confirmPin.value &&
    createPin.value !== "" &&
    createPin.value !== "string" &&
    createPin.value.length == 4
  ) {
    correctIcon.classList.remove("hidden");
  } else {
    incorrectIcon.classList.remove("hidden");
  }

  if (userName.value.length > 0) {
    correctIconUser.classList.remove("hidden");
  } else {
    incorrectIconUser.classList.remove("hidden");
  }

  if (
    email.value != "" &&
    String(email.value).includes("@") &&
    String(email.value).includes(".")
  ) {
    correctEmail.classList.remove("hidden");
  } else {
    incorrectEmail.classList.remove("hidden");
  }

  //final validation
  if (
    createPin.value === confirmPin.value &&
    createPin.value !== "" &&
    createPin.value !== "string" &&
    createPin.value.length === 4 &&
    userName.value.length > 0 &&
    String(email.value).includes("@") &&
    String(email.value).includes(".")
  ) {
    //using api//

    let final = async function () {
      try {
        let postData = {
          name: String(userName.value),
          email: String(email.value),
          pin: createPin.value,
        };
        let options = {
          method: "Post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        };

        let url = await fetch(`https://localhost:7003/api/Register`, options);

        console.log(url);

        //check for the condition
        modal.classList.add("hidden");
        navigation.style.opacity = 1;
        if (url.status == 400) {
          alert("already exist");
        } else if (url.status == 500) {
          alert("Server Not connected");
        } else {
          alert("Created successfully");
        }
        overlay.classList.add("hidden");
      } catch {
        console.log("NOT FOUND");
        alert("Server error");
      }
    };

    ////////////////////////////
    final();
  }
});

userName.addEventListener("click", function () {
  console.log(userName.value);
  correctIconUser.classList.add("hidden");
  incorrectIconUser.classList.add("hidden");
});

email.addEventListener("click", function () {
  correctEmail.classList.add("hidden");
  incorrectEmail.classList.add("hidden");
});

createPin.addEventListener("click", function () {
  console.log(createPin.value);
  correctIcon.classList.add("hidden");
  incorrectIcon.classList.add("hidden");
});

confirmPin.addEventListener("click", function () {
  console.log(createPin.value);
  correctIcon.classList.add("hidden");
  incorrectIcon.classList.add("hidden");
});

eye.addEventListener("click", function () {
  closeeye.classList.remove("hidden");
  confirmPin.setAttribute("type", "number");
  eye.classList.add("hidden");
});

closeeye.addEventListener("click", function () {
  eye.classList.remove("hidden");
  confirmPin.setAttribute("type", "password");
  closeeye.classList.add("hidden");
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  correctIcon.classList.add("hidden");
  incorrectIcon.classList.add("hidden");
  correctIconUser.classList.add("hidden");
  incorrectIconUser.classList.add("hidden");
  correctEmail.classList.add("hidden");
  incorrectEmail.classList.add("hidden");
  userName.value = "";
  createPin.value = "";
  confirmPin.value = "";
  email.value = "";
  closeeye.classList.add("hidden");
  eye.classList.remove("hidden");
  navigation.style.opacity = 1;
  modal.classList.remove("black");
  modal.classList.remove("white");
});

black.addEventListener("click", function () {
  modal.classList.add("black");
  modal.classList.remove("white");
  closeModal.style.color = "white";
  black.style.border = "1px solid white";
  eye.style.color = "#333";
  closeeye.style.color = "#333";
  black.classList.add("hidden");
  white.classList.remove("hidden");
  //for heading title color
  document.querySelector(".modal_heading").style.color = "white";
});

white.addEventListener("click", function () {
  modal.classList.remove("black");
  black.classList.remove("hidden");

  // modal.classList.add("white");
  // modal.classList.remove("black");
  // closeModal.style.color = "#333";
  // black.classList.remove("hidden");
  // white.classList.add("hidden");
  // //for heading title color
  // document.querySelector(".modal_heading").style.color = "black";
});

////////////////////////////////////

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  // let x = Number(inputLoginUsername.value) ? "number" : "string";
  //preconditions

  //get user name by api

  let final = async function () {
    try {
      if (inputLoginPin.value == "" && inputLoginUsername.value == "") {
        inputLoginUsername.style.background = "#fa5252";
        inputLoginPin.style.background = "#fa5252";
      } else if (inputLoginPin.value == "") {
        inputLoginPin.style.background = "#fa5252";
      } else if (inputLoginUsername.value == "") {
        inputLoginUsername.style.background = "#fa5252";
      } else {
        let url = await fetch(
          `https://localhost:7003/api/Register/userName?userName=${inputLoginUsername.value}&confirmPin=${inputLoginPin.value}`
        );
        console.log(url);

        if (url.status == 404) {
          alert("Account does not exist");
          return;
        } else if (url.status == 400) {
          alert("DataBase Not Connected!");
          return;
        } else {
          let jsondata = await url.json().then(function (x) {
            return x;
          });

          console.log(jsondata.name, jsondata.pin);
          check.style.opacity = 1;
          timerDiv.style.opacity = 1;
          login.style.opacity = 0;
          check.innerHTML = ""; //for check
          check.innerHTML = `<h1 style="color:white;background-color:black;font-size:5rem ;margin-top:6rem;padding:3rem"> Welcome</h1> </br><span style="background-color:black;font-size:5rem ;margin-top:6rem;padding:3rem" class="highlight2">${jsondata.name} </span>`;
          navigation.style.opacity = 0;
          overlay.classList.add("hidden");
        }
        timecount();
      }
    } catch {
      alert("Server not available!");
    }
  };

  ////////////////////////////
  final();
});

inputLoginUsername.addEventListener("click", function () {
  inputLoginUsername.style.background = "";

  // user.username = [];
  check.style.opacity = "0";
});

inputLoginPin.addEventListener("click", function () {
  inputLoginPin.style.background = "";
  // user.userpassword = [];
  check.style.opacity = "0";
});

closalModal2.addEventListener("click", function () {
  containerLogin.classList.add("hidden");
  inputLoginPin.style.background = "";
  inputLoginUsername.style.background = "";
  overlay.classList.add("hidden");
});

showModal2.addEventListener("click", function () {
  containerLogin.classList.remove("hidden");
  check.classList.remove("hidden");
  login.classList.remove("hidden");
  // user.userpassword = [];
  check.style.opacity = "0";
  inputLoginUsername.value = inputLoginPin.value = "";
  overlay.classList.remove("hidden");
});

///////////////timer///////////////////

let tictoc;

let timecount = function () {
  let time = 10;
  let counter = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(tictoc);
      timerDiv.style.opacity = "0";
      check.classList.add("hidden");
      inputLoginPin.style.background = "";
      inputLoginUsername.style.background = "";
      showModal2.style.opacity = 1;
      openModal.style.opacity = 1;
      userName.value = "";
      createPin.value = "";
      confirmPin.value = "";
      email.value = "";
      overlay.classList.add("hidden");
      correctIcon.classList.add("hidden");
      incorrectIcon.classList.add("hidden");
      correctIconUser.classList.add("hidden");
      incorrectIconUser.classList.add("hidden");
      correctEmail.classList.add("hidden");
      incorrectEmail.classList.add("hidden");
      closeeye.classList.add("hidden");
      eye.classList.remove("hidden");
      login.classList.remove("hidden");
      inputLoginUsername.value = inputLoginPin.value = "";
      //
      check.style.opacity = 0;
      containerLogin.classList.add("hidden");

      // containerLogin.style.opacity = 1;
      navigation.style.opacity = 1;
      login.style.opacity = 1;
    }
    time--;
  };
  let tictoc = setInterval(counter, 1000);
  return tictoc;
};

//testing for the api//////////////////////////////////////////

//get method

// document.querySelector("#api_test_get").addEventListener("click", function (e) {
//   e.preventDefault();

//   let final = async function () {
//     try {
//       const digit = prompt(
//         "enter the City :1-delhi 2-mumbai 3-himachal \n to check if server is having any of them "
//       );
//       let url = await fetch(
//         `https://localhost:7091/api/cities/${digit}?includesSplaces=false`
//       );
//       let jsondata = await url.json().then(function (x) {
//         return x;
//       });
//       console.log(jsondata);

//       document.querySelector("#api_test_get").innerHTML = jsondata.name;
//       document.querySelector("#api_test_get").style.backgroundColor = "#c0eb75";
//       document.querySelector("#api_test_get").style.color = "inherit";
//     } catch {
//       document.querySelector("#api_test_get").innerHTML = "not found";
//       document.querySelector("#api_test_get").style.backgroundColor = "Red";
//       document.querySelector("#api_test_get").style.color = "white";

//       console.log("NOT FOUND");
//     }
//   };
//   final();
// });

// //post method
// document
//   .querySelector("#api_test_post")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     let postmethod = async function () {
//       try {
//         const digit = prompt(
//           "enter the City :1-delhi 2-mumbai 3-himachal \n to add the special place"
//         );
//         let name = prompt(
//           "Enter the name of special place to add to post :"
//         ).toString();

//         let description = prompt(
//           "Enter th description about the special place "
//         ).toString();

//         let postData = {
//           name: name,
//           description: description,
//         };

//         let options = {
//           method: "Post",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(postData),
//         };

//         let posturl = await fetch(
//           `https://localhost:7091/api/cities/${digit}/specialPlacesByCity`,
//           options
//         );

//         // let response = await posturl.json().then(function (y) {
//         //   return y;
//         // });

//         // console.log(response);
//         document.querySelector("#api_test_post").innerHTML = "successfull";
//         document.querySelector("#api_test_post").style.backgroundColor =
//           "#c0eb75";
//       } catch {
//         document.querySelector("#api_test_post").innerHTML = "not successfull";
//         document.querySelector("#api_test_post").style.backgroundColor = "Red";
//         console.log("not successfull");
//       }
//     };
//     postmethod();
//   });
