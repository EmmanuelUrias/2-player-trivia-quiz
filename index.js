const startTriviaButton = document.getElementById('startTrivia-btn btn')

const questionContainer = document.getElementById('question-con')

const welcomeMessage = document.getElementById('start-title')

const questionElement = document.getElementById('questions')
const answerBtns = document.getElementById('answer-btns')
const nextBtn = document.getElementById('nextQuestion-btn btn')

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
    resetQuestion()

    showQuestion(shuffleQuestion[currentQuestion])
    questionElement.innerText = questions.question
}

function showQuestion(question) {
    questionElement.innerText = questions.question

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)
    })
}

function resetQuestion() {
    nextBtn.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
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