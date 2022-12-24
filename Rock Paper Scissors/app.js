const computerchoicedisplay = document.getElementById('computer-choice')
const userchoicedisplay = document.getElementById('your-choice')
const resultdisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')

let userchoice
let computerChoice
let result
possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener('click', (e) => {
    userchoice = e.target.id
    userchoicedisplay.innerHTML = userchoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerchoicedisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userchoice){
        result = "It's a Draw"
    }
    if(computerChoice === 'rock' && userchoice === 'paper'){
        result = "You Won!"
    }
    if(computerChoice === 'rock' && userchoice === 'scissors'){
        result = "You Lost!"
    }
    if(computerChoice === 'paper' && userchoice === 'scissors'){
        result = "You Won!"
    }
    if(computerChoice === 'paper' && userchoice === 'rock'){
        result = "You Lost!"
    }
    if(computerChoice === 'scissors' && userchoice === 'rock'){
        result = "You Won!"
    }
    if(computerChoice === 'scissors' && userchoice === 'paper'){
        result = "You Lost!"
    }
    resultdisplay.innerHTML = result
}