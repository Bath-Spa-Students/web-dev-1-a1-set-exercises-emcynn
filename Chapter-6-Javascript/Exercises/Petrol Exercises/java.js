// DECLARE VARIABLES
const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const calculateButton = document.getElementById('calculate');
const totalAmtDisplay = document.getElementById('totalAmt');

// CREATE EVENT LISTENER FOR BUTTON
calculateButton.addEventListener('click', () => {
    // GET USER INPUT
    const amtPerLiter = parseFloat(costInput.value);
    const litersPurchased = parseFloat(litersInput.value);

    // CALCULATE TOTAL AMOUNT
    const totalAmt = amtPerLiter * litersPurchased;

    // SHOW TOTAL AMOUNT
    totalAmtDisplay.textContent = `Total Amount: AED${totalAmt.toFixed(2)}`;
});