let employees = [];

document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const employeePosition = document.getElementById('employeePosition').value;
    
    const employee = {
        id: employeeId,
        name: employeeName,
        position: employeePosition
    };
    
    // Check if employee already exists (Update)
    const existingEmployeeIndex = employees.findIndex(emp => emp.id === employeeId);
    if (existingEmployeeIndex !== -1) {
        employees[existingEmployeeIndex] = employee;
    } else {
        // Add new employee
        employees.push(employee);
    }
    
    document.getElement