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
    // errorhandle(incomeAmount);

    // food
    const foodAmount = getInput('food-input');
    // errorhandle(foodAmount)

    // rent
    const rentAmount = getInput('rent-input');
    // errorhandle(rentAmount)

    // clothes
    const clothesAmount = getInput('clothes-input');
    // errorhandle(clothesAmount)

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;
    const expenses = totalExpenses.innerText;


    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = incomeAmount - parseFloat(expenses);


});


// Handle Savings Button Events

document.getElementById('saving-btn').addEventListener('click', function () {
    const incomeAmount = document.getElementById('income-input');
    const incomeValue = incomeAmount.innerText;
    const income = parseFloat(incomeValue);

    const balanceAmount = document.getElementById('total-balance');
    const balanceValue = balanceAmount.innerText;
    const balance = parseFloat(balanceValue);
    console.log(balance);



    // saving calculation

    const savingAmountPercantage = getInput('saving-input');
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = savingAmountPercantage * income * 0.01;
    const savings = savingAmount.innerText;

    // remaining balance update

    const remainingAmount = document.getElementById('remaining-amount');
    remainingAmount.innerText = balance - parseFloat(savings);


})