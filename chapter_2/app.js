var app = require('express')();
var fs = require('fs');
var path = require('path');
var logger = require('morgan');

var morganMiddleware = logger('dev');

app.use(morganMiddleware);


var staticPath = path.join(__dirname,'static');
app.use(express.static(staticPath));

app.use(function(req,res,next){
	console.log('req IP:' + req.url);
	console.log('req date: ' + new Date());
	next();
})


app.use(function(req,res,next){
	var filePath = path.join(__dirname,'static',req.url);
	fs.stat(filePath,function(err,fileInfo){
		if(err){
			next();
			return;
		}

		if(fileInfo.isFile()){
			res.sendFile(filePath);

		}else{
			next();
		}
	})

})

app.use(function(req,res,next){
	res.status(404);
	res.send('file not found')
})


app.listen(3000,function(){
	console.log('app listen at port 3000')
})