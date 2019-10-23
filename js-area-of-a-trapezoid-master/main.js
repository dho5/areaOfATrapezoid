// Area of a Trapezoid

// Event Listener
document.getElementById('calc-btn').addEventListener('click', calcArea);

// Global Variables
let b1;
let b2;
let height;
let result;

// Event Function
function calcArea() {

  // Input
  b1 = Number(document.getElementById('num1').value);
  b2 = Number(document.getElementById('num2').value);
  height = Number(document.getElementById('num3').value);

  // Process
  result = Number(0.5 * (b1 + b2) * height);
  result = Math.round(result * 100) / 100;

  // Output
  document.getElementById('output').innerHTML = result;
}