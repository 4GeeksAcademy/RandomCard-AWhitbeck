/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function createCardElement(suit, value) {
    const card = document.createElement("div");
    card.classList.add("card", suit);

    const topSuitElement = document.createElement("div");
    topSuitElement.classList.add("suit", "top-suit");
    topSuitElement.innerHTML = getSuitSymbol(suit);

    const valueElement = document.createElement("div");
    valueElement.classList.add("value");
    valueElement.textContent = value;

    const bottomSuitElement = document.createElement("div");
    bottomSuitElement.classList.add("suit", "bottom-suit");
    bottomSuitElement.innerHTML = getSuitSymbol(suit);

    card.appendChild(topSuitElement);
    card.appendChild(valueElement);
    card.appendChild(bottomSuitElement);

    return card;
  }

  function getSuitSymbol(suit) {
    switch (suit) {
      case "hearts":
        return "♥";
      case "spades":
        return "♠";
      case "clubs":
        return "♣";
      case "diamonds":
        return "♦";
      default:
        return "";
    }
  }

  function generateRandomCard() {
    const suit = getRandomElement(suits);
    const value = getRandomElement(values);
    const cardContainer = document.getElementById("container");

    // Clear previous card
    cardContainer.innerHTML = "";

    // Create and add new card
    const card = createCardElement(suit, value);
    cardContainer.appendChild(card);
  }

  // Generate a card on page load
  generateRandomCard();

  // Set up button click event to generate new card
  const button = document.getElementById("newCardButton");
  button.addEventListener("click", generateRandomCard);
};
