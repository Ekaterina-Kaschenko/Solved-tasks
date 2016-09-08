$(document).ready(function(){
  $('.items').fancySelect({
     forceiOS: true,
  });

  jQuery(".tasks-list-item").mousedown(function() {
    changeCheck(jQuery(this));
  });

  jQuery(".tasks-list-item").each(function() {
    changeCheckStart(jQuery(this));
  });

  function changeCheck(el) {
    var icon = $(el[0].querySelector('.niceCheck'));
    console.log(icon);
   
    input = $(el[0].querySelector('input'));
    console.log(input);
    
    if(!input.attr("checked")) {
      input.attr("checked", true);
      icon.css("background-position","0 -17px");
    } else {
      icon.css("background-position","0 0");    
      input.attr("checked", false)
    }
    return true;
  }
    
  function changeCheckStart(el) {
    var icon = $(el[0].querySelector('.niceCheck'));
          
    input = $(el[0].querySelector('input'));
    if(input.attr("checked")) {
      console.log(1)
      icon.css("background-position","0 0");    
    } else {
      console.log(2)
      icon.css("background-position","0 -17px");  
    }
    
    return true;
  }

})

