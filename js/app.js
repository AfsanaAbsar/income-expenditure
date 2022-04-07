// Handle Calculate Button Event

document.getElementById('calculate-btn').addEventListener('click', function () {

    // income

    const incomeInput = document.getElementById('income-input');
    const incomeAmountValue = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountValue);
    console.log(incomeAmount);
    // food

    const foodInput = document.getElementById('food-input');
    const foodAmountValue = foodInput.value;
    const foodAmount = parseFloat(foodAmountValue);
    console.log(foodAmount);
    // rent

    const rentInput = document.getElementById('rent-input');
    const rentAmountValue = rentInput.value;
    const rentAmount = parseFloat(rentAmountValue);
    console.log(rentAmount);
    // clothes

    const clothesInput = document.getElementById('clothes-input');
    const clothesAmountValue = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountValue);
    console.log(clothesAmount);

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;
    const expenses = totalExpenses.innerText;

    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = incomeAmount - parseFloat(expenses);
})