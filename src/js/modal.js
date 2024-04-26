
// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
// Get the button that opens the modal
var project = document.getElementById("catalog__1");
var project1 = document.getElementById("catalog__2");
var project2 = document.getElementById("catalog__3");
var project3 = document.getElementById("catalog__4");
// Get the <svg> element that closes the modal
var close = document.getElementsByClassName("close")[0];
var close1 = document.getElementsByClassName("close1")[0];
var close2 = document.getElementsByClassName("close2")[0];
var close3 = document.getElementsByClassName("close3")[0];
// When the user clicks the button, open the modal 
project.onclick = function () {
  modal.style.display = "block";
}
project1.onclick = function () {
  modal1.style.display = "block";
}
project2.onclick = function () {
  modal2.style.display = "block";
}
project3.onclick = function () {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
}
close1.onclick = function () {
  modal1.style.display = "none";
}
close2.onclick = function () {
  modal2.style.display = "none";
}
close3.onclick = function () {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


//show more or less

function toggleText() {
  let points =
    document.getElementById("points");
  let showMoreText =
    document.getElementById("more");

  let buttonText =
    document.getElementById("textButton");

  if (points.style.display === "none") {
    showMoreText.style.display = "none";
    points.style.display = "inline";
    buttonText.innerHTML = "Show More";
  }
  else {
    showMoreText.style.display = "inline";
    points.style.display = "none";
    buttonText.innerHTML = "Show Less";
  }
}
function toggleTextII() {
  //2
  let pointsII =
    document.getElementById("pointsII");

  let showMoreTextII =
    document.getElementById("moreII");

  let buttonTextII =
    document.getElementById("textButtonII");

  if (pointsII.style.display === "none") {
    showMoreTextII.style.display = "none";
    pointsII.style.display = "inline";
    buttonTextII.innerHTML = "Show More";
  }
  else {
    showMoreTextII.style.display = "inline";
    pointsII.style.display = "none";
    buttonTextII.innerHTML = "Show Less";
  }
}
function toggleTextIII() {
  //3
  let pointsIII =
    document.getElementById("pointsIII");
  let showMoreTextIII =
    document.getElementById("moreIII");
  let buttonTextIII =
    document.getElementById("textButtonIII");

  if (pointsIII.style.display === "none") {
    showMoreTextIII.style.display = "none";
    pointsIII.style.display = "inline";
    buttonTextIII.innerHTML = "Show More";
  }
  else {
    showMoreTextIII.style.display = "inline";
    pointsIII.style.display = "none";
    buttonTextIII.innerHTML = "Show Less";
  }
}
function toggleTextIV() {
  //4
  let pointsIV =
    document.getElementById("pointsIV");
  let showMoreTextIV =
    document.getElementById("moreIV");
  let buttonTextIV =
    document.getElementById("textButtonIV");

  if (pointsIV.style.display === "none") {
    showMoreTextIV.style.display = "none";
    pointsIV.style.display = "inline";
    buttonTextIV.innerHTML = "Show More";
  }
  else {
    showMoreTextIV.style.display = "inline";
    pointsIV.style.display = "none";
    buttonTextIV.innerHTML = "Show Less";
  }
}
function toggleTextV() {
  //5
  let pointsV =
    document.getElementById("pointsV");
  let showMoreTextV =
    document.getElementById("moreV");
  let buttonTextV =
    document.getElementById("textButtonV");

  if (pointsV.style.display === "none") {
    showMoreTextV.style.display = "none";
    pointsV.style.display = "inline";
    buttonTextV.innerHTML = "Show More";
  }
  else {
    showMoreTextV.style.display = "inline";
    pointsV.style.display = "none";
    buttonTextV.innerHTML = "Show Less";
  }
}

// for enlarge images

$(document).ready(function() {
  $(".toggleImg").on('click', function(){
    $(this).toggleClass('enlarged');
  });
});


  

 

