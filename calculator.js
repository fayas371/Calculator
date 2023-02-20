// This function clear all the values
function clearScreen() {
  document.getElementById("values").value = "";
}

// This function display values
function display(value) {
  document.getElementById("values").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("values").value;
  var q = eval(p);
  document.getElementById("values").value = q;
}
// This function eliminates the last number to be replaced
function Backspace() {
  var backspace=document.getElementById('values').value
  backspace=backspace.slice(0,-1)
  document.getElementById('values').value=backspace
}
