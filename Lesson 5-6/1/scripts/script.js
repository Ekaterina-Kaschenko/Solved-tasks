'use strict';

var elements = {
	start: document.getElementsByClassName('start')[0],
	continue: document.getElementsByClassName('continue')[0],
	pause: document.getElementsByClassName('pause')[0],
	clear: document.getElementsByClassName('clear')[0],
	milliseconds: document.getElementsByClassName('ms')[0],
	seconds: document.getElementsByClassName('sec')[0],
	minutes: document.getElementsByClassName('min')[0]
}

function Timer () {
 	elements.start.addEventListener('click', function () {
 		var currentTime = Date.now();
 		console.log('start');
 		// this.style.display = 'none';
 		// elements.continue.style.display = 'inline-block';

 		
		var iterval = setInterval(function() {
	    var diferenceDate = new Date(Date.now() - currentTime);
	 		var d = diferenceDate;
			var time = diferenceDate.getUTCHours() + ':' + 
	    		diferenceDate.getUTCMinutes() + ':' + 
	        diferenceDate.getUTCSeconds() + ':' + 
	        diferenceDate.getUTCMilliseconds();
	     
	    console.clear();
	    console.log(time)
	  }, 50)
  })
    
 	elements.continue.addEventListener('click', function () {
 		console.log('continue');
 		this.style.display = 'none';
 		elements.pause.style.display = 'inline-block';
 	})

 	elements.pause.addEventListener('click', function () {
	  console.log('pause');
 		this.style.display = 'none';
	  elements.continue.style.display = 'inline-block';
	})

	elements.clear.addEventListener('click', function () {
	  console.log('clear');
	})
}

Timer.prototype = {
  start: function() {
    this.startTime = Date.now();
    return this;
  },

};


var timer = new Timer ();

// console.log(timer.start());