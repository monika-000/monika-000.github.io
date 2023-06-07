let buttons = document.getElementsByClassName("navBar-button");
let cards = document.getElementsByClassName("navbar-card");

displayCard();

function displayCard(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => {
            cards[i].style.display = "block"; 
        });
        cards[i].style.display = "none";
    }   
}
