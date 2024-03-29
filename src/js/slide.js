// vertical slider
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

// Horzontal Slider
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgs = document.querySelectorAll('.carousel-img');
let totalImgs = imgs.length;
let imgPosition = 0;

// Event Listeners
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

// Update Position
function updatePosition() {
  //   Images
  for (let img of imgs) {
    img.classList.remove('visible');
    img.classList.add('hidden');
  }
  imgs[imgPosition].classList.remove('hidden');
  imgs[imgPosition].classList.add('visible');
}

// Next Img
function nextImg() {
  if (imgPosition === totalImgs - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  updatePosition();
}
//Previous Image
function prevImg() {
  if (imgPosition === 0) {
    imgPosition = totalImgs - 1;
  } else {
    imgPosition--;
  }
  updatePosition();
}


// portfolio image scale up

// $(".box2 img").hover(function () {
//   $(this).css("transform", "scale(1.1)");
// }, function () {
//   $(this).css("transform", "scale(1)");
// });

