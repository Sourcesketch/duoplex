$(document).ready(function(){
    // click on menu button
    $("#menu").on("click", function(){
      $(".dp-header-top__menu").slideDown().toggleClass("hidden");
      $("#cards").slideToggle("");
      $(".dp-header-main__text").toggleClass("text-white");
      $(".dp-header-main__menu").toggleClass("bg-white");
      $("#menuIcon").toggleClass("hidden");
      $("#closeIcon").toggleClass("hidden"); 
    });
    // $('.path').slideToggle("slow").animate({scaleX: '1660', scaleY});
    $(".card").click(function () {
      $(".card").removeClass("active");
      // $(".tab").addClass("active"); // instead of this do the below 
      $(this).addClass("active");   
  });
});
 