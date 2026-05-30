let display = document.getElementById("display");

let num1 = "";
let num2 = "";
let operator = "";
let resultSeen = false;

function numButton(num) {
  if (resultSeen) {
    num2 = "";
    resultSeen = false;
  }

  if (operator === "") {
    num1 = num1 + num;
    display.textContent = num1;
  } else {
    num2 = num2 + num;
    display.textContent = num2;
  }
}

function setOperator(op) {
  if (num1 === "") return;
  operator = op;
}

function calculate() {
  if (num1 === "" || num2 === "" || operator === "") return;

  let a = parseFloat(num1);
  let b = parseFloat(num2);
  let result = 0;

  if (operator === "+") result = a + b;
  if (operator === "−") result = a - b;
  if (operator === "×") result = a * b;
  if (operator === "÷") {
    if (b === 0) {
      display.textContent = "Fehler";
      num1 = "";
      num2 = "";
      operator = "";
      return;
    }
    result = a / b;
  }

  display.textContent = result;
  num1 = String(result);
  num2 = "";
  operator = "";
  resultSeen = true;
}

function setPolarity() {
  if (num1 === "") return;
  if (num1.startsWith("-")) {
    num1 = num1.slice(1);
  } else {
    num1 = "-" + num1;
  }
  display.textContent = num1;
}

function deleteButton() {
  if (operator === "") {
    num1 = num1.slice(0, -1);
    display.textContent = num1 === "" ? "0" : num1;
  } else {
    num2 = num2.slice(0, -1);
    display.textContent = num2 === "" ? "0" : num2;
  }
}

function resetButton() {
  num1 = "";
  num2 = "";
  operator = "";
  resultSeen = false;
  display.textContent = "0";
}