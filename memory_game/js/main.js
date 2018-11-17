var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!!");
  } else if (cardsInPlay.length === 2) {
    alert("Sorry, try again");
  }
}

function flipCard(cardId) {
  console.log("User flipped" + " " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkMatch();
}

flipCard(0);
flipCard(2);
