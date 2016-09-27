import questionsData from './script.js';
import _ from 'lodash';

function Test() {
  this.init();
}

Test.prototype.getTemplate = () => {
  let tmplTest = document.getElementById('grid-template').innerHTML;
  tmplTest = _.template(tmplTest);

  document.getElementsByClassName('section')[0].innerHTML += tmplTest({
    list: questionsData
  });

  let tmplButton = document.getElementById('button').innerHTML;
  tmplButton = _.template(tmplButton);

  document.getElementsByClassName('section')[0].innerHTML += tmplButton({

  });

  let tmplModal = document.getElementById('modal').innerHTML;
  tmplModal = _.template(tmplModal);

  document.getElementsByClassName('section')[0].innerHTML += tmplModal({

  });
};

Test.prototype.localStorageInit = obj => {
  localStorage.setItem('testObject', JSON.stringify(obj));
  let textObj = localStorage.getItem('testObject');
  return JSON.parse(textObj);
};

Test.prototype.checkCorrectAnswer = function () {
  let self = this;
  let allAnswers = questionsData.length;
  let answer = this.localStorageInit(questionsData);
  let inputs = Array.prototype.slice.call(document.getElementsByClassName('answer'));
  let checkButton =  document.getElementsByClassName('check-button')[0];
  checkButton.addEventListener('click', function () {
    self.countAnswer = 0;
    self.correctAnswers = new Array(questionsData.length);
    inputs.forEach(function (el) {
      let dataQuestion = el.getAttribute('data-question');
      let dataId = el.getAttribute('data-id');
      let answer = questionsData[dataQuestion].answers[dataId];

      if (answer.isRight && el.checked && self.correctAnswers[dataQuestion] !== false) {
        self.correctAnswers[dataQuestion] = true;
      } else if (answer.isRight && !el.checked || !answer.isRight && el.checked) {
        self.correctAnswers[dataQuestion] = false;
      }
    });

    for (let i = 0; i < self.correctAnswers.length; i++) {
      if (!self.correctAnswers[i]) {
        self.countAnswer = self.countAnswer;
      } else {
        self.countAnswer++;
      }
    }
  });

};

Test.prototype.clearCheckboxes = () => {
  let checkboxes = document.getElementsByClassName('answer');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
}

Test.prototype.init = function () {
  this.getTemplate();
  this.checkCorrectAnswer();
};

export default Test;
