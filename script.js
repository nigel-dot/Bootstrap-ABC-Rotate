// Get all cards with a class of cards
const cards = document.querySelectorAll(".card");
// Get buttons with a class of reset
const resetBtn = document.querySelectorAll(".reset");
console.log(resetBtn);

// function that is called when card is clicked to change card class
function handleCardClicked(event) {
	const cardClicked = event.currentTarget;
	cardClicked.classList.toggle("is-flipped");
}

// interogate all the cards to see which one has been clicked

cards.forEach((cardClicked) =>
	cardClicked.addEventListener("click", handleCardClicked)
);
// interogate all the reset buttons to see which one has been clicked

resetBtn.forEach((buttonClicked) =>
	buttonClicked.addEventListener("click", resetBtnClicked)
);

// function that is called when reset button is clicked to loop through the cards and change card class

function resetBtnClicked() {
	console.log("reset Btn clicked");
	for (let i = 0; i < cards.length; i++) {
		cards[i].classList.remove("is-flipped");
	}
}
