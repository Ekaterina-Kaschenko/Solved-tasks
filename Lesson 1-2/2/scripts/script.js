function setName() {
	var names = [];
	var currentName;
	var i = 0;
	while (i < 5) { 
		currentName = prompt('Enter name', ''); 
		if (currentName !== ''){
			names.push(currentName); 
			i++; 
		} else {
			alert('you should enter name');
		}
	}
	return names;
}

function checkName() {
	var names = setName();
	var access = true;
  
  while(access) {
  	var currentName = prompt('Enter your name', currentName);
  
    if (currentName === '' ) {
      alert('you should enter name');
    } else if (names.indexOf(currentName) >= 0) {
      alert(currentName + ', вы успешно вошли');
      break;
    } else {
      alert('Ты кто?');
      break;
    }
  }
	
	return names;
}

console.log(checkName());
