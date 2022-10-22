

let ax = require("axios")
async function generateAuthToken(userid,c){
let mysql = require("mysql2")
let sqlConnection = new mysql.createConnection({
    user:"root",
    password:"Lakshmi@87",
    database:"jacsi",
    host:"localhost"

  })
console.log("11",c)
let arr = []
let myparams  = new URLSearchParams()
  let stat = new Promise((resolve,rej)=>{
  	sqlConnection.query("select client_id,client_secret from customers where id="+userid,function(err,result){
	console.log("15",err)
	myparams.set("grant_type","client_credentials")
	myparams.set("client_id",result[0].client_id)
	myparams.set("client_secret",result[0].client_secret)
       resolve("ok")
   })
}).then(async(e)=>{
   let data =await ax.post("https://api.instamojo.com/oauth2/token/",myparams,
        {
         headers:{
         	"accepts":"application/json",
        	"Content-Type":"application/x-www-form-urlencoded",
        	
        },
    }).catch(()=>{
    	
    })
return data
}).catch(()=>{})

    //console.log("20",myparams.getAll("client_id"))
	
	
     return stat
	}
module.exports = generateAuthToken
