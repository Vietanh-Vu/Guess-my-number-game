'use strict'

let secretNumber = Math.floor(Math.random() * 20 + 1)
let inputNumber = document.querySelector('.guess').value
let displayMessage = document.querySelector('.message')
let displayResult = document.querySelector('.number')
let score = 20
let highScore = 0



// game logic
function run() {
    let inputNumber = Number(document.querySelector('.guess').value)
    
    if (!inputNumber) {
        displayMessage.textContent = '⚠️ Please enter a number'
    } else {
        if (inputNumber === secretNumber) {
            displayMessage.textContent = '🎇 Congratulations! You have won the game!'
            displayResult.textContent = secretNumber
            displayResult.style.width = '30rem'
            document.querySelector('body').style.backgroundColor = '#60b347'
            if (score > highScore) {
                highScore = score
                document.querySelector('.highscore').textContent = highScore
            }
        } else {
            if (score === 0) {
                displayMessage.textContent = '😭 You lost the game'
            } else {
                displayMessage.textContent = secretNumber > inputNumber ? '📉 Too low!' : '📈 Too high!'
                document.querySelector('.score').textContent = --score
            }
        }
    }
}

function playAgain() {
    secretNumber = Math.floor(Math.random() * 20 + 1)
    displayMessage.textContent = 'Start guessing...'
    displayResult.textContent = '?'
    displayResult.style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    score = 20
    document.querySelector('.score').textContent = 20
}

// click again button to play again
document.querySelector('.again').addEventListener('click', playAgain)

// ctrl + enter to play again 
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        playAgain()
    }
})

// click check button to check
document.querySelector('.check').addEventListener('click', run)

// press enter to check
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !event.ctrlKey) {
        run()
    }
})