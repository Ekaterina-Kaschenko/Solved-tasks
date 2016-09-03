var generateDOM = {
	layout: function () {
		this.layoutElem = document.createElement('div');
		this.layoutElem.className ='wrapper';
		document.body.appendChild(this.layoutElem);

		this.section = document.createElement('div');
		this.section.className ='section';
		this.layoutElem.appendChild(this.section);
	},
	title: function (titleName) {
		this.titleElem = document.createElement('h1');
		this.titleElem.className = 'title';
		this.titleElem.innerHTML = titleName;
		this.section.appendChild(this.titleElem);	
	},
	numeraticList: function () {
		this.tasks = document.createElement('ol');
		this.tasks.className = 'list';
		this.section.appendChild(this.tasks);
	},
	addTask: function (question, answer) {
		this.question = document.createElement('li');
		this.question.className = 'item';
		this.tasks.appendChild(this.question);

		this.questionElem = document.createElement('p');
		this.questionElem.className = 'question';
		this.questionElem.innerHTML = question;
		this.question.appendChild(this.questionElem);

		this.tasksItems = document.createElement('ul');
		this.tasksItems.className = 'list';
		this.question.appendChild(this.tasksItems);

		answer.forEach(function (item, i, answer) {
			this.answerItem = document.createElement('li');
			this.answerItem.className = 'item';
			this.tasksItems.appendChild(this.answerItem);

			this.labelElem = document.createElement('label');
			this.answerItem.appendChild(this.labelElem);

			this.checkboxElem = document.createElement("input");
			this.checkboxElem.type = "checkbox";
			this.labelElem.appendChild(this.checkboxElem);

			this.pElem = document.createElement('span');
			this.pElem.className = 'answer';
			this.pElem.innerHTML = item;
			this.answerItem.appendChild(this.pElem);
		}.bind(this))
	},
	button: function () {
		this.button = document.createElement('a');
		this.button.setAttribute("href", "#");
		this.button.className = 'check-button';
		this.button.innerHTML = 'Проверить мои результаты';
		this.section.appendChild(this.button);
	}

}

var questionsData = [{
	id: 1,
	title: 'Вопрос №1',
	answers: [{
		id: 1,
		title: 'Вариант ответа №1',
		isRight: false
	}, {
		id: 2,
		title: 'Вариант ответа №2',
		isRight: false
	}, {
		id: 3,
		title: 'Вариант ответа №3',
		isRight: true
	}]
}, {
	id: 2,
	title: 'Вопрос №2',
	answers: [{
		id: 1,
		title: 'Вариант ответа №1',
		isRight: false
	}, {
		id: 2,
		title: 'Вариант ответа №2',
		isRight: false
	}, {
		id: 3,
		title: 'Вариант ответа №3',
		isRight: true
	}]
},{
		id: 3,
		title: 'Вопрос №3',
		answers: [{
			id: 1,
			title: 'Вариант ответа №1',
			isRight: false
		}, {
			id: 2,
			title: 'Вариант ответа №2',
			isRight: false
		}, {
			id: 3,
			title: 'Вариант ответа №3',
			isRight: true
		}]
	}
]

function createDom () {
	generateDOM.layout();
	generateDOM.title('Тест по программированию');
	generateDOM.numeraticList();
	for (var i = 0; i < questionsData.length; i++) {
		var massArr = [];
		for (var j = 0; j < questionsData[i].answers.length; j++) {
			massArr.push(questionsData[i].answers[j].title);
		}
		generateDOM.addTask(questionsData[i].title, massArr);
	}
	generateDOM.button();
};

createDom ();