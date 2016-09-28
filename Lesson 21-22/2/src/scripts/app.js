import questionsData from './script.js';
import _ from 'lodash';

class Test{
  constructor() {
    this.init();
  }

  init() {
    this.getTemplate();
    this.checkCorrectAnswer();
  };


  getTemplate() {
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

  localStorageInit(obj) {
    localStorage.setItem('testObject', JSON.stringify(obj));
    let textObj = localStorage.getItem('testObject');
    return JSON.parse(textObj);
  };

  checkCorrectAnswer() {
    // let self = this;
    let allAnswers = questionsData.length;
    let answer = this.localStorageInit(questionsData);
    let inputs = Array.prototype.slice.call(document.getElementsByClassName('answer'));
    let checkButton =  document.getElementsByClassName('check-button')[0];
    checkButton.addEventListener('click', () => {
      this.countAnswer = 0;
      this.correctAnswers = new Array(questionsData.length);
      inputs.forEach( el => {
        let dataQuestion = el.getAttribute('data-question');
        let dataId = el.getAttribute('data-id');
        let answer = questionsData[dataQuestion].answers[dataId];

        if (answer.isRight && el.checked && this.correctAnswers[dataQuestion] !== false) {
          this.correctAnswers[dataQuestion] = true;
        } else if (answer.isRight && !el.checked || !answer.isRight && el.checked) {
          this.correctAnswers[dataQuestion] = false;
        }
      });

      for (let i = 0; i < this.correctAnswers.length; i++) {
        if (!this.correctAnswers[i]) {
          this.countAnswer = this.countAnswer;
        } else {
          this.countAnswer++;
        }
      }
    });

  };

  clearCheckboxes() {
    let checkboxes = document.getElementsByClassName('answer');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }
}
export default Test;
