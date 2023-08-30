//select all filter buttons and filtercards
const filterButtons = document.querySelectorAll(".filter-buttons button");
const imageCards = document.querySelectorAll(".images .card");

//define the function filter.
const filterCard = e => {
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

//iterate over each filtered card
imageCards.forEach(card => {

//add a hide class to every card
card.classList.add("hide");

//check if the card matches the selected filter or all os selected
if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
    card.classList.remove("hide");
}
});
}; 

//add an eventlistener to the buttons triggering an click event
filterButtons.forEach(button => button.addEventListener("click", filterCard));