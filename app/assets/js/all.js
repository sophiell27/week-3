console.log('Hello!');

$(document).ready(() => {
  // header: hamburger menu show
  $(".ham-menu").click(function(e){
    e.preventDefault();
    $(".header-nav").toggleClass("show-mobile-menu");
  });

  

  // index page : contact agreement checkbox show 
  $(".agreement-box").click(function(){
    $(".agreenment-checked").addClass("agreement-checked-active");
  });
  $(".agreenment-checked").click(function(){
    $(this).removeClass("agreement-checked-active");
  });
  
  // header : menu 系列鏡框 drop down
  $(".menu > li > a").click(function(e){
    e.preventDefault();
    console.log('H!');
    $(this).parent().find("ul").toggleClass("show-menu");
    $(this).parent().siblings().find("ul").removeClass("show-menu");
  });


//  pagintion 

  $(".pagination a").each(function(){
    if ($(this).attr("href") == location.pathname){
            $(this).addClass("page-active");
    }
});
  


  $(document).on("click", function(event){
    var $trigger = $(".header-nav");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".header-nav").removeClass("show-mobile-menu");
        $("ul").removeClass("show-menu");
    }            
  });
  
});

//  header: hamburger menu hide when click outside


