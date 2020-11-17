var app = app || {};

app.main = (function(){

	var attachEvents = function(){
		$('#search-button').off('click').on('click', function(){
			loadData($('#search-box').val());
		});

		$('#search-box').keypress(function(e){
			if(e.keyCode == 13){
				loadData($('#search-box').val());
			}
		});
	};	

	var loadData = function(query){
		var url = 'http://api.themoviedb.org/3/search/movie',
		apiKey = '797ba8647e0e8a761743831595488931';

		$.ajax({
			type: 'GET',
			url: url,
			data: {
				query: query,
				api_key: apiKey,
			},
			dataType: 'json',
			success: function(response){
				var results = response.results;
				appendData(results);
			},
			error: function(e) {
				console.log(e);
			}
		});	
	};

	var appendData = function(data){
		var imgBaseUrl = 'http://image.tmdb.org/t/p/w300';
		var movieShowUrl= 'https://www.themoviedb.org/movie/';

		$('#view').empty();

		$('html, body').animate({
			scrollTop:$('#view').offset().top +'px'
		},'slow');

		if (data.length == 0){
			$('#view').append('<p id="no_response">No movies found by that title</p>')
		} else {
			for (var i = 0; i < data.length; i++){
				if(data[i].poster_path && data[i].release_date){
					$('#view').append('<div id="imgs"><a href="' + movieShowUrl + data[i].id+ '"><img src="'+ imgBaseUrl + data[i].poster_path +'" class="gallery-item"/></a><br><span> Released: ' + String(data[i].release_date).substring(0,4) +  '</span></div>');
				} else if (data[i].poster_path) {
					$('#view').append('<div id="imgs"><a href="' + movieShowUrl + data[i].id+ '"><img src="'+ imgBaseUrl + data[i].poster_path +'" class="gallery-item"/></a><br><span> Released: Unknown </span></div>');
				}
			}
		}

	};

	var init = function(){
		attachEvents();
	};	

	return{
		init:init 
	};
})();

window.addEventListener('DOMContentLoaded', app.main.init);

/*http://docs.themoviedb.apiary.io/*/