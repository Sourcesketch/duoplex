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
let prevOne = document.querySelector('.prevOne');
let nextOne = document.querySelector('.nextOne');
let imgs = document.querySelectorAll('.carousel-img');
let totalImgs = imgs.length;
let imgPosition = 0;
let prevTwo= document.querySelector('.prevTwo');
let nextTwo = document.querySelector('.nextTwo');
let imgs1 = document.querySelectorAll('.carousel-img1');
let totalImgs1 = imgs1.length;
let prevSlide= document.querySelector('.prevSlide');
let nextSlide = document.querySelector('.nextSlide');
let imgs2 = document.querySelectorAll('.carousel-img2');
let totalImgs2 = imgs2.length;
let prevSlidet= document.querySelector('.prevSlidet');
let nextSlidet= document.querySelector('.nextSlidet');
let imgs3 = document.querySelectorAll('.carousel-img3');
let totalImgs3 = imgs3.length;
// Event Listeners
nextOne.addEventListener('click', nextImg);
prevOne.addEventListener('click', prevImg);
nextTwo.addEventListener('click', nextOneImg);
prevTwo.addEventListener('click', prevOneImg);
nextSlide.addEventListener('click', nextSlideImg);
prevSlide.addEventListener('click', prevSlideImg);
nextSlidet.addEventListener('click', nextSlidetImg);
prevSlidet.addEventListener('click', prevSlidetImg);
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
// 2

// Update Position
function updatePositionOne() {
  //   Images
  for (let img1 of imgs1) {
    img1.classList.remove('visible');
    img1.classList.add('hidden');
  }
  imgs1[imgPosition].classList.remove('hidden');
  imgs1[imgPosition].classList.add('visible');
}
// Next Img
function nextOneImg() {
  if (imgPosition === totalImgs1 - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  updatePositionOne();
}
//Previous Image
function prevOneImg() {
  if (imgPosition === 0) {
    imgPosition = totalImgs1 - 1;
  } else {
    imgPosition--;
  }
  updatePositionOne();
}
//3
// Update Position
function updatePositionSlide() {
  //   Images
  for (let img2 of imgs2) {
    img2.classList.remove('visible');
    img2.classList.add('hidden');
  }
  imgs2[imgPosition].classList.remove('hidden');
  imgs2[imgPosition].classList.add('visible');
}
// Next Img
function nextSlideImg() {
  if (imgPosition === totalImgs2 - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  updatePositionSlide();
}
//Previous Image
function prevSlideImg() {
  if (imgPosition === 0) {
    imgPosition = totalImgs2 - 1;
  } else {
    imgPosition--;
  }
  updatePositionSlide();
}
//4
// Update Position
function updatePositionSlidet() {
  //   Images
  for (let img3 of imgs3) {
    img3.classList.remove('visible');
    img3.classList.add('hidden');
  }
  imgs3[imgPosition].classList.remove('hidden');
  imgs3[imgPosition].classList.add('visible');
}
// Next Img
function nextSlidetImg() {
  if (imgPosition === totalImgs3 - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  updatePositionSlidet();
}
//Previous Image
function prevSlidetImg() {
  if (imgPosition === 0) {
    imgPosition = totalImgs3 - 1;
  } else {
    imgPosition--;
  }
  updatePositionSlidet();
}
 
// portfolio image scale up

// $(".box2 img").hover(function () {
//   $(this).css("transform", "scale(1.1)");
// }, function () {
//   $(this).css("transform", "scale(1)");
// });

