class Person {
    constructor(id, type, name, birthdate, phone, email, address, spouse, dependents) {
        this.id = id
        this.type = type
        this.name = name
        this.birthdate = birthdate
        this.phone = phone
        this.email = email
        this.address = address
        this.spouse = spouse
        this.dependents = dependents
    }
}

class Employee extends Person {
    constructor(id, name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID) {
        super(id, "Employee", name, birthdate, phone, email, address, spouse, dependents)// super calls parent constructor and gets access to those properties
        this.companyID = companyID
        this.department = department
        this.title = title
        this.salary = salary
        this.managersID = managersID
    }
}
class Spouse extends Person {// is a person, employee has a spouse, can be an employee AND a spouse! - 
    constructor(id, name, birthdate, phone, email, address, spouse, dependents) {
        super(id, "Spouse", name, birthdate, phone, email, address, spouse, dependents)// super calls parent constructor with type= "Spouse"
    }
}

class Dependent extends Person { // is a person, employee has a dependent
    constructor(id, name, birthdate, phone, email, address, spouse, dependents){
        super(id, "Dependent", name, birthdate, phone, email, address, spouse, dependents)
    let dependentsArr = []
    this.dependents = dependentsArr
    }
}

class Manager extends Employee {
    constructor(id, name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID) {
        super(id, "Manager", name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID)// super calls parent constructor and gets access to those properties
    // Manager doesn't have anything that Employee doesn't
    }
}

class Executive extends Manager {
    constructor(id, name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID, bonus){
        super(id, "Executive", name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID)
        this.bonus = bonus
    }
}

module.exports = {Person, Employee, Spouse, Dependent, Manager, Executive}