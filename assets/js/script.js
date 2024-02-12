const send = document.getElementById("send");
const message = document.getElementById("message");
const selectProblem = document.getElementById("select-problem");
const user = document.getElementById("user");
const whatsApp = document.getElementById("whatapp-number");
const invoice = document.getElementById("invoice-no");
const description = document.getElementById("description-problem");

let salah = 5;

send.addEventListener("click", function () {
  user.value == ""
    ? (user.style.boxShadow = "0 0 10px 2px red")
    : (user.style.boxShadow = "none"),
    (salah -= 1);
  whatsApp.value == ""
    ? (whatsApp.style.boxShadow = "0 0 10px 2px red")
    : (whatsApp.style.boxShadow = "none"),
    (salah -= 1);
  selectProblem.value == ""
    ? (selectProblem.style.boxShadow = "0 0 10px 2px red")
    : (selectProblem.style.boxShadow = "none"),
    (salah -= 1);
  invoice.value == ""
    ? (invoice.style.boxShadow = "0 0 10px 2px red")
    : (invoice.style.boxShadow = "none"),
    (salah -= 1);
  description.value == ""
    ? (description.style.boxShadow = "0 0 10px 2px red")
    : (description.style.boxShadow = "none"),
    (salah -= 1);

  if (
    user.value != "" &&
    whatsApp.value != "" &&
    selectProblem.value != "" &&
    invoice.value != "" &&
    description.value != ""
  ) {
    message.classList.add(
      "text-center",
      "message",
      "mx-auto",
      "py-1",
      "rounded"
    );
    message.innerHTML = "Berhasil terkirim";
  }
});
