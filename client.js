console.log('js is loaded');

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }//end constructor
}//end Item class

let employees = [];
let monthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log('in jquery');
    $('#addEmployeeButton').on('click', addEmployee);
}//end ready now

function addEmployee() {
    console.log('in addEmployee');
    //empty row
    $('.firstNameData').empty();
    $('.lastNameData').empty();
    $('.idData').empty();
    $('.titleData').empty();
    $('.annualSalaryData').empty();
    //end empty row
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
    for(let employee of employees){
        console.log(employee);    
    //append employees to DOM
        let firstNameData = $(`<td class="firstNameData">${employee.firstName}<td>`);
        let lastNameData = $(`<td class="lastNameData">${employee.lastName}<td>`);
        let idData = $(`<td class="idData">${employee.id}<td>`);
        let titleData = $(`<td class="titleData">${employee.id}<td>`);
        let annualSalaryData = $(`<td class="annualSalaryData">${employee.annualSalary}<td>`);
        $('.firstNameData').append(employee.firstName);
        $('.lastNameData').append(employee.lastName);
        $('.idData').append(employee.id);
        $('.titleData').append(employee.title);
        $('.annualSalaryData').append(employee.annualSalary);
    }//end for loop
    //append employees to DOM
    //calculate total cost ()
    //display total cost on DOM (create new td for each employee and append to tr)


}//end add employee