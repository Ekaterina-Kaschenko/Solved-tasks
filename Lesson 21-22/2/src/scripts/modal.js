import '../styles/modal.scss';
import '../styles/styles.scss';
import window.Test.countAnswer from './app.js';

import $ from 'jquery';
import Text from './app.js';

$(document).ready(() => ) {
	const text = new Test();
	$('.trigger').click(() => {
		$('.modal-wrapper').toggleClass('.open');
		$('.test-rezult')[0].innerHTML = `У вас ${test.countAnswer} правильных ответов`;
		test.clearCheckboxes();
		return false; 
	});
});