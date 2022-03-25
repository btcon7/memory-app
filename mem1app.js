document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: "cash",
        img: "imgs\cash.png"
      },
      {
        name: "deadpool",
        img: "imgs\deadpool.png"
      },
      {
        name: "heart",
        img: "imgs\heart.png"
      },
      {
        name: "pizza",
        img: "imgs\pizza.png"
      },
      {
        name: "pokeball",
        img: "imgs\pokeball.png"
      },
      {
        name: "watermelon",
        img: "imgs\watermelon.png"
      },
      {
        name: "cash",
        img: "imgs\cash.png"
      },
      {
        name: "deadpool",
        img: "imgs\deadpool.png"
      },
      {
        name: "heart",
        img: "imgs\heart.png"
      },
      {
        name: "pizza",
        img: "imgs\pizza.png"
      },
      {
        name: "pokeball",
        img: "imgs\pokeball.png"
      },
      {
        name: "watermelon",
        img: "imgs\watermelon.png"
      },
    ]
  console.log(cardArray);
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("imgs")
        card.setAttribute("src", "iC:\Users\Administrator\Documents\js for beginers\demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        grid.appendChild(card)
      }
    }
  
    
    function checkForMatch() {
      const cards = document.querySelectorAll("img")
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "C:\Users\Administrator\Documents\js for beginers\demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank.png")
        cards[optionTwoId].setAttribute("src", "C:\Users\Administrator\Documents\js for beginers\demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank.png")
        alert("You have clicked the same image!")
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match")
        cards[optionOneId].setAttribute("src", "C:\Users\Administrator\Documents\js for beginers\demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank.png")
        cards[optionTwoId].setAttribute("src", "C:\Users\Administrator\Documents\js for beginers\demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute("src", "C:\Users\Administrator\Documents\js for beginers\demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank.png")
        cards[optionTwoId].setAttribute("src", "C:\Users\Administrator\Documents\js for beginers\demo still trying copying  (Newbie) project\p3 prac game1\imgs\blank.png")
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
  
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })