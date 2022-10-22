let sql = require("mysql2")
let sqlConnection = new sql.createConnection({
    user:"root",
    password:"Lakshmi@87",
    database:"jacsi",
    host:"localhost"

  })
sqlConnection.query("select * from customers ",function(err,res){
    console.log(err)
})
