document.querySelector("#basicCalculation").addEventListener("click", function() {
  let num1 = parseFloat(document.querySelector("#value1").value);
  let num2 = parseFloat(document.querySelector("#value2").value);
  let operator = document.querySelector("#basic-operator").value;

  let result;

  switch(operator) {
    case "Addition":
      result = num1 + num2;
      break;
    case "Subtraction":
      result = num1 - num2;
      break;
    case "Multiplication":
      result = num1 * num2;
      break;
    case "Division":
      if (num2 == 0) {
        result = "Cannot divide by zero";
      } else {
        result = num1 / num2;
      }
      break;
    case "Modulo":
      result = num1 % num2;
      break;
    default:
      result = "Not a valid operator was specified";
      break;
  }

  document.querySelector(".basicCalculationOutput").textContent = result;
});

document.querySelector("#statisticsCalculation").addEventListener("click", function() {
  let statisticsValues = document.querySelector("#valuesForStatistics").value.split(",").map(Number);
  let operator = document.querySelector("#analysis-operator").value;

  let result;

  switch(operator) {
    case "Standard Deviation":
      const mean = statisticsValues.reduce((acc, b) => acc + b, 0) / statisticsValues.length;
      const diffs = statisticsValues.map(x => x - mean);
      const squaredDiffs = diffs.map(x => Math.pow(x, 2))
      const sum = squaredDiffs.reduce((acc, b) => acc + b, 0);
      result = Math.sqrt(sum / statisticsValues.length);
      break;
    default:
      result = "Not a valid operator was specified"
      break;
  }

  document.querySelector(".statisticsCalculationOutput").textContent = result
});