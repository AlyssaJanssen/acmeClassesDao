function createEmployee(){// INSERT
console.log(
`INSERT INTO EMPLOYEE (ID, TYPE, NAME, BIRTHDATE, PHONE, EMAIL, ADDRESS)
VALUES (1, 'Paul', 32, 'California', 20000.00 )`)
}

function readEmployee(){ // SELECTd
console.log(
    `SELECT * FROM EMPLOYEE where TYPE ='employee'`)
}

function updateEmployee(){// UPDATE

}

function deleteEmployee(){// NO DELETE, move employee to an inactive table

}
