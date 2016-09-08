'use strict';

function Timer () {
  this.element = {}
  this.getElements();
  this.element.start.addEventListener('click', function () {
    var currentTime = Date.now();
    this.element.start.style.display = 'none';
    this.element.pause.style.display = 'inline-block';
    this.start();
  }.bind(this));
    
  this.element.continue.addEventListener('click', function () {
    console.log('continue');
    this.element.continue.style.display = 'none';
    this.element.pause.style.display = 'inline-block';
    this.continue();
  }.bind(this));

  this.element.pause.addEventListener('click', function () {
    console.log('pause');
    this.element.pause.style.display = 'none';
    this.element.continue.style.display = 'inline-block';
    this.pause();
  }.bind(this));

  this.element.clear.addEventListener('click', function () {
    console.log('clear');
    this.element.continue.style.display = 'none';
    this.element.pause.style.display = 'none';
    this.element.start.style.display = 'inline-block';
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
      this.element.milliseconds.innerHTML = this.beatifyViewText(diferenceDate.getUTCMilliseconds(), 3);
      this.element.seconds.innerHTML = this.beatifyViewText(diferenceDate.getUTCSeconds());
      this.element.minutes.innerHTML = this.beatifyViewText(diferenceDate.getUTCMinutes());
      this.element.hours.innerHTML = this.beatifyViewText(diferenceDate.getUTCHours());
    }.bind(this));
  },
  updateText: function (argument) {
    this.element.milliseconds.innerHTML = '00';
    this.element.seconds.innerHTML = '00';
    this.element.minutes.innerHTML = '00';
    this.element.hours.innerHTML = '00';
  },
  beatifyViewText: function (number, count) {
    count = count || 2;
    return ('00' + number).slice(-count);
  },
  getElements: function () {
    this.element.start = document.getElementsByClassName('start')[0],
    this.element.continue = document.getElementsByClassName('continue')[0],
    this.element.pause = document.getElementsByClassName('pause')[0],
    this.element.clear = document.getElementsByClassName('clear')[0],
    this.element.milliseconds = document.getElementsByClassName('ms')[0],
    this.element.seconds = document.getElementsByClassName('sec')[0],
    this.element.minutes = document.getElementsByClassName('min')[0],
    this.element.hours = document.getElementsByClassName('hours')[0],
    this.element.intervar = '100'
  }

};


var timer = new Timer ();
console.log(timer)