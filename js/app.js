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
    console.log(foodAmount);

    // rent
    const rentAmount = getInput('rent-input');
    console.log(rentAmount);

    // clothes
    const clothesAmount = getInput('clothes-input');
    console.log(clothesAmount)

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;
    const expenses = totalExpenses.innerText;

    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = incomeAmount - parseFloat(expenses);
})