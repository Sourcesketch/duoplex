$(document).ready(function(){
    // click on menu button
    $("#menu").on("click", function(){
      $(".dp-header-main__box").slideToggle("slow");
      $("#cards").slideToggle("slow");
      $(".dp-header-main__text").toggleClass("text-white");
      
    });
});