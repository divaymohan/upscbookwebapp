var express = require('express');
var mysql = require('mysql');


var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
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
//  connection.end();
   if (!err){
     console.log('The solution is: ', rows);
     res.json(rows);
    }
   else{
     console.log('Error while performing Query.');
    }
   
   });
 });
 app.get("/api/qus/:id",function(req,res){
   var id = req.params['id'];
    connection.query('SELECT * from questions where QUS_ID = ' + id, function(err, rows, fields) {
    // connection.end();
      if (!err){
        console.log('The solution is: ', rows);
        res.json(rows);
       }
      else{
        console.log('Error while performing Query.');
       }
      
      });
    });
