const dOk = document.getElementById("directory-ok");
const delReset = document.getElementById("del-reset");
const getUserBtn = document.getElementById("get-user-btn");
const delUser = document.getElementById("del-user");
dOk.addEventListener("click", () => {
  let newName = document.querySelector("#new-name").value;
  let newId = document.querySelector("#new-id").value;
  let newRole = document.querySelector("#new-role").value;
  let newPass = document.querySelector("#new-password").value;
  let message = document.querySelector("#new-login");
  let users = JSON.parse(localStorage.getItem("users"));
  // users || (users = []);
  if (users == null || users == undefined) {
    users = [];
  }
  let teacherBranch = document.querySelector("#teacher-branch").value;
  let teacherClassArr = [];
  let studentLessonArr = [];
  let studentClass = document.querySelector("#student-class").value;
  let flag = true;
  if (users) {
    for (item of users) {
      for (value of Object.values(item)) {
        if (value == newId) {
          message.classList.remove("text-success");
          message.classList.add("text-danger");
          message.innerText = "Id already using...";
          flag = false;
        }
      }
    }
  }
  if (flag) {
    message.classList.remove("text-danger");
    message.classList.add("text-success");
    message.innerText = "new user added...";
    if (newRole == "student") {
      if (document.querySelector("#st-math").checked) {
        studentLessonArr.push("math");
      }
      if (document.querySelector("#st-biology").checked) {
        studentLessonArr.push("biology");
      }
      if (document.querySelector("#st-history").checked) {
        studentLessonArr.push("history");
      }
      if (document.querySelector("#st-english").checked) {
        studentLessonArr.push("english");
      }
      users.push({
        name: newName.toLowerCase(),
        id: newId.toLowerCase(),
        role: newRole,
        password: newPass.toLowerCase(),
        lesson: studentLessonArr,
        class: studentClass,
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else if (newRole == "teacher") {
      if (document.querySelector("#t-7-A").checked) {
        teacherClassArr.push("7-A");
      }
      if (document.querySelector("#t-7-B").checked) {
        teacherClassArr.push("7-B");
      }
      if (document.querySelector("#t-7-C").checked) {
        teacherClassArr.push("7-C");
      }
      if (document.querySelector("#t-7-D").checked) {
        teacherClassArr.push("7-D");
      }
      users.push({
        name: newName.toLowerCase(),
        id: newId.toLowerCase(),
        role: newRole,
        password: newPass.toLowerCase(),
        lesson: teacherBranch,
        class: teacherClassArr,
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  document.querySelector("#student-class").classList.add("visually-hidden");
  document.querySelector("#student-lesson").classList.add("visually-hidden");

  document.querySelector("#teacher-class").classList.add("visually-hidden");
  document.querySelector("#teacher-branch").classList.add("visually-hidden");
});

// ! rol seçilince açılacak olan menüler
document.querySelector("#new-role").addEventListener("change", () => {
  let newRole = document.querySelector("#new-role").value;
  if (newRole == "student") {
    document
      .querySelector("#student-class")
      .classList.remove("visually-hidden");
    document
      .querySelector("#student-lesson")
      .classList.remove("visually-hidden");

    document.querySelector("#teacher-class").classList.add("visually-hidden");
    document.querySelector("#teacher-branch").classList.add("visually-hidden");
  } else if (newRole == "teacher") {
    document
      .querySelector("#teacher-class")
      .classList.remove("visually-hidden");
    document
      .querySelector("#teacher-branch")
      .classList.remove("visually-hidden");

    document.querySelector("#student-class").classList.add("visually-hidden");
    document.querySelector("#student-lesson").classList.add("visually-hidden");
  }
});
let users = JSON.parse(localStorage.getItem("users"));
let user = "";
getUserBtn.addEventListener("click", () => {
  const getUserId = document
    .getElementById("get-user-input")
    .value.toLowerCase();
  console.log(users);
  user = users.filter((us) => us.id == getUserId);
  console.log(user);

  // user || (document.getElementById("del-mes").innerText = "Entered wrong Id");
  if (user == false) {
    document.getElementById("del-mes").innerText = "Entered wrong Id";
  } else {
    document.getElementById("del-name").innerText = user[0].name;
    document.getElementById("del-id").innerText = user[0].id;
    document.getElementById("del-role").innerText = user[0].role;
  }
});
delReset.addEventListener("click", () => {
  document.getElementById("del-name").innerText = "";
  document.getElementById("del-id").innerText = "";
  document.getElementById("del-role").innerText = "";
  document.getElementById("get-user-input").value = "";
  user = "";
});

delUser.addEventListener("click", () => {
  users = users.filter((us) => us.id != user[0].id);
  localStorage.setItem("users", JSON.stringify(users));
});
document.getElementById("get-user-input").addEventListener("input", () => {
  document.getElementById("del-mes").innerText = "";
});
