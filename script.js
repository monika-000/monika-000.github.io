function displayCard(sectionName){
    let cards = document.getElementsByClassName("navbar-card");
    let welocmeMessage = document.getElementById("welcomeMessage");
    //let modal = document.getElementsByClassName(".modal");
    for(let i = 0; i< cards.length; i++){
    //for(let i = 0; i< modal.length; i++){
        cards[i].style.display = "none"
        welocmeMessage.style.display = "block"
        //modal[i].style.display = "none"
    }
    welocmeMessage.style.display = "none"
    document.getElementById(sectionName).style.display ="block";
}