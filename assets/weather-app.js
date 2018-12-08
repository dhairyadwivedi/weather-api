if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition);
} else{
  alert("Geolocation is not supported by this browser.");
}

function showPosition(position){
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
 
  $.getJSON(url, function(data){
    $("#temp").html(data.main.temp+"°C");
    $("#location").html("Weather Forecast for " +data.name+",       "+data.sys.country);
    $("#main").html(data.weather[0].description);
    $("#humidity").html(data.main.humidity);
    $("#wind").html(data.wind.speed);

    var dt = new Date();
    var month = dt.getMonth()+1;
    var time = dt.getDate() + "/" + month + "/" + dt.getFullYear();
 	$("#time").html(time);
    
    if(data.weather[0].description.indexOf("haze") !== -1){
         $("#icon").html("<i class='wi wi-day-haze' style='font-size: 7em'></i>");
    }	
	  
    if(data.weather[0].description.indexOf("clouds")!== -1){
      $("#icon").html("<i class='wi wi-day-cloudy' style='font-size: 7em'></i>");  
      $(".jumbotron").css('background','linear-gradient(to bottom, #ece9e6, #ffffff)'); 
    }
    else if(data.weather[0].description.indexOf("clear sky")!== -1){
      $("#icon").html("<i class='wi wi-day-sunny' style='font-size: 7em'></i>");
      $(".jumbotron").css('background','linear-gradient(to bottom, #56ccf2, #2f80ed)');
    }
    else if(data.weather[0].description.indexOf("rain")!== -1){
      $("#icon").html("<i class='wi wi-rain-wind' style='font-size: 7em'></i>");
      $(".jumbotron").css('background','linear-gradient(to bottom, #c9d6ff, #e2e2e2)');

     }
    else if(data.weather[0].description.indexOf("thunderstorm")!== -1){
      $("#icon").html("<i class='wi wi-thunderstorm' style='font-size: 7em'></i>");
      $(".jumbotron").css('background', 'linear-gradient(to bottom, #4b79a1, #283e51)');
    }
    else if(data.weather[0].description.indexOf("snow")!== -1){
      $("#icon").html("<i class='wi wi-snow' style='font-size: 7em'></i>");
      $(".jumbotron").css('background', 'linear-gradient(to bottom, #a1ffce, #faffd1)');
    }
    else if(data.weather[0].description.indexOf("mist")!== -1){
      $("#icon").html("<i class='wi wi-fog' style='font-size: 7em'></i>");
      $(".jumbotron").css('background', 'linear-gradient(to bottom, #f0f2f0, #000c40)');
    }

	});
}
