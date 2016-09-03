'use strict';

var elements = {
	start: document.getElementsByClassName('start')[0],
	reset: document.getElementsByClassName('stop')[0]
}

function Timer () {
 this.start = function () {
 	elements.start.addEventListener('click', function () {
 		console.log('start');
 	})
 }
}

var timer = new Timer ();

