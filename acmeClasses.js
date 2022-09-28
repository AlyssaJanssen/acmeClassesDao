class Person {
    constructor(uuid, type, fullName, dob, phone, email, address, spouse, dependents) {
        this.uuid = uuid
        this.type = type
        this.fullName = fullName
        this.dob = dob
        this.phone = phone
        this.email = email
        this.address = address
    }
}

class Vendor extends Person {
    constructor(uuid, fullName, sex, dob, phone, email, address, city, state, zip) {
        super(uuid, "Vendor", fullName, sex, dob, phone, email, address)// super calls parent constructor and gets access to those properties
       this.city = city
       this.state = state
       this.zip = zip
       this.sex = sex;
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

// class Manager extends Employee {
//     constructor(id, name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID) {
//         super(id, "Manager", name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID)// super calls parent constructor and gets access to those properties
//     // Manager doesn't have anything that Employee doesn't
//     }
// }

// class Executive extends Manager {
//     constructor(id, name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID, bonus){
//         super(id, "Executive", name, birthdate, phone, email, address, spouse, dependents, companyID, department, title, salary, managersID)
//         this.bonus = bonus
//     }
// }

module.exports = {Person, Spouse, Dependent, Vendor}