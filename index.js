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

const winMessage = document.getElementById('winner-message')
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

    if(score2>score1) {
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
    
        player1Score.textContent = 0;
        player2Score.textContent = 0;
    
        playerWinner.textContent = "";
}

function showMessage() {
   
        winMessage.classList.remove('hide')
        winnerMessage()
        drawMessage()
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

winMessage.classList.add('hide')

nextQuestion()

restartScore()
}

// Resets the question and answers, then grabs the new question to be shown as the next question
function nextQuestion() {
    resetQuestion()

    showQuestion(shuffleQuestion[currentQuestion])    

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
}

// Resets the pages question and answers
function resetQuestion() {
    clearStatus(document.body)
    nextBtn.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
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
    else{
        startTriviaButton.innerText = 'Restart'
        startTriviaButton.classList.remove('hide')
        showMessage()
    }
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
}

// Removes the correct or wrong status to remove the red and/or green coloring
function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}


// Questions that are shown in the trivia in a random order
const questions = [
    {
        question: 'Joey played Dr. Drake Ramoray on which soap opera show?',
        answers: [
             {text: 'Days of Our Lives', correct: true },
             { text: 'Hospital Horror', correct: false },
             { text: 'Friends', correct: false },
             {text: 'Breaking Bad', correct: false}
        ]
    },
    {
        question: 'How many times was Ross legally divorced?',
        answers: [
            {text: '4 times', correct: false},
            {text: '3 times', correct: true},
            {text: 'Twice', correct: false},
            {text: 'Never Divorced', correct: false}
        ]
    },
    {
        question: 'Which of the following Chandler “facts” is false?',
        answers: [
             {text: 'He dated Phoebe as a kid', correct: true },
             { text: 'He has a third nipple', correct: false },
             { text: 'He is missing a pinky toe', correct: false },
             {text: 'He once won a Vanilla Ice lookalike contest', correct: false}
        ]
    },    
    {
        question: 'How many times did Chandler and Janice break up during the entirety of Friends?',
        answers: [
             {text: '2 times', correct: false},
             { text: 'once', correct: false},
             { text: '5 times', correct: true},
             {text: '7 times', correct: false}
        ]
    },
    {
        question: 'How many sisters did Joey Tribbiani have?',
        answers: [
             {text: '7', correct: true },
             { text: '4', correct: false },
             { text: '5', correct: false },
             {text: '6', correct: false}
        ]
    },
    {
        question: 'Before they were friends, who did Phoebe mug as a kid?',
        answers: [
             {text: 'Joey', correct: false },
             { text: 'Ross', correct: true },
             { text: 'Monica', correct: false },
             {text: 'Chandler', correct: false}
        ]
    },
    {
        question: 'Which one of the guys did Ursula go out with?',
        answers: [
             {text: 'Joey', correct: true },
             { text: 'Chandler', correct: false },
             { text: 'Ross', correct: false },
             {text: 'The Landlord', correct: false}
        ]
    },
    {
        question: 'What job did Rachels dad have?',
        answers: [
             {text: 'Professor', correct: false},
             { text: 'Attorney', correct: false },
             { text: 'Doctor', correct: true },
             {text: 'TV Personality', correct: false}
        ]
    },
    {
        question: 'What drag name did Chandlers dad go by?',
        answers: [
             {text: 'Farrah Moan', correct: false },
             { text: 'Izzy Rich', correct: false },
             { text: 'Princess Consuela Bananahammock', correct: false },
             {text: 'Helena Handbasket', correct: true}
        ]
    },
    {
        question: 'What was the name of the first restaurant Monica was head chef at?',
        answers: [
             {text: 'Iridium', correct: false },
             { text: 'Moondance Diner', correct: false },
             { text: 'Javu', correct: false },
             {text: 'Alessandro`s', correct: true}
        ]
    }
]