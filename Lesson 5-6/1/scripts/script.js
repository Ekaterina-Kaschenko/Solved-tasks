'use strict';

var elements = {
  start: document.getElementsByClassName('start')[0],
  continue: document.getElementsByClassName('continue')[0],
  pause: document.getElementsByClassName('pause')[0],
  clear: document.getElementsByClassName('clear')[0],
  milliseconds: document.getElementsByClassName('ms')[0],
  seconds: document.getElementsByClassName('sec')[0],
  minutes: document.getElementsByClassName('min')[0],
  hours: document.getElementsByClassName('hours')[0],
  intervar: '100'
};

function Timer () {
  elements.start.addEventListener('click', function () {
    var currentTime = Date.now();
    elements.start.style.display = 'none';
    elements.pause.style.display = 'inline-block';
    this.start();
  }.bind(this));
    
  elements.continue.addEventListener('click', function () {
    console.log('continue');
    elements.continue.style.display = 'none';
    elements.pause.style.display = 'inline-block';
    this.continue();
  }.bind(this));

  elements.pause.addEventListener('click', function () {
    console.log('pause');
    elements.pause.style.display = 'none';
    elements.continue.style.display = 'inline-block';
    this.pause();
  }.bind(this));

  elements.clear.addEventListener('click', function () {
    console.log('clear');
    elements.continue.style.display = 'none';
    elements.pause.style.display = 'none';
    elements.start.style.display = 'inline-block';
    this.clear();
  }.bind(this));
}

Timer.prototype = {
  start: function() {
     this.currentTime = Date.now();
     this.updateTime();
  },
  pause: function () {
  	clearInterval(this.interval);
  	this.pauseTime = Date.now();
  },
  continue: function () {
  	this.currentTime = new Date(this.currentTime - (this.pauseTime - Date.now()));
  	this.updateTime();
  	
  },
  clear: function () {
  	this.pause();
  	this.updateText();
  },
  updateTime: function () {
  	this.interval = setInterval(function() {
      var diferenceDate = new Date(Date.now() - this.currentTime);
      elements.milliseconds.innerHTML = this.beatifyViewText(diferenceDate.getUTCMilliseconds());
      elements.seconds.innerHTML = this.beatifyViewText(diferenceDate.getUTCSeconds());
      elements.minutes.innerHTML = this.beatifyViewText(diferenceDate.getUTCMinutes());
      elements.hours.innerHTML = this.beatifyViewText(diferenceDate.getUTCHours());
  	}.bind(this));
  },
  updateText: function (argument) {
  	elements.milliseconds.innerHTML = '00';
  	elements.seconds.innerHTML = '00';
  	elements.minutes.innerHTML = '00';
  	elements.hours.innerHTML = '00';
  },
  beatifyViewText: function (number, count) {
  	count = count || 2;
    return ('00' + number).slice(-count);
  }

};


var timer = new Timer ();
