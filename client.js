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

$(document).ready( readyNow );

function readyNow(){
    console.log('in jquery');
    $('#addEmployeeButton').on('click', addEmployee);
}//end ready now

function addEmployee(){
    console.log('in addEmployee');
    
    
}//end add employee