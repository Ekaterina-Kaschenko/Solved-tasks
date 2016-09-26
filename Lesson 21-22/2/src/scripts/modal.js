$( document ).ready(function() {
  $('.trigger').click ( event => {
    $('.modal-wrapper').toggleClass('open');
    $('.test-result')[0].innerHTML = 'У вас ' + window.Test.countAnswer + ' правильных ответов';
    Test.clearCheckboxes();
    return false;
  });
})