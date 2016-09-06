$(document).ready(function(){
  function createLayout(input, tip) {
    var $input = $(input),
        container = $input.closest('div');
    if (container.hasClass('form__item') && container.find('div.tip').length > 0) {
      return;
    }

    container.addClass('form__item');
    var elem = document.createElement('div');
    $(elem).addClass('tip').html(tip); 
    container.append(elem);
    return elem;
  }

  $('input').on('mouseover', function () {
    var tip = $(this).prop('title');
    createLayout(this, tip);
  });
  
  $('input').on('mouseleave', function () {
  var cont = $(this).closest('div.form__item');
  console.log('mouse leave', cont);
    if (cont.count < 0) {
      return;
    }

    cont.find('div.tip').remove();
  });
})
