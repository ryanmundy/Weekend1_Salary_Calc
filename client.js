console.log('js is loaded');

let employees = [];

$(document).ready( readyNow );

function readyNow(){
    console.log('in jquery');
    $('#addEmployeeButton').on('click', addEmployee);
}//end ready now

function addEmployee(){
    console.log('in addEmployee');
    
    
}//end add employee