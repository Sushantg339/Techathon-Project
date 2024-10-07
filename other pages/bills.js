

const tableBody = document.getElementById('billsTable').querySelector('tbody');


function loadBills() {
    const bills = JSON.parse(localStorage.getItem('bills')) || [];
    tableBody.innerHTML = '';
    bills.forEach(bill => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${bill.name}</td><td>${bill.amount}</td><td>${bill.status}</td><td>${bill.date}</td>`;
        tableBody.appendChild(row);
    });
}


document.getElementById('billForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const billName = document.getElementById('billName').value;
    const amount = document.getElementById('amount').value;
    const status = document.getElementById('status').value;
    const date = document.getElementById('date').value;
    // const action = document.getElementById('Action');

    const newBill = { name: billName, amount: amount, status: status, date: date};

    const bills = JSON.parse(localStorage.getItem('bills')) || [];
    bills.push(newBill);
    localStorage.setItem('bills', JSON.stringify(bills));
    function deleteBill(index) {
        const bills = JSON.parse(localStorage.getItem('bills')) || [];
        bills.splice(index, 1);
        localStorage.setItem('bills', JSON.stringify(bills));
        loadBills();
    }

    loadBills();


    document.getElementById('billForm').reset();
});


loadBills();
