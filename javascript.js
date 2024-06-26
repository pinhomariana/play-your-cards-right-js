const cardImages = [
    'ace_of_spades.png',
    '2_of_clubs.png',
    '3_of_diamonds.png',
    '4_of_hearts.png',
    '5_of_spades.png',
    '6_of_clubs.png',
    '7_of_diamonds.png',
    '8_of_hearts.png',
    '9_of_spades.png',
    '10_of_clubs.png',
    'jack_of_diamonds2.png',
    'queen_of_diamonds.png',
    'king_of_hearts.png',
]

let deck = Math.floor(Math.random() * 13) + 1;
let currentCard = deck
let CurrentCardImg = document.querySelector('#card-img')
let score = 0


CurrentCardImg.src = cardImages[(currentCard - 1)]

function checkGuessHigher() {
    let next_card = Math.floor(Math.random() * 13) + 1;
    if (next_card > currentCard) {
        currentCard = next_card
        score += 1 
        CurrentCardImg.src = cardImages[(currentCard - 1)]
    }
    else {
        let gameOver = `Wrong Guess. Game Over! Your Score was ${score}!`
        alert(gameOver)
        window.location.href = "index.html";
    }
}

function checkGuessLower() {
    let next_card = Math.floor(Math.random() * 13) + 1;
    if (next_card < currentCard) {
        currentCard = next_card
        score += 1 
        CurrentCardImg.src = cardImages[(currentCard - 1)]
    }
    else {
        let gameOver = `Wrong Guess. Game Over! Your Score was ${score}!`
        alert(gameOver)
        window.location.href = "index.html";
    }
}


