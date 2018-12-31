const mysql = require('mysql');
var pool = mysql.createPool({
	host:'w.rdc.sae.sina.com.cn',
	port:3307,
	user:'root',
	password:'',
	database:'aqiFruit',
	connectionLimit:20,
	multiplestatements:true
});

module.exports=pool;
