const { verbose } = require('sqlite3')
const {Person, Vendor} = require('./acmeClasses.js')
const vendorDAO = require('./vendorDAO.js')
const sqlite3 = require('sqlite-sync');
//const sqlite3 = require('sqlite3').verbose();
    // let db = new sqlite3.Database('C:/Users/tdhan/people.db', (err) => {
    //     if (err) {
    //       return console.error(err.message);
    //     }
    //     console.log('Connected to the in-memory SQlite database.');
    //   });

function main(){
  
  //console.log('Testing classes')
  const dan = new Vendor(34232, 'Dan Man', 'male', '04/23/1984', '801-342-2229', 'danMan@gmail.com', '123 Main Street', 'Orem', 'Utah', '84097')
  
  //vendorDAO.deleteVendor(34232)
  sqlite3.connect('C:/Users/tdhan/people.db')
  vendorDAO.create(dan)
  console.log("Reading original Dan\n")
  vendorDAO.read(34232, sqlite3)
  dan.fullName = "Testing the change"
  vendorDAO.update(34232, dan)
  console.log("Reading updated Dan \n")
  vendorDAO.read(34232)
  vendorDAO.deleteVendor(34232)
  console.log("Should return empty list to show person was deleted.\n")
  vendorDAO.read(34232)
  sqlite3.close();
  //dan.name = "Dan test"
  //vendorDAO.update(34232, dan)
  //console.log(vendorDAO.read("a9a15aa1-3239-490f-9134-26d3c3b30847"))
  
}

main ()