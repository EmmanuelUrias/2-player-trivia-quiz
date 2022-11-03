const startTriviaButton = document.getElementById('startTrivia-btn btn')

const questionContainer = document.getElementById('question-con')

const welcomeMessage = document.getElementById('start-title')

const playerScore = document.getElementById('player-scoreboard')

startTriviaButton.addEventListener('click', startTrivia)

function startTrivia() {
startTriviaButton.classList.add('hide')

welcomeMessage.classList.add('hide')

playerScore.classList.remove('hide')

questionContainer.classList.remove('hide')

nextquestion()

console.log('test')
}

function nextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: '...',
        answers: [
             {text: 'undefined', correct: true },
             { text: 'undefined', correct: false },
             { text: 'undefined', correct: false }
        ]
    }
]