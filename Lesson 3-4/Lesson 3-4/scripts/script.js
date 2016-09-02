var questionsData = [{
	id: 1,
	title: 'Название первого вопроса',
	answers: [{
		id: 1,
		title: 'First',
		isRight: false
	}, {
		id: 2,
		title: 'second',
		isRight: false
	}, {
		id: 3,
		title: 'third',
		isRight: true
	}]
}, {
	id: 2,
	title: 'Название второго вопроса',
	answers: [{
		id: 1,
		title: 'First',
		isRight: false
	}, {
		id: 2,
		title: 'second',
		isRight: false
	}, {
		id: 3,
		title: 'third',
		isRight: true
	}]
}];


function genHtml() {
	var questionTemplate = document.getElementById('questionTemplate').innerHTML;
	var answerTemplate = document.getElementById('answerTemplate').innerHTML;

	var questions = [];
	var answers = [];

	questionsData.forEach(function(item) {
		item.answers.forEach(function(answerItem) {
			answers[answerItem.id] = answerTemplate.replace('{{ title }}', answerItem.title);
		});
		questions[item.id] = questionTemplate
			.replace('{{ questionNumber }}', item.id)
			.replace('{{ title }}', item.title)
			.replace('{{ answers }}', answers.join(''));
	});

	document.getElementById('questionsContainer').innerHTML = questions.join('');
}

genHtml();