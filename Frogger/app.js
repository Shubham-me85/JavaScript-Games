const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const logsleft = document.querySelectorAll('.log-left')
const logsright = document.querySelectorAll('.log-right')
const squares = document.querySelectorAll('.grid div')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')


console.log('moved')
let currentIndex = 76
const width = 9
let timerID
let currentTime = 20
let outcomeTimerId
function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')
    switch(e.key){
        case 'ArrowLeft' :
            console.log('move left')
            if(currentIndex % width != 0){
            currentIndex-= 1
            }
            break
        case 'ArrowRight' :
            console.log('move right')
            if(currentIndex % width < width-1){
            currentIndex+=1
            }
            break   
        case 'ArrowUp' :
            console.log('move up')
            if(currentIndex - width >= 0){
            currentIndex-=width
            }
            break  
        case 'ArrowDown' :
            console.log('move down')
            if(currentIndex + width < width*width ){
            currentIndex+=width
            }
            break                
    }
    squares[currentIndex].classList.add('frog')

}



function autoMoveElements() {
    currentTime--
    timeLeftDisplay.textContent = currentTime
    logsleft.forEach(logleft => moveLogLeft(logleft))
    logsright.forEach(logright => moveLogRight(logright))
    carsLeft.forEach(carsleft => moveCarLeft(carsleft))
    carsRight.forEach(carsright => moveCarRight(carsright))
    
}


function checkOutcomes() {
    lose()
    win()
}
 

function moveLogLeft(logleft) {
    switch(true){
        case logleft.classList.contains('l1') :
            logleft.classList.remove('l1')
            logleft.classList.add('l2')
            break
            case logleft.classList.contains('l2') :
                logleft.classList.remove('l2')
                logleft.classList.add('l3')
                break    
                case logleft.classList.contains('l3') :
                    logleft.classList.remove('l3')
                    logleft.classList.add('l4')
                    break    
                    case logleft.classList.contains('l4') :
                        logleft.classList.remove('l4')
                        logleft.classList.add('l5')
                        break 
                        case logleft.classList.contains('l5') :
                            logleft.classList.remove('l5')
                            logleft.classList.add('l1')
                            break                       
    }
}


function moveLogRight(logright) {
    switch(true){
        case logright.classList.contains('l1') :
            logright.classList.remove('l1')
            logright.classList.add('l5')
            break
            case logright.classList.contains('l2') :
                logright.classList.remove('l2')
                logright.classList.add('l1')
                break    
                case logright.classList.contains('l3') :
                    logright.classList.remove('l3')
                    logright.classList.add('l2')
                    break    
                    case logright.classList.contains('l4') :
                        logright.classList.remove('l4')
                        logright.classList.add('l3')
                        break 
                        case logright.classList.contains('l5') :
                            logright.classList.remove('l5')
                            logright.classList.add('l4')
                            break                       
    }
}

function moveCarLeft(carsleft) {
    switch(true){
        case carsleft.classList.contains('c1') :
            carsleft.classList.remove('c1')
            carsleft.classList.add('c2')
            break
            case carsleft.classList.contains('c2') :
                carsleft.classList.remove('c2')
                carsleft.classList.add('c3')
                break    
                case carsleft.classList.contains('c3') :
                    carsleft.classList.remove('c3')
                    carsleft.classList.add('c1')
                    break    
                                 
    }
}
function moveCarRight(carsright) {
    switch(true){
        case carsright.classList.contains('c1') :
            carsright.classList.remove('c1')
            carsright.classList.add('c3')
            break
            case carsright.classList.contains('c2') :
                carsright.classList.remove('c2')
                carsright.classList.add('c1')
                break    
                case carsright.classList.contains('c3') :
                    carsright.classList.remove('c3')
                    carsright.classList.add('c2')
                    break    
                                 
    }
}

function lose() {
    if(
        squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('l4') ||
        squares[currentIndex].classList.contains('l5') ||
        currentTime <= 0
        ){
        resultDisplay.textContent = 'You Lose!'
        clearInterval(timerID)
        clearInterval(outcomeTimerId)
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup', moveFrog)
    }
}

function win() {
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = 'You Win!'
        clearInterval(timerID)
        clearInterval(outcomeTimerId)
        document.removeEventListener('keyup', moveFrog)
    }
}

startPauseButton.addEventListener('click', () => {
    if(timerID){
        clearInterval(timerID)
        clearInterval(outcomeTimerId)
        timerID = null
        outcomeTimerId = null
        document.removeEventListener('keyup',moveFrog)
    }
    else{
        timerID = setInterval(autoMoveElements, 1000)
        outcomeTimerId = setInterval(checkOutcomes,50)
        document.addEventListener('keyup',moveFrog)
    }
})


