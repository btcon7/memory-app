document.addEventListener('DOMContentLoaded', () => {
 
                         
const cardArrays = [          //card options
    {
        mame: 'cash1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\cash1.png'
    },
    {
        mame: 'cash1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\cash1.png'
    },
    {
        mame: 'deadpool1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\deadpool1.png'
    },
    {
        mame: 'deadpool1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\deadpool1.png'
    },
    {
        mame: 'heart1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\heart1.png'
    },
    {
        mame: 'heart1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\heart1.png'
    },
    {
        mame: 'pizza1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\pizza1.png'
    },
    {
        mame: 'pizza1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\pizza1.png/pizza1.png'
    },
    {
        mame: 'pokeball1' ,
        img: 'imgs/pdemo still trying copying  (Newbie) project\p3 prac game1\imgs\pokeball1.pngokeball1.png'
    },
    {
        mame: 'pokeball1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\pokeball1.png/pokeball1.png'
    },
    {
        mame: 'watermelon1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\watermelon1.png/watermelon1.png'
    },
    {
        mame: 'watermelon1' ,
        img: 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\watermelon1.png/watermelon1.png'
    }
]


    
   const grid = document.querySelector.length('.grd')
   const resultDisplay = document.querySelector('#result')
   let cardsChosen=[]
   let cardsChosenId=[]
   let cardsWon = []



  function createBoard (){
      for (let i =0; i < cardArrays.length; i++){
          const card = document.createElement('imgs')
          card.setAttribute('src', 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank1.png')
          card.setAttribute('data-id' , i)
          card.addEventListener('click' , flipcard)
          grid.appendChild(card)

      }
  }

function checkForMatch(){
    const cards =document.querySelectorAll('img')
    const optionOneId = cardsChosenId [0]
    const optiontwoId = cardsChosenId [1]

     if (cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match")
        cards[optionOneId].setAttribute('src' , 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\white1.png')
        cards[optiontwoId].setAttribute('src' , 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\white1.png')
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src' , 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank1.png')
        crads[optiontwoId].setAttribute('src' , 'demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank1.png')
        alert("Sorry try again")

    }
      cardsChosen=[]
      cardsChosen=[]
      resultDisplay.textContent = cardsWon.length
      if (cardsWon.length === cardArrays.length/2){
          resultDisplay.textContent = 'Congratulations! You found them All!'
      }
}




//flip card
function flipcard(){
    let carId = this.getAttribute('data-id')
    cardsChosen.push(cardArrays[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArrays[cardId].img)
    if (cardsChosen.lentgh === 2){
        setTimeout(checkForMatch,500)
    }
}



  createBoard()

  
})