let employeeCount = 0;
document.getElementById('add').addEventListener('click', add);
document.getElementById('delete').addEventListener('click', deleteRow);

function add() 
{
    var name = document.getElementById('name').value;
    var daysWorked = parseInt(document.getElementById('days').value);
    var dailyRate = parseFloat(document.getElementById('rate').value);
    var deductionAmount = parseFloat(document.getElementById('deduction').value);

    if (isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount) || name === '') 
    {
        alert('Enter Something!');
        return;
    }

    var grossPay = daysWorked * dailyRate;
    var netPay = grossPay - deductionAmount;

    employeeCount++;

    var tableRow = document.createElement('tr');

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

    document.getElementById('name').value = '';
    document.getElementById('days').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('deduction').value = '';
}

function deleteRow() 
{
    var tableBody = document.getElementById('employeeTableBody');
    if (tableBody.rows.length > 0) 
    {
        tableBody.deleteRow(tableBody.rows.length - 1); 
        employeeCount--; 
    } 
    else 
    {   
        alert('Nothing To Delete!');
    }
}
