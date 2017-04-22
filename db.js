
var mysql=require('mysql');

var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'Abr4han1',
	database:'SVL'
});

module.exports=connection;