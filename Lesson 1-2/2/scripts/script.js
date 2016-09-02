function setName() {
	var names = [];
  var currentName, access;
	var i = 0;
	while (i < 3) {
    currentName = prompt('Enter name', '');
    if (currentName != '') {
		  names.push(currentName);
      i++; 
	  } else {
      alert ('Try to enter your name again');
    }
  }
  
  var enterName = prompt('Enter your name', enterName);
  
	names.forEach(function(item, i) {
		if (names.indexOf(enterName) < 0) {
			return access = false;
		} else {
      return access = true;
		}
	})
  
  return access ? enterName + ', вы успешно вошли!' : 'Ты кто?';
  
}

alert(setName());



