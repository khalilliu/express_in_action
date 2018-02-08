var express = require("express"); 
var path = require("path");

var app = express();

var filePath = path.join(__dirname,'static/new.txt');

app.use(function(req,res){
	res.sendFile(filePath,function(err){
		if(err){
			console.error('file failed to send');
		}else{
			console.log('file send');
		}
	});
})

app.listen(3000,function(req,res){
	console.log('app started at 3000');
})