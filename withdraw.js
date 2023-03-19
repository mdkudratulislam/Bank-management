// step-1: add event listener to the deposit button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-7:clear the deposit vale
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3:Get the current deposit amount
    // for non-input use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previosWithdrawTotalString = withdrawTotalElement.innerText;
    const previosWithdrawTotal = parseFloat(previosWithdrawTotalString);

    //step-5: get ballance current total
    const balanceTotal = document.getElementById('balance-remain');
    const previosBalanceTotalString = balanceTotal.innerText;
    const previosBalanceTotal = parseFloat(previosBalanceTotalString);

    if (newWithdrawAmount > previosBalanceTotal) {
        alert('A sad news for you, you have not much Money!!')
        return;
    }
    // step-4: add value of the total deposit
    const currentWithdrawTotal = previosWithdrawTotal + newWithdrawAmount;
    //set the deposit total
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //step-6: calculete current total balance
    const currentBalanceTotal = previosBalanceTotal - newWithdrawAmount;
    //set the balance total
    balanceTotal.innerText = currentBalanceTotal;

})