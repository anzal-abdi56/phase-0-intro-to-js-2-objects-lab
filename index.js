// Write your solution in this file!
const employee = {
    name :'ewok',
    streetAddress : 'endor',
}
function updateEmployeeWithKeyAndValue(){
    const employee_2 = {
        name : "Sam",
        streetAddress : "11 Broadway"

    }
    const newEmployee = {...employee , ...employee_2}
    return newEmployee


}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(){
    const{name, ...my } = employee
    return my
}
function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name
    return employee
}
