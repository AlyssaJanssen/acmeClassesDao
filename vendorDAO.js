//const Vendor = require("acmeClasses.js")
//const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require('sqlite-sync');



function create(obj) {
    console.log("creating")
    sqlite3.insert("peopleFinal", obj, function(res){
      if (res.error){
        throw res.error;
      }
      //console.log(res)
    })
}

function read(id) {
    console.log("reading")
    console.log(sqlite3.run(`select * from peopleFinal where uuid='${id}'`))
}

function update(id, obj) {
    console.log("updating")
    sqlite3.update("peopleFinal", obj, {uuid:`${obj.uuid}`})

}

function deleteVendor (id){
    console.log("deleting")
    sqlite3.run(`delete from peopleFinal where uuid=${id};`)
}

module.exports = {create, read, update, deleteVendor}