var counter = 0;
var images = $("#slider-wrapper .slider-list > a").length;
var nitems = images - 1;
$(".indicators .dot:first-child").addClass("active");
function verticalSlider() {
  counter++;
  var imgid = Math.abs(
    Math.abs(nitems - (counter % (nitems * 3))) - nitems
  );
  var leftpos = $("#slider-wrapper img:first-child").height() * imgid;
  $(".indicators .dot").removeClass("active").eq(imgid).addClass("active");
  $("#slider-wrapper .slider-list").animate(
    {
      top: -leftpos + "px",
    },
    500
  );
  setTimeout(verticalSlider, 3000);
}
setTimeout(verticalSlider, 3000);

 