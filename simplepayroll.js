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

function deleteEmployeeByIndex(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employeeList.splice(index, 1);
        displayEmployees();
    }
}

function deleteEmployee() {
    let lineNumber = prompt("Enter the line number of the employee to delete:");

    if (lineNumber && !isNaN(lineNumber) && lineNumber > 0 && lineNumber <= employeeList.length) {
        let index = lineNumber - 1;
        deleteEmployeeByIndex(index);
    } else {
        alert("Invalid line number.");
    }
}
