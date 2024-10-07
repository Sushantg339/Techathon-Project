const addTransactionBtn = document.getElementById('add-transaction-btn');
const viewTableBtn = document.getElementById('view-table-btn');
const hideTableBtn = document.getElementById('hide-table-btn');
const transactionTable = document.getElementById('transaction-table');
const transactionBody = document.getElementById('transaction-body');

addTransactionBtn.addEventListener('click', async function(e) {
    e.preventDefault();
    const name = document.getElementById('transaction-name').value;
    const amountt = parseFloat(document.getElementById('amount').value);
    const datee = document.getElementById('date').value;
    const typee = document.getElementById('type').value;

    // Validate all fields are filled
    if (name && amount && date && type) {
        const transactionData = {
            personName: name,
            amount: amountt,
            type: typee,
            date: datee
            
        };

        console.log(transactionData)

        try {
            console.log(transactionData)
            const response = await fetch('http://localhost:8088/addTransaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(transactionData)
            });

            console.log(response)

            if (response.ok) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${name}</td>
                    <td>${amountt.toFixed(2)}</td>
                    <td>${datee}</td>
                    <td>${typee}</td>
                `;
                transactionBody.appendChild(newRow);

                // Update amounts
                updateAmounts(amountt, typee);

                // Clear input fields for new entry
                clearFields();
            } else {
                alert('Failed to add transaction. Please try again.');
            }
        } catch (error) {
            console.log('Error:', error);
            alert('An error occurred while adding the transaction.');
        }
    } else {
        alert("Please fill all fields correctly before adding a transaction.");
    }
});


viewTableBtn.addEventListener('click', function() {
    transactionTable.style.display = 'block';
    fetchTransactions();
});

hideTableBtn.addEventListener('click', function() {
    transactionTable.style.display = 'none';
});

async function fetchTransactions() {
    try {
        const response = await fetch('http://localhost:8088/getAllTransactions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response)
        if (response.ok) {
            const transactions = await response.json();
            transactionBody.innerHTML = ''; // Clear existing rows before adding new ones

            transactions.forEach(transaction => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${transaction.personName}</td>
                    <td>${transaction.amount.toFixed(2)}</td>
                    <td>${transaction.date}</td>
                    <td>${transaction.type}</td>
                `;
                transactionBody.appendChild(newRow);

                // Update amounts for each transaction
                updateAmounts(transaction.amount, transaction.type);
            });
        } else {
            alert('Failed to fetch transactions.');
        }
    } catch (error) {
        console.log('Error fetching transactions:', error);
        alert('An error occurred while fetching transactions.');
    }
}

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

    totalAmount.innerText = (credit + debit).toFixed(2);
}

document.getElementById("logout-btn").addEventListener("click",function(){
    window.location.href= "index.html";
    alert("Logged Out Successfully");
})