var button = document.createElement("button");
var clearButton = document.getElementById("clear-button");
let cleared = false;
let arr = [];
var summaryField = document.getElementById("summary-submission");
var sumh2 = document.getElementById("summary-field");
var desh2 = document.getElementById("description-field");
var field = document.getElementById("submission");
var copied = document.createElement("p")
document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

function handleSubmit(event) {
  arr = [];
  event.preventDefault();
  var date_val =
    parseInt(event.target[6].value.substring(6, 10)) +
    "-" +
    parseInt(event.target[6].value.substring(0, 2)) +
    "-" +
    parseInt(event.target[6].value.substring(3, 5));
  var date_format = new Date(date_val);
  var now = new Date();
  var thirtyDays = 30 * 24 * 60 * 60 * 1000;
  const timeDiff = now.getTime() - date_format.getTime();
  if (timeDiff >= thirtyDays) {
    alert("Requested restore date is older than 30 days; cannot restore");
    return;
  } 
  var pattern =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
  var date_time_regex =
    /^\d{2}\/\d{2}\/\d{4} [012]{0,1}[0-9]:[0-6][0-9][ECMP]ST|UTC $/;
  if (!date_time_regex.test(event.target[6].value)) {
    alert(
      "The date and time to restore to is not in the correct format please ensure it is: MM/DD/YYYY HH:MM[timezone] "
    );
    return;
  }
  if (!pattern.test(event.target[4].value)) {
    alert("The Customer URL is invalid, please ensure it begins with https://");
    return;
  }
  if (!date_regex.test(event.target[7].value)) {
    alert(
      "The Requested Due Date is not in the correct format, please ensure it is: MM/DD/YYYY"
    );
    return;
  }

  alert(
    "Please review the confluence documentation to ensure all required details are included before continuing."
  );
  clearButton.style.visibility = "visible";

  var summary = document.createElement("h3");
  var dataCenter = document.createElement("h3");
  var environment = document.createElement("h3");
  var url = document.createElement("h3");
  var customerName = document.createElement("h3");
  var source = document.createElement("h3");
  var dueDate = document.createElement("h3");
  var priority = document.createElement("h3");
  var escalate = document.createElement("h3");
  var approved = document.createElement("h3");
  var explanation = document.createElement("h3");

  arr.push(
    dataCenter,
    environment,
    url,
    customerName,
    source,
    dueDate,
    priority,
    escalate,
    approved,
    explanation,
    button
  );
  summary.textContent =
    "Lockpath | " + event.target[5].value + " | " + event.target[1].value;
  dataCenter.textContent = event.target[2].value;
  environment.textContent = event.target[3].value;
  url.textContent = event.target[4].value;
  customerName.textContent = event.target[5].value;
  source.textContent = event.target[6].value;
  dueDate.textContent = event.target[7].value;
  priority.textContent = event.target[8].value;
  escalate.textContent = event.target[9].value;
  approved.textContent = event.target[10].value;
  explanation.textContent = event.target[11].value;
  button.textContent = "Copy to Clipboard";

  summary.classList = "num";

  sumh2.style.visibility = "visible";
  desh2.style.visibility = "visible";
  field.style.visibility = "visible";
  summaryField.style.visibility = "visible";
  clipboard.style.visibility = "visible";

  summaryField.appendChild(summary);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let num = "a";
    num = document.createElement("h3");
    num.style.fontWeight = "700";
    num.classList = "num";
    element.classList = "description";
    element.style.fontWeight = "400";
    num.textContent = event.target[i + 2].name + " ";
    field.appendChild(num);
    num.appendChild(element);
    num = num + "a";
  }
  infoForm.reset();
  var enter = document.getElementById("form-input");
  enter.remove();
}
clearButton.onclick = () => {
  cleared = !cleared;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.remove();
  }
  var removeNum = document.querySelectorAll(".num");
  removeNum.forEach((el) => el.remove());

  sumh2.style.visibility = "hidden";
  desh2.style.visibility = "hidden";
  summaryField.style.visibility = "hidden";

  var newInput = document.createElement("input");
  newInput.setAttribute("id", "form-input");
  newInput.setAttribute("type", "submit");
  newInput.setAttribute("value", "Enter");
  newInput.style.cursor = "pointer";
  newInput.style.color = "#ffff";
  newInput.style.textAlign = "center";
  newInput.style.height = "100px";
  var fieldSet = document.getElementById("fieldSet");
  fieldSet.after(newInput);
  clearButton.style.visibility = "hidden";
  console.log(arr);
  clipboard.style.visibility = "hidden";
  copied.remove()
};
button.onclick = async () => {
  var clip = document.getElementById("clipboard");
  button.innerText = "";
  clearButton.innerText = "";
  var clipText = clip.innerText;
  await navigator.clipboard.writeText(clipText);
  button.innerText = "Copy to Clipboard";
  clearButton.innerText = "Clear";
  copied.textContent="--copied to clipboard--"
  copied.style.color="green"
  copied.style.fontWeight="700"
  clearButton.after(copied)
};

var infoForm = document.getElementById("form");
infoForm.addEventListener("submit", handleSubmit);
