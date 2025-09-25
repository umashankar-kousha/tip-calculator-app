let billAmountEl = document.getElementById("billAmount");
let tipPercentageEl = document.getElementById("tipPercentage");
let numberOfPersonsEl = document.getElementById("numberOfPersons");
let calculateTipBtnEl = document.getElementById("calculateTipBtn");
let resetBtnEl = document.getElementById("resetBtn");
let formEl = document.getElementById("form");
let currencyEl = document.getElementById("currency");
let billAmountContainerEl = document.getElementById("billAmountContainer");
let tipContainerEl = document.getElementById("tipContainer");
let numberOfpersonsContainerEl = document.getElementById(
  "numberOfpersonsContainer"
);
let tipEl = document.getElementById("tip");
let totalEl = document.getElementById("total");
let perPersonEl = document.getElementById("perPerson");

let warningEl = document.createElement("p");
warningEl.textContent = "required";
warningEl.classList.add("warning");

billAmountEl.addEventListener("blur", () => {
  if (billAmountEl.value == "") {
    billAmountContainerEl.appendChild(warningEl);
  } else {
    billAmountContainerEl.removeChild(warningEl);
  }
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let billAmount = parseInt(billAmountEl.value);

  let tipPercentage = parseInt(tipPercentageEl.value);
  let persons = parseInt(numberOfPersonsEl.value);
  let tip = Math.round((billAmount / 100) * tipPercentage);
  let total = tip + billAmount;

  let perPerson = total / persons;

  let symbol = currencyEl.value;
  tipEl.innerHTML = `${symbol} ${tip}`;
  totalEl.innerHTML = `${symbol} ${Math.round(total)}`;
  perPersonEl.innerHTML = `${symbol} ${Math.round(perPerson)}`;
});
