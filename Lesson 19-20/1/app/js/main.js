console.log('hello');
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      direction: true,
  });
 
  var contents = $('.accordeon-content');
  var titles = $('.accordeon-title');
  titles.on('click', function() {
    var title = $(this);
    contents.filter(':visible').slideUp(function(){
     $(this).prev('.accordeon-title').removeClass('is-opened');
    });  
   
    var content = title.next('.accordeon-content'); 
   
    if (!content.is(':visible')) {
      content.slideDown(function(){title.addClass('is-opened')});
    } 
  });
});