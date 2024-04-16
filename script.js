// Get references to the input field and comparison labels
const co2Input = document.getElementById('co2Input');
const busComparison = document.getElementById('busComparison');
const laptopComparison = document.getElementById('laptopComparison');
const mealsComparison = document.getElementById('mealsComparison');

// Function to calculate and display comparisons
function calculateComparisons() {
  const co2Value = parseFloat(co2Input.value);
  if (isNaN(co2Value) || co2Value <= 0) {
    return; // Don't update if input is invalid
  }

  // Calculate comparisons
  const busEquivalent = co2Value / (0.217 * 1000); // Assuming 0.217 kg CO2/km for bus travel
  const laptopEquivalent = co2Value / (0.086 * 1000); // Assuming 0.086 kg CO2/kg laptop
  const mealsEquivalent = co2Value / (0.82 * 1000); // Assuming 0.82 kg CO2/kg beef

  // Display comparisons with appropriate labels
  busComparison.textContent = `= ${busEquivalent.toFixed(2)} équivalents bus (moteur thermique)`;
  laptopComparison.textContent = `= ${laptopEquivalent.toFixed(2)} équivalents ordinateur portable`;
  mealsComparison.textContent = `= ${mealsEquivalent.toFixed(2)} équivalents repas végétaliens`;
}

// Add event listener to the input field for automatic updates
co2Input.addEventListener('input', calculateComparisons);
