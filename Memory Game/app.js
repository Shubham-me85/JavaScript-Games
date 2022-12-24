const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]


cardArray.sort(() => 0.5 - Math.random())

const gridDislplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

function createBoard (){
   for(let i=0;i<cardArray.length;i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click', flipCard)
    gridDislplay.appendChild(card)
   }
}

createBoard()
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

function checkMatch () {
    const cards = document.querySelectorAll('img')

    console.log('check for Match!')
    if(cardChosenIds[0] == cardChosenIds[1]){
        cards[cardChosenIds[0]].setAttribute('src','images/blank.png')
        cards[cardChosenIds[1]].setAttribute('src','images/blank.png')
        alert('You have clicked the same Card!')
    }

    if(cardChosen[0] == cardChosen[1]){
        alert('You found a Match!')
        cards[cardChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }
    else{
        cards[cardChosenIds[0]].setAttribute('src','images/blank.png')
        cards[cardChosenIds[1]].setAttribute('src','images/blank.png')
        alert('Sorry Try Again!')
    }
    cardChosen = []
    cardChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = 'Congratulations! You have found all the Cards.'
    }
}

function flipCard(){
    const cardId =  this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}