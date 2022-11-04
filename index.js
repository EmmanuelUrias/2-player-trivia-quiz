const startTriviaButton = document.getElementById('startTrivia-btn btn')

const questionContainer = document.getElementById('question-con')

const welcomeMessage = document.getElementById('start-title')

const questionsElement = document.getElementById('questions')
const answerBtns = document.getElementById('answer-btns')
const nextBtn = document.getElementById('nextQuestion-btn btn')

var playerScore = document.getElementById('player-scoreboard')

let shuffleQuestion, currentQuestion

startTriviaButton.addEventListener('click', startTrivia)
nextBtn.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

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

    console.log('test')
}

function showQuestion(question) {
    questionsElement.innerText = question.question

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
    console.log('test')
}

function resetQuestion() {
    clearStatus(document.body)
    nextBtn.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
    console.log('test')
 }

function selectAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatus(document.body, correct)
    Array.from(answerBtns.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    if (shuffleQuestion.length > currentQuestion + 1) {
        nextBtn.classList.remove('hide')
    }
    else {
        startTriviaButton.innerText = 'Restart'
        startTriviaButton.classList.remove('hide')
    }
    console.log('test')
}

function setStatus(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    } 
    else {
        element.classList.add('wrong')
    }
    console.log('test')
}

function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

    console.log('test')
}

const questions = [
    {
        question: '...',
        answers: [
             {text: '....', correct: true },
             { text: '..', correct: false },
             { text: '.', correct: false }
        ]
    },
    {
        question: 'Yo',
        answers: [
            {text: 'mama', correct: false},
            {text: 'mrs. white', correct: true},
            {text: 'yo', correct: false},
            {text: 'ho', correct: false}
        ]
    }
]