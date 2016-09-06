$(document).ready(function() {
  function createLayout(input) {
    var $input = $(input),
      container = $input.closest('div'),
      tip = $input.prop('title');
    if (container.hasClass('form__item') && container.find('div.tip').length > 0) {
      return;
    }
    container.addClass('form__item');
    var elem = document.createElement('div');
    $(elem).addClass('tip').addClass('hidden').html(tip);
    container.append(elem);
    $input.attr('title', '');
    input.tip = elem;
    return elem;
  }

  function init() {
    $('input').each(function() {
      createLayout(this)
    })
  }


  $('input').on('mouseover', function() {
    $(this.tip).toggleClass('hidden');
  });

  $('input').on('mouseleave', function() {
    $(this.tip).toggleClass('hidden');
  });
  init();
})


