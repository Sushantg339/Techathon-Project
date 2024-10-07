document.getElementById('add-bill-btn').addEventListener('click', function() {
    const billName = document.getElementById('bill-name').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;

    if (billName && amount && date) {
        const tableBody = document.getElementById('bill-body');
        const newRow = tableBody.insertRow();

        newRow.innerHTML = `
            <td>${billName}</td>
            <td>${amount}</td>
            <td>${date}</td>
            <td>Pending</td>
            <td>
                <input type="checkbox" class="paid-checkbox" name="box[]" /> Paid
                <button class="delete-btn">Delete</button>
            </td>
        `;

    
        document.getElementById('bill-name').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('date').value = '';

        
        document.getElementById('bill-table').style.display = 'block';
    } else {
        alert('Please fill in all fields');
    }
});


document.getElementById('show-bills-btn').addEventListener('click', function() {
    document.getElementById('bill-table').style.display = 'block';
});


document.getElementById('bill-body').addEventListener('change', function(e) {
    if (e.target.classList.contains('paid-checkbox')) {
        const checkbox = e.target;
        const statusCell = checkbox.parentElement.parentElement.cells[3]; 
        if (checkbox.checked) {
            statusCell.innerText = 'Paid'; 
            checkbox.disabled = true; 
        }
    }
});


document.getElementById('bill-body').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const row = e.target.parentElement.parentElement; 
        row.remove();
    }
});


document.getElementById('hide-bills-btn').addEventListener('click', function() {
    document.getElementById('bill-table').style.display = 'none';
});


document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; 
    alert("Logged Out Successfully");
});


