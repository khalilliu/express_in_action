var express = require('express');

var api = express.Router();

var ALLOWED_IPS = [
  "127.0.0.1",
  "123.456.7.89"
];

api.use(function(req,res,next){
	var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;};
	if(!userIsAllowed){res.status(401).send('not found')}
})