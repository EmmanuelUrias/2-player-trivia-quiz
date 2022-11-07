// Variables for functions
const startTriviaButton = document.getElementById('startTrivia-btn btn')

const questionContainer = document.getElementById('question-con')

const welcomeMessage = document.getElementById('start-title')

const questionsElement = document.getElementById('questions')
const answerBtns = document.getElementById('answer-btns')
const nextBtn = document.getElementById('nextQuestion-btn btn')
const playerScoreBoard = document.getElementById('player-scoreboard')

// Player Score counter
var player1Btn = document.getElementById('player-1-btn')
var player1Score = document.getElementById('player-1-score')
let score1 = 0

var player2Btn = document.getElementById('player-2-btn')
var player2Score = document.getElementById('player-2-score')
let score2 = 0

var playerWinner = document.getElementById('winner')

player1Btn.addEventListener('click', function() {
    score1++;
    player1Score.textContent = score1; 

    if(score1 > score2) {
        player1Score.classList.add('correct')
    }

    if (score1 == score2) {
        drawMessage()
    }
    else{winnerMessage()}
})

player2Btn.addEventListener('click', function() {
    score2++;
    player2Score.textContent = score2;

    if(score2>score1 || score2>shuffleQuestion.length) {
        player1Score.classList.add('correct')
    }

    if (score1 == score2) {
        drawMessage()
    }
    else{winnerMessage()}
})

function winnerMessage(name) {
    if (score1 > score2) {
        playerWinner.textContent = 'Player1'
    }
    else {
        playerWinner.textContent = 'Player2'
    }
}

function drawMessage(name) {
    if (score1 == score2){
        playerWinner.textContent = 'Draw'
    }
}

function restartScore() {
    score1 = 0;
    score2 = 0;

    player1Score.textContent = 0
    player2Score.textContent = 0

    playerWinner.textContent = ""
}

// Variables to shuffle questions
let shuffleQuestion, currentQuestion

// Button to start Trivia
startTriviaButton.addEventListener('click', startTrivia)
nextBtn.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

// Begins trivia
function startTrivia() {
startTriviaButton.classList.add('hide')
shuffleQuestion = questions.sort(() => Math.random() - .5)
currentQuestion = 0

welcomeMessage.classList.add('hide')

playerScoreBoard.classList.remove('hide')

questionContainer.classList.remove('hide')

nextQuestion()

console.log('test')
}

// Resets the question and answers, then grabs the new question to be shown as the next question
function nextQuestion() {
    resetQuestion()

    showQuestion(shuffleQuestion[currentQuestion])    

    console.log('test')
}

// Grabs the next question and shows it and the answers 
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

// Resets the pages question and answers
function resetQuestion() {
    clearStatus(document.body)
    nextBtn.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
    console.log('test')
 }

 //Makes answer buttons work
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

// Tells us whether if a question is right or wrong
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

// Removes the correct or wrong status to remove the red and/or green coloring
function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    if (shuffleQuestion.length > currentQuestion + 1) {
        restartScore()
    }
    console.log('test')
}

// Questions that are shown in the trivia in a random order
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