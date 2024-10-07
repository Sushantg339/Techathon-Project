// Variables for tracking income and remaining balance
let monthlyIncome = 0;
let remainingAmount = 0;
let expenses = [];


document.getElementById('edit-income-btn').addEventListener('click', function() {
    document.getElementById('monthly-income-input').style.display = 'block';
    document.getElementById('save-income-btn').style.display = 'block';
    document.getElementById('edit-income-btn').style.display = 'none';
});

document.getElementById('save-income-btn').addEventListener('click', function() {
    const incomeValue = parseFloat(document.getElementById('monthly-income-input').value);
    if (!isNaN(incomeValue) && incomeValue > 0) {
        monthlyIncome = incomeValue;
        remainingAmount = monthlyIncome - expenses.reduce((acc, exp) => acc + exp.amount, 0); 
        document.getElementById('monthly-income-display').textContent = monthlyIncome.toFixed(2);
        document.getElementById('monthly-income-input').style.display = 'none';
        document.getElementById('save-income-btn').style.display = 'none';
        document.getElementById('edit-income-btn').style.display = 'block';
    } else {
        alert('Please enter a valid monthly income.');
    }
});


document.getElementById('add-expense-btn').addEventListener('click', function() {
    const expenseName = document.getElementById('expense-name').value.trim();
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseDate = document.getElementById('expense-date').value;

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0 && expenseDate) {
        
        if (expenseAmount > remainingAmount) {
            alert('Expense exceeds remaining monthly income!');
            return;
        }

        
        const expense = {
            name: expenseName,
            amount: expenseAmount,
            date: expenseDate
        };
        expenses.push(expense);

        remainingAmount -= expenseAmount;

        
        addExpenseToTable(expense);

        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
        document.getElementById('expense-date').value = '';
    } else {
        alert('Please fill all the fields correctly.');
    }
});

function addExpenseToTable(expense) {
    const tableBody = document.getElementById('expense-table-body');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${expense.name}</td>
        <td>₹${expense.amount.toFixed(2)}</td>
        <td>${expense.date}</td>
        <td>₹${remainingAmount.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    
    row.querySelector('.delete-btn').addEventListener('click', function() {
        const expenseIndex = Array.from(tableBody.children).indexOf(row);
        deleteExpense(expenseIndex);
        tableBody.removeChild(row);
    });

    tableBody.appendChild(row);
}


function deleteExpense(index) {
    const deletedExpense = expenses.splice(index, 1)[0];
    remainingAmount += deletedExpense.amount;

   
    const rows = document.querySelectorAll('#expense-table-body tr');
    for (let i = index; i < rows.length; i++) {
        const remainingCell = rows[i].querySelectorAll('td')[3];
        remainingCell.textContent = `₹${(remainingAmount + deletedExpense.amount).toFixed(2)}`;
        deletedExpense.amount -= expenses[i]?.amount || 0;
    }

    document.getElementById('monthly-income-display').textContent = remainingAmount.toFixed(2);
}


document.getElementById('view-expense-btn').addEventListener('click', function() {
    document.getElementById('expense-table-container').style.display = 'block';
});

document.getElementById('hide-expense-btn').addEventListener('click', function() {
    document.getElementById('expense-table-container').style.display = 'none';
});

document.getElementById("logout-btn").addEventListener("click",function(){
    window.location.href = "index.html";
    alert("Logged Out Successfully");
})