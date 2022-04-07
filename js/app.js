// Handle Calculate Button Event

function getInput(inputParam) {
    const input = document.getElementById(inputParam);
    const inputAmountValue = input.value;
    const inputAmount = parseFloat(inputAmountValue);

    return inputAmount;

}

document.getElementById('calculate-btn').addEventListener('click', function () {

    // income
    const incomeAmount = getInput('income-input');


    // food
    const foodAmount = getInput('food-input');


    // rent
    const rentAmount = getInput('rent-input');


    // clothes
    const clothesAmount = getInput('clothes-input');


    // input error handler

    if (incomeAmount && foodAmount && rentAmount && clothesAmount) {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;
        const expenses = totalExpenses.innerText;
        // balance error handler
        if (expenses < incomeAmount) {
            const totalBalance = document.getElementById('total-balance');
            totalBalance.innerText = incomeAmount - parseFloat(expenses);

            const balanceError = document.getElementById('balance');
            balanceError.style.display = 'none';
        }
        else {
            const balanceError = document.getElementById('balance');
            balanceError.style.display = 'block';
        }
        const inputError = document.getElementById('error');
        inputError.style.display = 'none';
    }
    else {
        const inputError = document.getElementById('error');
        inputError.style.display = 'block';
    }


});


// Handle Savings Button Events

document.getElementById('saving-btn').addEventListener('click', function () {

    const savingPercantageInput = document.getElementById('saving-input');
    const savingPercantage = savingPercantageInput.value;


    const incomeAmount = getInput('income-input');
    const totalBalance = document.getElementById('total-balance');
    const balance = parseFloat(totalBalance.innerText);

    // saving calculation

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = incomeAmount * parseFloat(savingPercantage) * 0.01;
    const savings = parseFloat(savingAmount.innerText);


    // remaining balance update

    const savingError = document.getElementById('saving-error');
    if (totalBalance.innerText > savingAmount.innerText) {
        const remainingBalanceField = document.getElementById('remaining-amount');
        remainingBalanceField.innerText = parseFloat(balance) - parseFloat(savings);
        savingError.style.display = 'none';

    }
    else {
        savingError.style.display = 'block';
    }

})