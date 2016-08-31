function setName() {
	var names = [];
	var currentName;
	for (var i = 0; i < 5; i++) {
		currentName = prompt('Enter name', '');
		names.push(currentName);
	}
	return names;
}

function checkName() {
	var names = setName();
	var currentName = prompt('Enter your name', currentName);

	if (names.indexOf(currentName) >= 0) {
    alert(currentName + ', вы успешно вошли');
  } else {
    alert('Ты кто?');
  }
	return names;
}

console.log(checkName());

