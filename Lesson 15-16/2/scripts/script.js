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

	var human = new Human();
	console.log(human);
})()
	