let billAmountEl = document.getElementById("billAmount");
let tipPercentageEl = document.getElementById("tipPercentage");
let numberOfPersonsEl = document.getElementById("numberOfPersons");
let calculateTipBtnEl = document.getElementById("calculateTipBtn");
let resetBtnEl = document.getElementById("resetBtn");
let formEl = document.getElementById("form");
let currencyEl = document.getElementById("currency");

let tipEl = document.getElementById("tip");
let totalEl = document.getElementById("total");
let perPersonEl = document.getElementById("perPerson");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;
  let billAmount = parseFloat(billAmountEl.value);

  let tipPercentage = parseFloat(tipPercentageEl.value);
  let persons = parseFloat(numberOfPersonsEl.value);

  if (
    billAmount == "" ||
    isNaN(Number(billAmount)) ||
    Number(billAmount) <= 0
  ) {
    alert("Please enter a valid bill amount");
    valid = false;
  }
  if (
    tipPercentage == "" ||
    isNaN(Number(tipPercentage)) ||
    Number(tipPercentage) < 0
  ) {
    alert("Please enter a valid Tip Percentage");

    valid = false;
  }
  if (persons == "" || isNaN(Number(persons)) || Number(persons) <= 0) {
    alert("Please enter a valid number of persons");

    valid = false;
  }
  if (valid) {
    let tip = Math.round((billAmount / 100) * tipPercentage);
    let total = tip + billAmount;

    let perPerson = total / persons;

    let symbol = currencyEl.value;
    tipEl.innerHTML = `${symbol} ${tip}`;
    totalEl.innerHTML = `${symbol} ${Math.round(total)}`;
    perPersonEl.innerHTML = `${symbol} ${Math.round(perPerson)}`;
  }
});

formEl.addEventListener("reset", function (event) {
  tipEl.textContent = "XX.XX";
  totalEl.textContent = "XX.XX";
  perPersonEl.textContent = "XX.XX";
});
