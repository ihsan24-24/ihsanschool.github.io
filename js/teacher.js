let ok = document.getElementById("note-ok");
let teClass = document.getElementById("te-class");
let stName = document.getElementById("student-name");
let user = JSON.parse(localStorage.getItem("user"));
window.addEventListener("load", () => {
  user[0].class.forEach((cls) => {
    teClass.innerHTML += `<option value="${cls}">${cls}</option>`;
  });
});
ok.addEventListener("click", () => {
  let studentId = document.querySelector("#student-name").value;
  let notes = document.querySelectorAll("#not");
  let students1 = JSON.parse(localStorage.getItem("users"));
  let students = students1.filter((stdnt) => stdnt.id == studentId);
  let users = students1.filter((stdnt) => stdnt.id != studentId);
  let newArr = [];
  notes.forEach((item) => newArr.push(item.value));
  let sum = 0;
  newArr.forEach((item) => (sum += Number(item)));
  newArr.push((sum / 3).toFixed(0));
  newArr.push(user[0].name);
  students[0][user[0].lesson] = newArr;
  users.push(students[0]);
  localStorage.setItem("users", JSON.stringify(users));
  document.querySelector("#add-notes").classList.add("text-success");
  document.querySelector("#add-notes").innerText = "Add Notes...";
});
teClass.addEventListener("change", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  let students = users.filter((item) => item.role == "student");
  stName.innerHTML = `<option>Select Student</option>`;
  students.forEach((st) => {
    if (
      teClass.value.includes(st.class) &&
      st.lesson.includes(user[0].lesson)
    ) {
      stName.innerHTML += `<option value="${st.id}">${st.name}</option>`;
    }
  });
});
