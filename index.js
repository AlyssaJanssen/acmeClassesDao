const {Person, Employee, Spouse, Dependent, Manager, Executive} = require('./acmeClasses')
const employeeDAO = require('./employeeDAO.js')

function main(){
    console.log('Testing classes')
    // new Person here
    const dan = new Employee(34232,'employee', 'Dan Man', '04/23/1984', 801-342-2229, 'danMan@gmail.com', '123 Main Street', 'Mary Man', 'Jackson Man')
    // Spouse
    // Dependent
    // Manager
    // Executive
    console.log(dan)

    console.log('Testing out DAOs now')
    let danKey = employeeDAO.createEmployee(dan)
    console.log(danKey)// check if Dans data is in danKey

}

main ()