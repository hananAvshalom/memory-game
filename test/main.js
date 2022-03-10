// ****** memory game ******

// assign colors to cards randomaly
// make it random by:
    // creating an array of 16 numbers

let deck = []

    // randomize the array with algorithm i found online

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
}
// Usage of shuffle

for(let i = 0; i < 16; i++) {
  deck.push(i);
}
deck = shuffleArray(deck);

// pair the numbers

numOne = deck[0],
numTwo = deck[1],
numThree = deck[2],
numFour = deck[3],
numFive = deck[4],
numSix = deck[5],
numSeven = deck[6],
numEight = deck[7],
numNine = deck[8],
numTen = deck[9],
numEleven = deck[10],
numTwelve = deck[11],
numThirteen = deck[12],
numFourteen = deck[13],
numFifteen = deck[14],
numSixteen = deck[15]


// assign each number of the array to an id in class cards

cardOne = document.querySelector('.one')
cardTwo = document.querySelector('.two')
cardThree = document.querySelector('.three')
cardFour = document.querySelector('.four')
cardFive = document.querySelector('.five')
cardSix = document.querySelector('.six')
cardSeven = document.querySelector('.seven')
cardEight = document.querySelector('.eight')
cardNine = document.querySelector('.nine')
cardTen = document.querySelector('.ten')
cardEleven = document.querySelector('.eleven')
cardTwelve = document.querySelector('.twelve')
cardThirteen = document.querySelector('.thirteen')
cardFourteen = document.querySelector('.fourteen')
cardFifteen= document.querySelector('.fifteen')
cardSixteen = document.querySelector('.sixteen')

// change color of cards based on number generated

