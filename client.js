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
    //empty row
    $('.newRow').empty();
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

    for(let employee of employees){
        console.log(employee);
        
    //append employees to DOM
            
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
        
        
    }    //end for loop
    //calculate total cost ()

    //display total cost on DOM (create new td for each employee and append to tr)


}//end add employee