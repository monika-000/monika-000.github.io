let buttons = document.getElementsByClassName("navBar-button");
let cards = document.getElementsByClassName("navbar-card");

 function displayCard(sectionName){
    for(let i = 0; i< buttons.length; i++){
           cards[i].style.display = "none"
    }
   document.getElementById(sectionName).style.display ="block";
}