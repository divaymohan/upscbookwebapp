var express = require('express');
var mysql = require('mysql');


var app = express();

//set port
var port = process.env.PORT || 3000
app.use(express.static(__dirname));
//routes
app.get("/", function(req,res){
	res.render(index);
})
app.get("/Home",function(req,res){
	res.render(index)
})

app.listen(port,function(){
	console.log("app running")
})

var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'upscbook'
 });
 

 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });


 app.get("/api/qus",function(req,res){
 connection.query('SELECT * from questions', function(err, rows, fields) {
 connection.end();
   if (!err){
     console.log('The solution is: ', rows);
     res.json(rows);
    }
   else{
     console.log('Error while performing Query.');
    }
   
   });
 });
 app.get("/api/user/:name",function(req,res){
    connection.query('SELECT * from user', function(err, rows, fields) {
    connection.end();
      if (!err){
        console.log('The solution is: ', rows);
        res.json(rows);
       }
      else{
        console.log('Error while performing Query.');
       }
      
      });
    });
