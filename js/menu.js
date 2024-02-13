

document.getElementById('menu-list').addEventListener('click', switchVisible);
function switchVisible() {
    const collection = document.getElementsByClassName("example");
    const listMenu = document.getElementById("listMenu");
    if((collection[0].style.display = "block") && (collection[1].style.display = "block" )&& (collection[2].style.display = "block")) {
        collection[0].style.display = "none";
        collection[1].style.display = "none";
        collection[2].style.display = "none";
        listMenu.style.display = "block";
    }else {
        collection[0].style.display = "block";
        collection[1].style.display = "block";
        collection[2].style.display = "block";
        listMenu.style.display = "none"; 
    }
}

