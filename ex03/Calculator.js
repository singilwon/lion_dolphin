function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;

  var result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "0으로 나눌 수 없습니다.";
      }
      break;
    default:
      result = "올바른 연산자를 선택해주세요.";
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}

function changeButtonColor() {
  var button = document.querySelector(".button");
  button.style.backgroundColor = "red";
}

function resetButtonColor() {
  var button = document.querySelector(".button");
  button.style.backgroundColor = "green";
}

var button = document.querySelector(".button");
button.addEventListener("mouseover", changeButtonColor);
button.addEventListener("mouseout", resetButtonColor);
