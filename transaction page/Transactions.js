document.getElementById('addTransactionButton').addEventListener('click', function() {
    const transactionDate = document.getElementById('transactionDate').value;
    const transactionName = document.getElementById('transactionName').value;
    const transactionAmount = parseFloat(document.getElementById('transactionAmount').value);
    const transactionType = document.getElementById('transactionType').value;

    // Validate input
    if (!transactionDate || !transactionName || isNaN(transactionAmount)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Create a new table row for the transaction
    const transactionList = document.getElementById('transactionList');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${transactionName}</td>
        <td>${transactionAmount.toFixed(2)}</td>
        <td>${transactionDate}</td>
        <td>${transactionType}</td>
    `;

    // Append the new row to the table body
    transactionList.appendChild(row);

    // Update amounts based on transaction type
    updateAmounts(transactionAmount, transactionType);
    clearInputs();
});

function updateAmounts(amount, type) {
    let debitAmount = parseFloat(document.getElementById('debit-amount').innerText);
    let creditAmount = parseFloat(document.getElementById('credit-amount').innerText);
    let totalAmount = parseFloat(document.getElementById('total-amount').innerText);

    if (type === 'debit') {
        debitAmount += amount;
    } else {
        creditAmount += amount;
    }

    totalAmount = creditAmount - debitAmount;

    document.getElementById('debit-amount').innerText = debitAmount.toFixed(2);
    document.getElementById('credit-amount').innerText = creditAmount.toFixed(2);
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}

function clearInputs() {
    document.getElementById('transactionDate').value = '';
    document.getElementById('transactionName').value = '';
    document.getElementById('transactionAmount').value = '';
    document.getElementById('transactionType').value = 'debit';
}
