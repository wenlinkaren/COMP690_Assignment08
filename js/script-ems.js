// CREATE AN ARRAY OF EMPLOYEES
let employeesArr = [
    [10000001, 'Daisy', 1000, 'daisy@gmail.com', 'Administrative'],
    [20000002, 'Lily', 2000, 'lily@gmail.com', 'Engineering'],
    [30000003, 'Rose', 3000, 'rose@gmail.com', 'Executive'],
    [40000004, 'Jasmine', 4000, 'jasmine@gmail.com', 'Marketing'],
    [50000005, 'Poppy', 5000, 'poppy@gmail.com', 'Sales'],
]
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    employeesArr = JSON.parse(localStorage.getItem('employees'));  
}
// GET DOM ELEMENTS
const $ = function(id) {
    return window.document.getElementById(id);
};
let form     = $('addForm');
let empTable = $('empTable');
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employeesArr);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = parseInt($('id').value);
    let empName     = $('name').value;
    let empExt      = parseInt($('extension').value);
    let empEmail    = $('email').value;
    let empDept     = $('department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empID, empName, empExt, empEmail, empDept];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employeesArr.push(newEmployee);
    // BUILD THE GRID
    buildGrid(employeesArr); 
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex;
        // REMOVE EMPLOYEE FROM ARRAY
        employeesArr.splice(rowIndex - 1, 1);
        // BUILD THE GRID
        buildGrid(employeesArr);
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employeesArr) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbBody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employeesArr) {
        tbBody.innerHTML +=
        `
        <tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td><a href='mailto:${employee[3]}'></a>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbBody);
    // UPDATE EMPLOYEE COUNT
    $('empCount').value = `(${employeesArr.length})`;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employeesArr));
};