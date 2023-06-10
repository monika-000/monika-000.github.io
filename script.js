function displayCard(sectionName){
    let cards = document.getElementsByClassName("navbar-card");
    //let modal = document.getElementsByClassName(".modal");
    for(let i = 0; i< cards.length; i++){
    //for(let i = 0; i< modal.length; i++){
        cards[i].style.display = "none"
        //modal[i].style.display = "none"
    }
   document.getElementById(sectionName).style.display ="block";
}