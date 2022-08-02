console.log('Hello!');

$(document).ready(() => {
  // hamburger menu show
  $(".mobile-nav").click(function(e){
    e.preventDefault();
    $(".header-nav").toggleClass("show-mobile-menu");
  });

  
  
});

//  hamburger menu hide when click outside
$(document).on("click", function(event){
  var $trigger = $(".header-nav");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".header-nav").removeClass("show-mobile-menu");
  }            
});

