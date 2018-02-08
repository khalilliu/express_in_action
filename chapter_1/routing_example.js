const express = require('express');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');

var publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath));

/**
app.get('/',function(req,res){
	res.end('welcome to my homepage');
})

app.get('/about',function(req,res){
	res.end('welcome to the about page');
})

app.get('/weather',function(req,res){
	res.redirect('https://www.google.com');
	//res.end('the current page is nice')
})

app.get('/hello/:who',function(req,res){
	res.end('hello '+ req.params.who + '.');
})
**/

var entries = [];
app.locals.entries = entries;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
	res.render('index')
})

app.get('/new-entry',(req,res)=>{
	res.render('new-entry');
})

app.post('/new-entry',(req,res)=>{
	if(!req.body.title || !req.body.body){
		res.status(400).end('entries must have a title and a body');
		return;
	}
	entries.push({
		title:req.body.title,
		body:req.body.body,
		published:new Date()
	})
	res.redirect('/');
})


// app.use(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('hello world');
// })



app.use(function(req,res){
	res.statusCode = 404;
	res.render('404');
})

http.createServer(app).listen(4000,()=>{
	console.log('server listen at 4000')
});