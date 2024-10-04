// scripts/memory.js
const cards = [
  { name: 'pc', img: 'assets/pc.png' },
  { name: 'mouse', img: 'assets/mouse.png' },
  { name: 'pen', img: 'assets/pen.png' },
  { name: 'impressora', img: 'assets/impressora.png' },
  { name: 'servidor', img: 'assets/servidor.png' },
  { name: 'sinal', img: 'assets/sinal.png' },
  // Adicione mais cartas conforme necessário
];

const duplicatedCards = [...cards, ...cards];
duplicatedCards.sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;
let matches = 0;

function createCard(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.name = card.name;

  const frontFace = document.createElement('div');
  frontFace.classList.add('front');

  const backFace = document.createElement('div');
  backFace.classList.add('back');
  const img = document.createElement('img');
  img.src = card.img;
  backFace.appendChild(img);

  cardElement.appendChild(frontFace);
  cardElement.appendChild(backFace);

  cardElement.addEventListener('click', handleCardClick);

  return cardElement;
}

function handleCardClick(e) {
  const card = e.currentTarget;
  if (card.classList.contains('flipped') || secondCard) return;

  card.classList.add('flipped');

  setTimeout(() => {
    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      checkMatch();
    }
  }, 300);
}

function checkMatch() {
  if (firstCard.dataset.name === secondCard.dataset.name) {
    firstCard.removeEventListener('click', handleCardClick);
    secondCard.removeEventListener('click', handleCardClick);
    matches++;
    resetCards();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetCards();
    }, 500);
  }

  if (matches === cards.length) {
    alert('Parabéns! Você completou o jogo!');
  }
}

function resetCards() {
  [firstCard, secondCard] = [null, null];
}

function startGame() {
  duplicatedCards.forEach((card) => {
    const cardElement = createCard(card);
    gameBoard.appendChild(cardElement);
  });
}

startGame();