const startTriviaButton = document.getElementById('startTrivia-btn btn')

const questionContainerElement = document.getElementById('question-con')

const welcomeMessage = document.getElementById('start-title')

const bugFixer = document.getElementById('empty')

startTriviaButton.addEventListener('click', startTrivia)

function startTrivia() {
startTriviaButton.classList.add('hide')

welcomeMessage.classList.add('hide')

console.log('test')
}

function nextQuestion() {

}

function selectAnswer() {

}