var player;
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

document.addEventListener("DOMContentLoaded", init);

function init() {
  function checkMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!!");
    } else if (cardsInPlay.length === 2) {
      alert("Sorry, try again");
    }
  }

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    this.setAttribute("src", cards[cardId].cardImage);
    // console.log("User flipped" + " " + cards[cardId].rank);
    // console.log(cards[cardId].cardImage);
    // console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    checkMatch();
  }

  function createBoard() {
    for (var i = 0; i < cards.length; i++) {
      // const j = Math.floor(Math.random() * (i + 1));
      // [cards[i], cards[j]] = [cards[j], cards[i]];
      var cardElement = document.createElement("img");
      cardElement.setAttribute("src", "images/back.png");
      cardElement.setAttribute("data-id", i);
      cardElement.addEventListener("click", flipCard);
      document.getElementById("game-board").appendChild(cardElement);
    }
  }

  createBoard();
}

// var resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", init);
