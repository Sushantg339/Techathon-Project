
const tableBody = document.getElementById('billsTable').querySelector('tbody');
const monthlyIncomeInput = document.getElementById('monthlyIncome');
const remainingAmountDisplay = document.getElementById('remainingAmount');
let totalAmount = 0;
let incomeEntered = false;

// Load bills from local storage
function loadBills() {
    const bills = JSON.parse(localStorage.getItem('bills')) || [];
    tableBody.innerHTML = '';
    totalAmount = 0; // Reset total amount
    bills.forEach((bill, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${bill.name}</td>
                    <td>${bill.amount}</td>
                    <td>${bill.date}</td>
                    <td>
                        <button onclick="deleteBill(${index})">Delete</button>
                    </td>
                `;
        tableBody.appendChild(row);
        totalAmount += parseFloat(bill.amount); // Accumulate the total amount
    });
    updateRemainingAmount(); // Update remaining amount after loading bills
}

// Monthly Income input handling
monthlyIncomeInput.addEventListener('change', function () {
    if (!incomeEntered) {
        monthlyIncomeInput.disabled = true;
        incomeEntered = true;
    }
});

function editIncome() {
    monthlyIncomeInput.disabled = false;
    monthlyIncomeInput.value = ''; // Clear the input for new entry
    incomeEntered = false; // Reset the flag
}

// Add bill on form submission
document.getElementById('billForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const billName = document.getElementById('billName').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;

    const newBill = { name: billName, amount: amount, date: date };

    const bills = JSON.parse(localStorage.getItem('bills')) || [];
    bills.push(newBill);
    localStorage.setItem('bills', JSON.stringify(bills));

    loadBills(); // Reload bills
    document.getElementById('billForm').reset(); // Reset the form
});

// Delete bill function
function deleteBill(index) {
    const bills = JSON.parse(localStorage.getItem('bills')) || [];
    bills.splice(index, 1); // Remove the bill at the specified index
    localStorage.setItem('bills', JSON.stringify(bills)); // Update local storage
    loadBills(); // Reload bills
}

// Update remaining amount based on monthly income and total bill amount
function updateRemainingAmount() {
    const monthlyIncome = parseFloat(monthlyIncomeInput.value) || 0;
    const remainingAmount = monthlyIncome - totalAmount;
    remainingAmountDisplay.textContent = remainingAmount.toFixed(2);
}

// Initial load of bills
loadBills();

document.querySelector("#logout-btn").addEventListener("click", ()=>{
    window.location.href = "index.html";
    alert("Logged Out Successfullt");
})
