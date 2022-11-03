const startTriviaButton = document.getElementById('startTrivia-btn btn')

const questionContainer = document.getElementById('question-con')

const welcomeMessage = document.getElementById('start-title')

const questionElement = document.getElementById('questions')
const answerBtns = document.getElementById('answers-btns')

var playerScore = document.getElementById('player-scoreboard')

let shuffleQuestion, currentQuestion

startTriviaButton.addEventListener('click', startTrivia)

function startTrivia() {
startTriviaButton.classList.add('hide')
shuffleQuestion = questions.sort(() => Math.random() - .5)
currentQuestion = 0

welcomeMessage.classList.add('hide')

playerScore.classList.remove('hide')

questionContainer.classList.remove('hide')

nextQuestion()

console.log('test')
}

function nextQuestion() {
    showQuestion(shuffleQuestion[currentQuestion])
    questionElement.innerText = question.question
}

show

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