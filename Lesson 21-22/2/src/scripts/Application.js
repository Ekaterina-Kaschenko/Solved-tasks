import '../styles/modal.scss';
import '../styles/styles.scss';

import $ from 'jquery';
import Test from './app.js';

$(document).ready(() => {
  const test = new Test();
  $('.trigger').click(() => {
    $('.modal-wrapper').toggleClass('open');
    $('.test-result')[0].innerHTML = `У вас ${test.countAnswer} правильных ответов`;
    test.clearCheckboxes();
    return false;
  });
});