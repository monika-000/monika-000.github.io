function displayCard(sectionName){
    let cards = document.getElementsByClassName("navbar-card");
    for(let i = 0; i< cards.length; i++){
           cards[i].style.display = "none"
    }
   document.getElementById(sectionName).style.display ="block";
}