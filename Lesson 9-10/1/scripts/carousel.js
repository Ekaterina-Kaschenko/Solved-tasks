$(document).ready(function(){  
  var set = {
     root: $('.jcarousel'),
     buttons: {
        prev: $('.jcarousel-control-prev'),
        next: $('.jcarousel-control-next'),
     },
     config: {
        animation: 500,
        wrap: 'both',
     },
     
     autoScroll: true,
     autoScrollInterval: 3000,
  }
  
  set.root.jcarousel(set.config);
  
  if (set.autoScroll) {
     setInterval(next, set.autoScrollInterval);
  }
  
  set.buttons.prev.click(prev);
  set.buttons.next.click(next);
  
  function prev() {
     set.root.jcarousel('scroll', '-=1');
  }
  
  function next() {
     set.root.jcarousel('scroll', '+=1');
  }

})
