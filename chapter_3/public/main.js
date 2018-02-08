// $(function(){
// 	var $h1 = $('h1');
// 	var $zip = $('input[name="zip"]');
// 	$('form').on('submit',function(ev){
// 		ev.preventDefault();

// 		var zipCode = $.trim($zip.val());
// 		$h1.text('loading...');

// 		var req = $.ajax({
// 			url: '/'+zipCode,
// 			dataType: 'json'
// 		});

// 		req.done(function(data){
// 			var temperature = data.temperature;
// 			$h1.html('it is ' + temperature + '&#176; in ' + zipCode + '.');
// 		})

// 		req.fail(function(){
// 			$h1.text('Error');
// 		})
// 	})
// })

$(function(){
	var $h1 = $('h1');
	var $zip = $('input[name="zip"]');

	$('form').on('submit',function(ev){
		ev.preventDefault();
		var zipCode = $.trim($zip.val());
		$h1.text('loading...');

		var req = $.ajax({
			url: '/'+zipCode,
			dataType:'json'
		});

		req.done(function(data){
			var temperature = data.temperature;
			var zipcode = data.zipcode;

			 $h1.html("It is " + temperature + "&#176; in " + zipcode + ".");
		})

		request.fail(function() {
      $h1.text("Error!");
    });

	})
	
})