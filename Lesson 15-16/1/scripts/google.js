(function () {
	'use strict'
	var button = document.getElementsByClassName('search__button')[0];
	var input = document.getElementsByClassName('search__text')[0];
	var container = document.getElementsByClassName('container')[0];

	button.addEventListener('click', function () {
		if (input.value.trim() === '') {
			container.innerHTML = '';
			input.value = '';
			alert ('Введите поисковой запрос');
		} else {
			apiRequest();
		}
		
	});

	input.addEventListener('keydown', function (event) {
	  if (event.keyCode === 13) {
	    event.preventDefault();
	  }
	})

	input.addEventListener('keyup', function (event) {
		event = event || window.event;
		if (event.keyCode == 13) {
			if (input.value.trim() === '') {
			  container.innerHTML = '';
			  input.value = '';
			  alert ('Введите поисковой запрос');
			} else {
				apiRequest();
			}
		}

	});

	function apiRequest() {
		var API_KEY = '3347815-19a83d652fee52d8698f16eb6';
		var text = document.getElementsByClassName('search__text')[0].value;

		var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(text);

		$.getJSON(URL, function(data){
	   
	    if (parseInt(data.totalHits) > 0) {
	      var tmpl = document.getElementById('images').innerHTML;
	      container.innerHTML = _.template(tmpl)(data);      
	    } else {
	      alert('Введите строку без ошибок, результатов по вашему запросу нет');
	    }
	      
		});
	}
})();