function assignOne() {
    if(numOne === 0 || numOne === 1) {
        cardOne.classList.add('purple')
    } else if (numOne === 2 || numOne === 3) {
        cardOne.classList.add('orange')
    } else if (numOne === 4 || numOne === 5) {
        cardOne.classList.add('blue')
    } else if (numOne === 6 || numOne === 7) {
        cardOne.classList.add('gray')
    } else if (numOne === 8 || numOne === 9) {
        cardOne.classList.add('red')
    } else if (numOne === 10 || numOne === 11) {
        cardOne.classList.add('yellow')
    } else if (numOne === 12 || numOne === 13) {
        cardOne.classList.add('green')
    } else if (numOne === 14 || numOne === 15) {
        cardOne.classList.add('teal')
    }
}
function assignTwo() {
    if(numTwo === 0 || numTwo === 1) {
        cardTwo.classList.add('purple')
    } else if (numTwo === 2 || numTwo === 3) {
        cardTwo.classList.add('orange')
    } else if (numTwo === 4 || numTwo === 5) {
        cardTwo.classList.add('blue')
    } else if (numTwo === 6 || numTwo === 7) {
        cardTwo.classList.add('gray')
    } else if (numTwo === 8 || numTwo === 9) {
        cardTwo.classList.add('red')
    } else if (numTwo === 10 || numTwo === 11) {
        cardTwo.classList.add('yellow')
    } else if (numTwo === 12 || numTwo === 13) {
        cardTwo.classList.add('green')
    } else if (numTwo === 14 || numTwo === 15) {
        cardTwo.classList.add('teal')
    }
}
function assignThree() {
    if(numThree === 0 || numThree === 1) {
        cardThree.classList.add('purple')
    } else if (numThree === 2 || numThree === 3) {
        cardThree.classList.add('orange')
    } else if (numThree === 4 || numThree === 5) {
        cardThree.classList.add('blue')
    } else if (numThree === 6 || numThree === 7) {
        cardThree.classList.add('gray')
    } else if (numThree === 8 || numThree === 9) {
        cardThree.classList.add('red')
    } else if (numThree === 10 || numThree === 11) {
        cardThree.classList.add('yellow')
    } else if (numThree === 12 || numThree === 13) {
        cardThree.classList.add('green')
    } else if (numThree === 14 || numThree === 15) {
        cardThree.classList.add('teal')
    }
}
function assignFour() {
    if(numFour === 0 || numFour === 1) {
        cardFour.classList.add('purple')
    } else if (numFour === 2 || numFour === 3) {
        cardFour.classList.add('orange')
    } else if (numFour === 4 || numFour === 5) {
        cardFour.classList.add('blue')
    } else if (numFour === 6 || numFour === 7) {
        cardFour.classList.add('gray')
    } else if (numFour === 8 || numFour === 9) {
        cardFour.classList.add('red')
    } else if (numFour === 10 || numFour === 11) {
        cardFour.classList.add('yellow')
    } else if (numFour === 12 || numFour === 13) {
        cardFour.classList.add('green')
    } else if (numFour === 14 || numFour === 15) {
        cardFour.classList.add('teal')
    }
}
function assignFive() {
    if(numFive === 0 || numFive === 1) {
        cardFive.classList.add('purple')
    } else if (numFive === 2 || numFive === 3) {
        cardFive.classList.add('orange')
    } else if (numFive === 4 || numFive === 5) {
        cardFive.classList.add('blue')
    } else if (numFive === 6 || numFive === 7) {
        cardFive.classList.add('gray')
    } else if (numFive === 8 || numFive === 9) {
        cardFive.classList.add('red')
    } else if (numFive === 10 || numFive === 11) {
        cardFive.classList.add('yellow')
    } else if (numFive === 12 || numFive === 13) {
        cardFive.classList.add('green')
    } else if (numFive === 14 || numFive === 15) {
        cardFive.classList.add('teal')
    }
}
function assignSix() {
    if(numSix === 0 || numSix === 1) {
        cardSix.classList.add('purple')
    } else if (numSix === 2 || numSix === 3) {
        cardSix.classList.add('orange')
    } else if (numSix === 4 || numSix === 5) {
        cardSix.classList.add('blue')
    } else if (numSix === 6 || numSix === 7) {
        cardSix.classList.add('gray')
    } else if (numSix === 8 || numSix === 9) {
        cardSix.classList.add('red')
    } else if (numSix === 10 || numSix === 11) {
        cardSix.classList.add('yellow')
    } else if (numSix === 12 || numSix === 13) {
        cardSix.classList.add('green')
    } else if (numSix === 14 || numSix === 15) {
        cardSix.classList.add('teal')
    }
}
function assignSeven() {
    if(numSeven === 0 || numSeven === 1) {
        cardSeven.classList.add('purple')
    } else if (numSeven === 2 || numSeven === 3) {
        cardSeven.classList.add('orange')
    } else if (numSeven === 4 || numSeven === 5) {
        cardSeven.classList.add('blue')
    } else if (numSeven === 6 || numSeven === 7) {
        cardSeven.classList.add('gray')
    } else if (numSeven === 8 || numSeven === 9) {
        cardSeven.classList.add('red')
    } else if (numSeven === 10 || numSeven === 11) {
        cardSeven.classList.add('yellow')
    } else if (numSeven === 12 || numSeven === 13) {
        cardSeven.classList.add('green')
    } else if (numSeven === 14 || numSeven === 15) {
        cardSeven.classList.add('teal')
    }
}
function assignEight() {
    if(numEight === 0 || numEight === 1) {
        cardEight.classList.add('purple')
    } else if (numEight === 2 || numEight === 3) {
        cardEight.classList.add('orange')
    } else if (numEight === 4 || numEight === 5) {
        cardEight.classList.add('blue')
    } else if (numEight === 6 || numEight === 7) {
        cardEight.classList.add('gray')
    } else if (numEight === 8 || numEight === 9) {
        cardEight.classList.add('red')
    } else if (numEight === 10 || numEight === 11) {
        cardEight.classList.add('yellow')
    } else if (numEight === 12 || numEight === 13) {
        cardEight.classList.add('green')
    } else if (numEight === 14 || numEight === 15) {
        cardEight.classList.add('teal')
    }
}
function assignNine() {
    if(numNine === 0 || numNine === 1) {
        cardNine.classList.add('purple')
    } else if (numNine === 2 || numNine === 3) {
        cardNine.classList.add('orange')
    } else if (numNine === 4 || numNine === 5) {
        cardNine.classList.add('blue')
    } else if (numNine === 6 || numNine === 7) {
        cardNine.classList.add('gray')
    } else if (numNine === 8 || numNine === 9) {
        cardNine.classList.add('red')
    } else if (numNine === 10 || numNine === 11) {
        cardNine.classList.add('yellow')
    } else if (numNine === 12 || numNine === 13) {
        cardNine.classList.add('green')
    } else if (numNine === 14 || numNine === 15) {
        cardNine.classList.add('teal')
    }
}
function assignTen() {
    if(numTen === 0 || numTen === 1) {
        cardTen.classList.add('purple')
    } else if (numTen === 2 || numTen === 3) {
        cardTen.classList.add('orange')
    } else if (numTen === 4 || numTen === 5) {
        cardTen.classList.add('blue')
    } else if (numTen === 6 || numTen === 7) {
        cardTen.classList.add('gray')
    } else if (numTen === 8 || numTen === 9) {
        cardTen.classList.add('red')
    } else if (numTen === 10 || numTen === 11) {
        cardTen.classList.add('yellow')
    } else if (numTen === 12 || numTen === 13) {
        cardTen.classList.add('green')
    } else if (numTen === 14 || numTen === 15) {
        cardTen.classList.add('teal')
    }
}
function assignEleven() {
    if(numEleven === 0 || numEleven === 1) {
        cardEleven.classList.add('purple')
    } else if (numEleven === 2 || numEleven === 3) {
        cardEleven.classList.add('orange')
    } else if (numEleven === 4 || numEleven === 5) {
        cardEleven.classList.add('blue')
    } else if (numEleven === 6 || numEleven === 7) {
        cardEleven.classList.add('gray')
    } else if (numEleven === 8 || numEleven === 9) {
        cardEleven.classList.add('red')
    } else if (numEleven === 10 || numEleven === 11) {
        cardEleven.classList.add('yellow')
    } else if (numEleven === 12 || numEleven === 13) {
        cardEleven.classList.add('green')
    } else if (numEleven === 14 || numEleven === 15) {
        cardEleven.classList.add('teal')
    }
}
function assignTwelve() {
    if(numTwelve === 0 || numTwelve === 1) {
        cardTwelve.classList.add('purple')
    } else if (numTwelve === 2 || numTwelve === 3) {
        cardTwelve.classList.add('orange')
    } else if (numTwelve === 4 || numTwelve === 5) {
        cardTwelve.classList.add('blue')
    } else if (numTwelve === 6 || numTwelve === 7) {
        cardTwelve.classList.add('gray')
    } else if (numTwelve === 8 || numTwelve === 9) {
        cardTwelve.classList.add('red')
    } else if (numTwelve === 10 || numTwelve === 11) {
        cardTwelve.classList.add('yellow')
    } else if (numTwelve === 12 || numTwelve === 13) {
        cardTwelve.classList.add('green')
    } else if (numTwelve === 14 || numTwelve === 15) {
        cardTwelve.classList.add('teal')
    }
}
function assignThirteen() {
    if(numThirteen === 0 || numThirteen === 1) {
        cardThirteen.classList.add('purple')
    } else if (numThirteen === 2 || numThirteen === 3) {
        cardThirteen.classList.add('orange')
    } else if (numThirteen === 4 || numThirteen === 5) {
        cardThirteen.classList.add('blue')
    } else if (numThirteen === 6 || numThirteen === 7) {
        cardThirteen.classList.add('gray')
    } else if (numThirteen === 8 || numThirteen === 9) {
        cardThirteen.classList.add('red')
    } else if (numThirteen === 10 || numThirteen === 11) {
        cardThirteen.classList.add('yellow')
    } else if (numThirteen === 12 || numThirteen === 13) {
        cardThirteen.classList.add('green')
    } else if (numThirteen === 14 || numThirteen === 15) {
        cardThirteen.classList.add('teal')
    }
}
function assignFourteen() {
    if (numFourteen === 0 || numFourteen === 1) {
        cardFourteen.classList.add('purple')
    } else if (numFourteen === 2 || numFourteen === 3) {
        cardFourteen.classList.add('orange')
    } else if (numFourteen === 4 || numFourteen === 5) {
        cardFourteen.classList.add('blue')
    } else if (numFourteen === 6 || numFourteen === 7) {
        cardFourteen.classList.add('gray')
    } else if (numFourteen === 8 || numFourteen === 9) {
        cardFourteen.classList.add('red')
    } else if (numFourteen === 10 || numFourteen === 11) {
        cardFourteen.classList.add('yellow')
    } else if (numFourteen === 12 || numFourteen === 13) {
        cardFourteen.classList.add('green')
    } else if (numFourteen === 14 || numFourteen === 15) {
        cardFourteen.classList.add('teal')
    }
}
function assignFifteen() {
    if(numFifteen === 0 || numFifteen === 1) {
        cardFifteen.classList.add('purple')
    } else if (numFifteen === 2 || numFifteen === 3) {
        cardFifteen.classList.add('orange')
    } else if (numFifteen === 4 || numFifteen === 5) {
        cardFifteen.classList.add('blue')
    } else if (numFifteen === 6 || numFifteen === 7) {
        cardFifteen.classList.add('gray')
    } else if (numFifteen === 8 || numFifteen === 9) {
        cardFifteen.classList.add('red')
    } else if (numFifteen === 10 || numFifteen === 11) {
        cardFifteen.classList.add('yellow')
    } else if (numFifteen === 12 || numFifteen === 13) {
        cardFifteen.classList.add('green')
    } else if (numFifteen === 14 || numFifteen === 15) {
        cardFifteen.classList.add('teal')
    }
}
function assignSixteen() {
    if(numSixteen === 0 || numSixteen === 1) {
        cardSixteen.classList.add('purple')
    } else if (numSixteen === 2 || numSixteen === 3) {
        cardSixteen.classList.add('orange')
    } else if (numSixteen === 4 || numSixteen === 5) {
        cardSixteen.classList.add('blue')
    } else if (numSixteen === 6 || numSixteen === 7) {
        cardSixteen.classList.add('gray')
    } else if (numSixteen === 8 || numSixteen === 9) {
        cardSixteen.classList.add('red')
    } else if (numSixteen === 10 || numSixteen === 11) {
        cardSixteen.classList.add('yellow')
    } else if (numSixteen === 12 || numSixteen === 13) {
        cardSixteen.classList.add('green')
    } else if (numSixteen === 14 || numSixteen === 15) {
        cardSixteen.classList.add('teal')
    }
}
assignOne()
assignTwo()
assignThree()
assignFour()
assignFive()
assignSix()
assignSeven()
assignEight()
assignNine()
assignTen()
assignEleven()
assignTwelve()
assignThirteen()
assignFourteen()
assignFifteen()
assignSixteen()

