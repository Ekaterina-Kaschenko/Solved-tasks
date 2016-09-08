$(document).ready(function(){
  $('.items').fancySelect({
     forceiOS: true,
  });

  jQuery(".tasks-list-item").change(function() {
    changeCheck(jQuery(this));
  });

  jQuery(".tasks-list-item").each(function() {
    changeCheckStart(jQuery(this));
  });

  function changeCheck(el) {
    var icon = $(el[0].querySelector('.niceCheck'));
    input = $(el[0].querySelector('input'));

    if(!input.prop("checked")) {
      icon.css("background-position","0 -17px");
    } else {
      icon.css("background-position","0 0");    
    }
    return true;
  }
    
  function changeCheckStart(el) {
    var icon = $(el[0].querySelector('.niceCheck'));
          
    input = $(el[0].querySelector('input'));
    if(input.attr("checked")) {
      icon.css("background-position","0 0");    
    } else {
      icon.css("background-position","0 -17px");  
    }
    
    return true;
  }

  $( '.dropdown' ).hover(
    function(){
      $(this).children('.sub-menu').slideDown(200);
    },
    function(){
      $(this).children('.sub-menu').slideUp(200);
    }
  );
  
})

