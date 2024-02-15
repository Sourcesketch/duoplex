$(document).ready(function(){
    // click on menu button
    $("#menu").on("click", function(){
      $(".dp-header-main__box").slideDown().toggleClass("hidden");
      $("#cards").slideToggle("");
      $(".dp-header-main__text").toggleClass("text-white");
      $(".dp-header-main__menu").toggleClass("bg-white");
      $("#menuIcon").toggleClass("hidden");
      $("#closeIcon").toggleClass("hidden"); 
    });
    // $('.path').slideToggle("slow").animate({scaleX: '1660', scaleY});
});