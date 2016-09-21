;(function () {
	function Human(options) {
		this.createOptions(options)
	}

	Human.prototype.createOptions = function (options) {
	 if (typeof options !== 'object') {
       options = {};
    }

    this.name = options.name || 'Unknown';
    this.age = options.age || 'Unknown';
    this.male = options.male || 'Unknown';
    this.height = options.height || 'Unknown';
    this.weight = options.weight || 'Unknown';
    
    return this;
	}

	var Student = function(options) {
    Human.apply(this, arguments);
  }

  Student.prototype = Object.create(Human.prototype);
  Student.prototype.constructor = Student;

  Student.prototype.createOptions = function(options) {
    Human.prototype.createOptions.apply(this, arguments);
    if (typeof options !== 'object') {
      options = {};
    }
     
    this.university = options.university || 'Unknown';
    this.scholarship = options.scholarship || '0';
     
    return this;
  }
  
  Student.prototype.watchSerials = function() {
    console.log('My name is ', this.name, ' and I like wathing serials');
    return this;
  }

  var Worker = function(options) {
     Human.apply(this, arguments);
  }
  
  Worker.prototype = Object.create(Human.prototype);
  Worker.prototype.constructor = Worker;
  
  Worker.prototype.createOptions = function(options) {
    Human.prototype.createOptions.apply(this, arguments);

    if (typeof options !== 'object') {
      options = {};
    }
     
    this.job = options.job || 'Unknown';
    this.salary = options.salary || '0';
     
    return this;
  }

  Worker.prototype.workPlace = function(place) {
    console.log('I m working at the ', place);
    return this;
  }

	var person = new Human ({
		name: 'Lilya',
		age: 26,
		male: 'female'
	});

	var student = new Student ({
    name: 'Vasya',
    age: 18,
    height: 170,
    university: 'Harward',
    scholarship: '$400',
  });

	var worker = new Worker ({
		name: 'Peter',
		job: 'Doctor',
		salary: '$300',
		weight: 90,
		height: 190,
		male: 'male'
	})

	window.human = new Human();
	window.Student = Student;
	window.Worker = Worker;

	console.log(person);
	console.log(student.watchSerials());
	console.log(worker.workPlace('hospital'));
})()
	