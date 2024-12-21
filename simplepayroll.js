let employeeCount = 0;

document.getElementById('add').addEventListener('click', add);
document.getElementById('delete').addEventListener('click', deleteRow);

function add() {
    const name = document.getElementById('name').value.trim();
    const daysWorked = parseInt(document.getElementById('days').value);
    const dailyRate = parseFloat(document.getElementById('rate').value);
    const deductionAmount = parseFloat(document.getElementById('deduction').value);

    if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount) || daysWorked <= 0 || dailyRate <= 0 || deductionAmount < 0) {
        alert('Please enter valid inputs.');
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    employeeCount++;

    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${employeeCount}</td>
        <td>${name}</td>
        <td>${daysWorked}</td>
        <td>$${dailyRate.toFixed(2)}</td>
        <td>$${grossPay.toFixed(2)}</td>
        <td>$${deductionAmount.toFixed(2)}</td>
        <td>$${netPay.toFixed(2)}</td>
    `;

    document.getElementById('employeeTableBody').appendChild(tableRow);

    // Add delete functionality to the button
    tableRow.querySelector('.delete-btn').addEventListener('click', () => {
        tableRow.remove();
        updateEmployeeNumbers();
    });

    resetFields();
}

function deleteRow() {
    const rowIndex = prompt('Enter the row number to delete:');
    const tableBody = document.getElementById('employeeTableBody');

    if (!rowIndex || isNaN(rowIndex) || rowIndex <= 0 || rowIndex > tableBody.rows.length) {
        alert('Invalid row number.');
        return;
    }

    tableBody.deleteRow(rowIndex - 1);
    updateEmployeeNumbers();
}

function updateEmployeeNumbers() {
    const rows = document.getElementById('employeeTableBody').rows;
    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].textContent = i + 1;
    }
    employeeCount = rows.length;
}

function resetFields() {
    document.getElementById('name').value = '';
    document.getElementById('days').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('deduction').value = '';
}
