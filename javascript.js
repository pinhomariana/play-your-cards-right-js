

let deck = Math.floor(Math.random() * 14) + 1;
let currentCard = deck
let CurrentCardText = document.querySelector('p').innerHTML = `The current card is: ${currentCard}.`
let score = 0


function checkGuessHigher() {
    let next_card = Math.floor(Math.random() * 14) + 1;
    if (next_card > currentCard) {
        currentCard = next_card
        score += 1 
        CurrentCardText = document.querySelector('p').innerHTML = `The current card is: ${currentCard}.`
    }
    else {
        let gameOver = `Wrong Guess. Game Over! Your Score was ${score}!`
        alert(gameOver)
        window.location.href = "index.html";
    }
}

function checkGuessLower() {
    let next_card = Math.floor(Math.random() * 14) + 1;
    if (next_card < currentCard) {
        currentCard = next_card
        score += 1 
        CurrentCardText = document.querySelector('p').innerHTML = `The current card is: ${currentCard}.`
    }
    else {
        let gameOver = `Wrong Guess. Game Over! Your Score was ${score}!`
        alert(gameOver)
        window.location.href = "index.html";
    }
}