// click card to flip
    // add smurfs
document.querySelector('.boxOfOne').addEventListener('click', clickOnOne)
document.querySelector('.boxOfTwo').addEventListener('click', clickOnTwo)
document.querySelector('.boxOfThree').addEventListener('click', clickOnThree)
document.querySelector('.boxOfFour').addEventListener('click', clickOnFour)
document.querySelector('.boxOfFive').addEventListener('click', clickOnFive)
document.querySelector('.boxOfSix').addEventListener('click', clickOnSix)
document.querySelector('.boxOfSeven').addEventListener('click', clickOnSeven)
document.querySelector('.boxOfEight').addEventListener('click', clickOnEight)
document.querySelector('.boxOfNine').addEventListener('click', clickOnNine)
document.querySelector('.boxOfTen').addEventListener('click', clickOnTen)
document.querySelector('.boxOfEleven').addEventListener('click', clickOnEleven)
document.querySelector('.boxOfTwelve').addEventListener('click', clickOnTwelve)
document.querySelector('.boxOfThirteen').addEventListener('click', clickOnThirteen)
document.querySelector('.boxOfFourteen').addEventListener('click', clickOnFourteen)
document.querySelector('.boxOfFifteen').addEventListener('click', clickOnFifteen)
document.querySelector('.boxOfSixteen').addEventListener('click', clickOnSixteen)

    // clicks counter

