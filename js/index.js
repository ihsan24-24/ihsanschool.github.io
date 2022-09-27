const entry = document.getElementById("entry");
const link = document.getElementById("link");
let directory = [
  {
    name: "mehmet",
    id: "di9090",
    role: "directory",
    password: "1234",
  },
];

window.addEventListener("load", () => {
  localStorage.setItem("directory", JSON.stringify(directory));
});
entry.addEventListener("click", () => {
  let name = document.querySelector("#name").value;
  let pass = document.querySelector("#password").value;
  let role = document.querySelector("#menu").value;
  let id = document.querySelector("#id").value;
  isRigth(
    id.toLowerCase(),
    name.toLowerCase(),
    pass.toLowerCase(),
    role.toLowerCase()
  );
});

function isRigth(id, name, pass, role) {
  console.log(name, id, pass, role);
  let directoryUser = JSON.parse(localStorage.getItem("directory"));
  let usersLocal = JSON.parse(localStorage.getItem("users"));
  let user;
  // usersLocal && (user = usersLocal.filter((u) => id == u.id));  sometimes if turnery don't run
  if (usersLocal) {
    console.log("calisti");
    user = usersLocal.filter((u) => id == u.id);
  }
  console.log("user", user);
  localStorage.setItem("user", JSON.stringify(user));
  if (role == "directory") {
    if (
      directoryUser[0].name == name &&
      directoryUser[0].password == pass &&
      directoryUser[0].id == id
    ) {
      link.href = "directory.html";
      document
        .querySelector("#login-correct")
        .classList.remove("visually-hidden");
    } else {
      document
        .querySelector("#login-wrong")
        .classList.remove("visually-hidden");
    }
  } else {
    if (!user) {
      document
        .querySelector("#login-wrong")
        .classList.remove("visually-hidden");
    } else if (
      user[0].name == name &&
      user[0].password == pass &&
      user[0].role == role
    ) {
      document
        .querySelector("#login-correct")
        .classList.remove("visually-hidden");
      if (role == "student") {
        link.href = "student.html";
      } else if (role == "teacher") {
        link.href = "teacher.html";
      }
    } else {
      document
        .querySelector("#login-wrong")
        .classList.remove("visually-hidden");
    }
  }
}
