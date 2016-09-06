$(document).ready(function(){
  $(".tabs__item:first").children().addClass("current");

  $('.tabs__item').click(function (e) {
    e.preventDefault();
    var _href = $(this).children().attr("href");
    console.log(_href);
    $(".tabs__item").children().removeClass("current");
    $(this).children().addClass("current");
    $(".tabs-content > div").hide();
    $(_href).fadeIn();
  });
})