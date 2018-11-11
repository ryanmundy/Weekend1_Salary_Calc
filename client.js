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
    //$('.deleteButton').on('click', deleteClicked);
}//end ready now

function deleteClicked(employeeIdToDelete) {
    console.log(employeeIdToDelete);
    
    for(employee of employees){
        if(employee.id == employeeIdToDelete){
            employees.splice(employee,1);
        }//end if
        console.log(employees);
        
    }//end for loop
    
}

function deleteEmployee() {
    $('.newRow').empty();
    console.log('in delete employee');
    //clear inputs
    $('#firstNameInput').val('');
    //end clear inputs
    for(let employee of employees){
        console.log(employee);
        let employeeToDelete = $('#firstNameInput').val();
        if(employeeToDelete === employee.firstName){
        employees.splice(employee,1);
        }
        else{
            console.log('employee not found');
            
        }
        $('.newRow').append(`<tr class="newEmployeeRow"></tr>`);

        let firstNameData = $(`<td class= "firstNameData"></td>`);
        $(firstNameData).append(employee.firstName);
        $('.newEmployeeRow').append(firstNameData);

        let lastNameData = $(`<td class= "lastNameData"></td>`);
        $(lastNameData).append(employee.lastName);
        $('.newEmployeeRow').append(lastNameData);

        let idData = $(`<td class= "idData"></td>`);
        $(idData).append(employee.id);
        $('.newEmployeeRow').append(idData);

        let titleData = $(`<td class= "titleData"></td>`);
        $(titleData).append(employee.title);
        $('.newEmployeeRow').append(titleData);

        let annualSalaryData = $(`<td class= "annualSalaryData"></td>`);
        $(annualSalaryData).append(employee.annualSalary);
        $('.newEmployeeRow').append(annualSalaryData);


    }//end for loop
    
}//end delete employee

function addEmployee() {
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

        let newEmployeeRow = $(`<tr><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.id}</td><td>${employee.title}</td><td>${employee.annualSalary}</td><td><button type="button" onClick="deleteClicked(${employee.id})" class="deleteButton">Delete</button></td></tr>`);
           $('.newRow').append(newEmployeeRow);

        // let firstNameData = $(`<td class= "firstNameData"></td>`);
        // $(firstNameData).append(employee.firstName);
        // $('.newRow').append(firstNameData);

        // let lastNameData = $(`<td class= "lastNameData"></td>`);
        // $(lastNameData).append(employee.lastName);
        // $('.newRow').append(lastNameData);

        // let idData = $(`<td class= "idData"></td>`);
        // $(idData).append(employee.id);
        // $('.newRow').append(idData);

        // let titleData = $(`<td class= "titleData"></td>`);
        // $(titleData).append(employee.title);
        // $('.newRow').append(titleData);

        // let annualSalaryData = $(`<td class= "annualSalaryData"></td>`);
        // $(annualSalaryData).append(employee.annualSalary);
        // $('.newRow').append(annualSalaryData);
        
         //calculate total cost
       
        monthlyCost += parseInt(employee.annualSalary, 10);
        

    }    //end for loop

    let totalCost = $(`<h4 class="totalCost"></h4>`);
    $('.totalMonthlyDiv').append(totalCost);
    $(totalCost).append(`Total Monthly = $${monthlyCost}`);
    //$('#totalMonthlyNumber').val('1000');
    if(monthlyCost>20000){
        $('.totalMonthlyDiv').css('background-color', 'red');
    }
}//end add employee