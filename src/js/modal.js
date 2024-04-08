
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
project.onclick = function() {
  modal.style.display = "block";
}
project1.onclick = function() {
  modal1.style.display = "block";
}
project2.onclick = function() {
  modal2.style.display = "block";
}
project3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}
close1.onclick = function() {
  modal1.style.display = "none";
}
close2.onclick = function() {
  modal2.style.display = "none";
}
close3.onclick = function() {
  modal3.style.display = "none";
}
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
 