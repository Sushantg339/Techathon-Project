document.getElementById('add-bill-btn').addEventListener('click', async function () {
    const billName = document.getElementById('bill-name').value;
    const amount = document.getElementById('amount').value;
    const datee = document.getElementById('date').value;

    if (billName && amount && datee) {
        const billData = {
            bill_Name: billName,
            bill_Amount: parseFloat(amount),
            date: datee,
            bill_Status:"DUE"
        };

        try {
            // Send the bill data to the backend
            const response = await fetch('http://localhost:8088/addBill', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(billData),
            });

            if (response.ok) {
                const result = await response.text();
                alert(result); // Success message from backend

                // Add the bill to the table (client-side)
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

                // Clear input fields
                document.getElementById('bill-name').value = '';
                document.getElementById('amount').value = '';
                document.getElementById('date').value = '';
                document.getElementById('bill-table').style.display = 'block';
            } else {
                alert('Failed to add bill. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the bill.');
        }
    } else {
        alert('Please fill in all fields');
    }
});



document.getElementById('show-bills-btn').addEventListener('click', async function() {
    try {
        // Fetch bills from the backend
        const response = await fetch('http://localhost:8088/getAllBills', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const bills = await response.json(); // Parse JSON response from the backend
            const tableBody = document.getElementById('bill-body');
            tableBody.innerHTML = ''; // Clear the table body before adding new rows

            // Loop through the fetched bills and add them to the table
            bills.forEach(bill => {
                const newRow = tableBody.insertRow();

                newRow.innerHTML = `
                    <td>${bill.bill_Name}</td>
                    <td>${bill.bill_Amount.toFixed(2)}</td>
                    <td>${bill.date}</td>
                    <td>${bill.bill_Status}</td>
                    <td>
                        <input type="checkbox" class="paid-checkbox" name="box[]" ${bill.bill_Status === 'Paid' ? 'checked disabled' : ''} /> Paid
                        <button class="delete-btn">Delete</button>
                    </td>
                `;
            });

            // Display the table
            document.getElementById('bill-table').style.display = 'block';
        } else {
            alert('Failed to fetch bills. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the bills.');
    }
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


document.getElementById('bill-body').addEventListener('click', async function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const row = e.target.parentElement.parentElement; // Get the row
        const billName = row.cells[0].innerText; // Assuming bill name is in the first column
        const amount = parseFloat(row.cells[1].innerText); // Assuming amount is in the second column
        console.log(billName,amount)
        try {
            // Send request to backend to remove the bill using billName and amount
            const response = await fetch(`http://localhost:8088/removeBill/${encodeURIComponent(billName)}/${amount}`, {
                method: 'DELETE',
            });

            console.log(response)
            if (response.ok) {
                alert('Bill removed successfully');
                row.remove(); // Remove the row from the table (client-side)
            } else {
                alert('Failed to remove bill. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while removing the bill.');
        }
    }
});




document.getElementById('hide-bills-btn').addEventListener('click', function() {
    document.getElementById('bill-table').style.display = 'none';
});


document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; 
    alert("Logged Out Successfully");
});


