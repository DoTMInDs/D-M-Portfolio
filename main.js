
var navbar = document.getElementById("navbar");

function openmenu(){
    navbar.style.right = '0';
    
}
function closemenu(){
    navbar.style.right = '-200px';
}


// -------------------------------learn-more-container-------------------//
const learnMoreBtn = document.querySelector(".learnMore");
// const backHome = document.querySelector(".backHome");
const dropMore = document.querySelector(".learn-more-container");
const backBtn = document.querySelector(".back-btn");

learnMoreBtn.addEventListener('click', () => {
    dropMore.classList.toggle('dropMoreContainer')

    backBtn.addEventListener('click', () => {
        dropMore.classList.remove('dropMoreContainer')
    })
   
})

// -------------------------------learn-more-container-------------------//
const graph = document.querySelector('.graph-des');
const graphicFlex = document.querySelector('.graphicFlex');
const graphbackHome = document.querySelector('.graphbackHome');

graph.addEventListener('click', () => {
    graphicFlex.classList.toggle('graphic-margin-top')
        
    graphbackHome.addEventListener('click', () => {
        graphicFlex.classList.remove('graphic-margin-top');
    })
})




// -----------------------------------swipper----------------------------//
const slide = document.querySelector(".slide"),
    reviews = document.querySelectorAll(".reviews"),
    arrowIcons = document.querySelectorAll(".arrowBox i");
    



// ----------------------dark-mode-section----------------//
var darkMode = document.getElementById('darkMode');

darkMode.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darkMode.style.color = 'white';
    }
    else {
        darkMode.style.color = '#a78209';
    }
}