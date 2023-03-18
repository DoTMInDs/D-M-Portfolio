
var navbar = document.getElementById("navbar");

function openmenu(){
    navbar.style.right = '0';
    
}
function closemenu(){
    navbar.style.right = '-200px';
}







// menu = document.querySelector('.menu-bar');
// menu.onclick = function() {
// nav = document.querySelector('navbar');
// nav.classList.toggle("active");
// }


// function displayMenu(){
//     var menu = document.getElementById("menu");
//     menu.classList.toggle("navbar")
// }
// window.onclick = function(event){
//     if(!event.target.matches("#navbar")){

//         var menu = document.getElementById("menu")
//          if (menu.classList.contains("active")){
//             menu.classList.remove("active")
//          }
     
//     }
// }

// window.onclick = function(event){
//     if(!event.target.matches("#nav")){

//         var menu = document.getElementById("menu")
//         if (menu.classList.contains("active"))
//         {
//             remove.classList.remove("active")
//         }
//     }
// }

// const toggleBtn = document.querySelector('.drop-down-list')
// const toggleBtnicon = document.querySelector('.drop-down-list i')
// const togglePhone = document.querySelector('.phone')

// toggleBtn.onclick = function () {
//     togglePhone.classList.toggle('open')
// }

function dropDownList(){
    var divs = document.getElementById("open");
    divs.classList.toggle("show");
}
    

window.onclick = function(event){
    if(!event.target.matches("#display")){
            
        var removeshow = document.getElementById("open")
        if (removeshow.classList.contains("show"))
        {
            removeshow.classList.remove("show")

        }
        }
    }

function dropDownService(){
    var down = document.getElementById("get");
    down.classList.toggle("aquire");
}

window.onclick = function(event){
    if(!event.target.matches("#win")){

        var take = document.getElementById("get")
        if(take.classList.contains("aquire")){
            take.classList.remove("aquire")
        }
    }
}
