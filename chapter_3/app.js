var express = require('express');
var path = require('path');
var zipdb = require('zippity-do-dah');
var ForecastIo = require('forecastio');
var app = express();

var weather = new ForecastIo("14f027e36cb08afbef4eb32a07c52d8b");

var staticPath = path.resolve(__dirname,'public');;
app.use(express.static(staticPath));


app.set('views',path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
	res.render('index');
})

app.get(/^\/(\d{5})$/, function(req,res,next){
	var zipcode = req.params[0];
	var location = zipdb.zipcode(zipcode);
	console.log(location);
	if(!location.zipcode){
		next();
		return;
	}
	var lat = location.latitude;
	var lon = location.longitude;

	weather.forecast(lat,lon,function(err,data){
		if(err){
			next(err);
			return;
		}

		res.json({
			zipcode: zipcode,
			temperature: data.currently.temperature
		})
	})
})

app.use(function(req,res){
	res.status(404).render('404');
})

app.listen(3000);