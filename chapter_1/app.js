const express = require('express');
const http = require('http');
const logger = require('morgan');
const app = express();

/**
//loggin middleware
app.use(function(req,res,next){
	console.log('In comes a request to: '+req.url);
	next();
})

//authentication middleware
app.use(function(req,res,next){
	var minute = (new Date()).getMinutes();
	if(minute%2){
		next()
	}else{
		res.statusCode = 403;
		res.end('Not authorized!');
	}
})
**/

app.use(logger('tiny'));

app.use(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('hello world');
})

http.createServer(app).listen(4000);