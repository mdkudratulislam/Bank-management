// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input
    // For input field we use .value to get the value
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
   const newDepositAmount= parseFloat(newDepositAmountString);
    // step-7:clear the deposit vale
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // step-3:Get the current deposit amount
    // for non-input use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
     const previosDepositTotalString = depositTotalElement.innerText;
     const previosDepositTotal=parseFloat(previosDepositTotalString);
     // step-4: add value of the total deposit
     const currentDepositTotal= previosDepositTotal + newDepositAmount;
     //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    //step-5: get ballance current total
    const balanceTotal = document.getElementById('balance-remain');
    const previosBalanceTotalString= balanceTotal.innerText;
    const previosBalanceTotal= parseFloat(previosBalanceTotalString);
    //step-6: calculete current total balance
    const currentBalanceTotal= previosBalanceTotal+newDepositAmount;
    //set the balance total
    balanceTotal.innerText= currentBalanceTotal;
   
})