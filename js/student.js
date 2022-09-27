const stNotesResult = document.getElementById("st-notes");
let usersLocal = JSON.parse(localStorage.getItem("users"));
let user = JSON.parse(localStorage.getItem("user"));
let st = usersLocal.filter((std) => std.id == user[0].id);
const stResult = document.getElementById("student-result");
window.addEventListener("load", () => {
  user[0].lesson.filter((lesson) => {
    stResult.innerHTML += `<option value="${lesson}">${lesson}</option>`;
  });
});
document.querySelector("#student-result").addEventListener("change", () => {
  stNotesResult.innerHTML = "<p></p>";
  if (st[0][stResult.value]) {
    stNotesResult.innerHTML += `<p class = "brdr">Teacher Name  :&nbsp;&nbsp; ${
      st[0][stResult.value][4] || 0
    }</p> `;
    stNotesResult.innerHTML += `<p class = "brdr">Student Name  :&nbsp;&nbsp; ${
      st[0].name || 0
    }</p> `;
    stNotesResult.innerHTML += `<p class = "brdr">Class  :&nbsp;&nbsp; ${
      st[0].class || 0
    }</p> `;
    stNotesResult.innerHTML += `<p class = "brdr">Note 1  :&nbsp;&nbsp; ${
      st[0][stResult.value][0] || 0
    }</p> `;
    stNotesResult.innerHTML += `<p class = "brdr">Note 2  :&nbsp;&nbsp; ${
      st[0][stResult.value][1] || 0
    }</p> `;
    stNotesResult.innerHTML += `<p class = "brdr">Note 3  :&nbsp;&nbsp; ${
      st[0][stResult.value][2] || 0
    }</p> `;
    stNotesResult.innerHTML += `<p class = "brdr">Avarge  :&nbsp;&nbsp; ${
      st[0][stResult.value][3] || 0
    }</p>  `;
  } else {
    stNotesResult.innerHTML += `<p class = "brdr">Note 1  :&nbsp;&nbsp; 0 </p> `;
    stNotesResult.innerHTML += `<p class = "brdr">Note 2  :&nbsp;&nbsp; 0</p>`;
    stNotesResult.innerHTML += `<p class = "brdr">Note 3  :&nbsp;&nbsp; 0</p>`;
    stNotesResult.innerHTML += `<p class = "brdr">Avarge  :&nbsp;&nbsp; 0</p>`;
  }
});
