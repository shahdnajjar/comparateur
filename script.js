document.addEventListener("DOMContentLoaded", function() {
  const co2Input = document.getElementById('co2Input');
  const busComparison = document.getElementById('busComparison');
  const laptopComparison = document.getElementById('laptopComparison');
  const mealsComparison = document.getElementById('mealsComparison');

  function calculateComparisons() {
    const co2Value = parseFloat(co2Input.value);
    if (isNaN(co2Value)) {
  // Clear comparison labels when input is invalid or empty
  busComparison.textContent = "= 0 équivalents bus (moteur thermique)";
  laptopComparison.textContent = "= 0 équivalents ordinateur portable";
  mealsComparison.textContent = "= 0 équivalents repas végétaliens";
  return;
}
if (co2Value <= 0 ){
  alert("le nombre doit etre positif");
  co2Input.value="";
  return; 
}

    const busEquivalent = co2Value / (0.217 * 1000);
    const laptopEquivalent = co2Value / (0.086 * 1000);
    const mealsEquivalent = co2Value / (0.82 * 1000);

    busComparison.textContent = `= ${busEquivalent.toFixed(2)} equivalents bus (moteur thermique)`;
    laptopComparison.textContent = `= ${laptopEquivalent.toFixed(2)} equivalents ordinateur portable`;
    mealsComparison.textContent = `= ${mealsEquivalent.toFixed(2)} equivalents repas végétaliens`;
  }

  co2Input.addEventListener('input', calculateComparisons);
});