let counter = 0
function showCounter() {
    document.querySelector('#counter').innerText = `Number Of Attempts: ${Math.floor(counter / 4)}\n and please flip them back if they don't match :)...`
}
    // dividing by 4 until i figure out how not make the player flip back the cards
showCounter()


    // flip cards

function clickOnOne() {
    cardOne.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnTwo() {
   cardTwo.classList.toggle('hidden')
   counter += 1
   showCounter()
}
function clickOnThree() {
    cardThree.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnFour() {
    cardFour.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnFive() {
   cardFive.classList.toggle('hidden')
   counter += 1
   showCounter()
}
function clickOnSix() {
   cardSix.classList.toggle('hidden')
   counter += 1
   showCounter()
}
function clickOnSeven() {
    cardSeven.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnEight() {
    cardEight.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnNine() {
    cardNine.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnTen() {
    cardTen.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnEleven() {
    cardEleven.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnTwelve() {
    cardTwelve.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnThirteen() {
    cardThirteen.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnFourteen() {
    cardFourteen.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnFifteen() {
    cardFifteen.classList.toggle('hidden')
    counter += 1
    showCounter()
}
function clickOnSixteen() {
    cardSixteen.classList.toggle('hidden')
    counter += 1
    showCounter()
}

// if card is same as flipped card, remain flipped

// else unflip

//can't manage to do it yet, flip them yourself :)

//restart
document.querySelector('#reload').addEventListener('click', restart)

function restart() {
    location.reload();
}
