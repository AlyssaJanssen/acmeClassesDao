const Person = require("entityClasses.js")

class Dependent extends Person {
    constructor(company){
        this.company = company
    }
}