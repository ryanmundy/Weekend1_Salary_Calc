console.log('js is loaded');

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }//end constructor
}//end Employee class

let employees = [];
let monthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('in jquery');
    $('#addEmployeeButton').on('click', addEmployee);
}//end ready now

function deleteClicked(employeeIdToDelete) {
    console.log(employeeIdToDelete);
    monthlyCost = 0;
    $('.newRow').empty();
    $('.totalMonthlyDiv').empty();

    let employeeIndex = 0;

    for (employee of employees) {
        console.log(employee);
        
        if (employee.id == employeeIdToDelete) {
            employees.splice(employeeIndex, 1);
            console.log(employee.id + ' removed');

        }//end if
        employeeIndex++;
    }//end for loop
    
    for (employee of employees){
        let newEmployeeRow = 
        $(`<tr><td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>$${employee.annualSalary}</td>
        <td><button type="button" class="btn btn-danger" onClick="deleteClicked(${employee.id})" class="deleteButton">Delete</button></td></tr>`);
        $('.newRow').append(newEmployeeRow);
        monthlyCost += (parseInt(employee.annualSalary, 10) / 12);
    }//end for loop
    
    let updatedCost = $(`<h4 class="totalCost"></h4>`);
    $('.totalMonthlyDiv').append(updatedCost);
    $(updatedCost).append(`Monthly Cost = $${monthlyCost.toFixed(2)}`);
    if (monthlyCost > 20000) {
        $('.totalMonthlyDiv').css('background-color', 'red');
    }

    
}//end delete clicked

function addEmployee() {
    if ($('#firstNameInput').val() == '' || $('#lastNameInput').val() == ''|| $('#idInput').val() == '' || $('#titleIput').val() == '' || $('#annualSalaryInput').val() == ''){
        alert('Please complete all fields');
    }//end if
    else{
    //empty row
    $('.newRow').empty();
    $('.totalMonthlyDiv').empty();
    //end empty row
    console.log('in addEmployee');
  
    //create new employee object
    let tempEmployee = new Employee(
        $('#firstNameInput').val(),
        $('#lastNameInput').val(),
        $('#idInput').val(),
        $('#titleInput').val(),
        $('#annualSalaryInput').val(),
    );
    console.log('added', tempEmployee);
    //end create employee object
    //push new employee to employee array
    employees.push(tempEmployee);
    //end push employee to array
    //clear inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
    //end clear inputs
    //loop through employees
    monthlyCost=0;
    for(let employee of employees){
        console.log(employee);
        
    //append employees to DOM

        let newEmployeeRow = 
        $(`<tr><td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>$${employee.annualSalary}</td>
        <td><button type="button" class="btn btn-danger" onClick="deleteClicked(${employee.id})" class="deleteButton">Delete</button></td></tr>`);
           $('.newRow').append(newEmployeeRow);
       
        monthlyCost += (parseInt(employee.annualSalary, 10) / 12);
        
    }    //end for loop

    let totalCost = $(`<h4 class="totalCost"></h4>`);
    $('.totalMonthlyDiv').append(totalCost);
    $(totalCost).append(`Monthly Cost = $${monthlyCost.toFixed(2)}`);
    if(monthlyCost>20000){
        $('.totalMonthlyDiv').css('background-color', 'red');
    }
}//end else
    $('#firstNameInput').focus();
}//end add employee