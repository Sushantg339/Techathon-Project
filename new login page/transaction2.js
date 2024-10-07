const addTransactionBtn = document.getElementById('add-transaction-btn');
const viewTableBtn = document.getElementById('view-table-btn');
const hideTableBtn = document.getElementById('hide-table-btn');
const transactionTable = document.getElementById('transaction-table');
const transactionBody = document.getElementById('transaction-body');

addTransactionBtn.addEventListener('click', function() {
    const name = document.getElementById('transaction-name').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;

    // Validate all fields are filled
    if (name && amount && date && type) {
        // Insert new row into the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${amount.toFixed(2)}</td>
            <td>${date}</td>
            <td>${type}</td>
        `;
        transactionBody.appendChild(newRow);

        // Update amounts
        updateAmounts(amount, type);

        // Clear input fields for new entry
        clearFields();
    } else {
        alert("Please fill all fields correctly before adding a transaction.");
    }
});

viewTableBtn.addEventListener('click', function() {
    transactionTable.style.display = 'block';
});

hideTableBtn.addEventListener('click', function() {
    transactionTable.style.display = 'none';
});

// Function to clear input fields after adding a transaction
function clearFields() {
    document.getElementById('transaction-name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';
    document.getElementById('type').value = 'debit'; // Reset type to default
}

function updateAmounts(amount, type) {
    const debitAmount = document.getElementById('debit-amount');
    const creditAmount = document.getElementById('credit-amount');
    const totalAmount = document.getElementById('total-amount');

    let debit = parseFloat(debitAmount.innerText);
    let credit = parseFloat(creditAmount.innerText);

    if (type === 'debit') {
        debit += amount;
        debitAmount.innerText = debit.toFixed(2);
    } else {
        credit += amount;
        creditAmount.innerText = credit.toFixed(2);
    }

    totalAmount.innerText = (credit - debit).toFixed(2);
}

document.getElementById("logout-btn").addEventListener("click",function(){
    window.location.href= "index.html";
    alert("Logged Out Successfully");
})