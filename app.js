

// Variables
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let startGame = document.getElementById('overlay');
let phraseList = document.querySelector('#phrase ul');
let letters = document.getElementsByClassName('letter');



startGame.addEventListener('click', () => {
    startGame.style.display = 'none'
});


// Phrases
let phrases = [
    "Lets Go Blues",
    "Stanley Cup Champions",
    "Brett Hull is a Legend", 
    "St Louis Blues Hockey",
    "He shoots he scores",
    "Cross Checking",
    "Off the post",
    "Slap shot",
    "Wrist shot"
]

//Phrase generator

function getRandomPhraseAsArray(arr) {
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random.split('');

}

getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);
console.log(phraseArray);


function addPhraseToDisplay(arr)  {
    for(i=0; i < arr.length; i++) {
            let listItem = document.createElement("li");
            listItem.textContent = arr[i];
            phraseList.appendChild(listItem);
         
            if (listItem.textContent !== " "){
                listItem.className = "letter";
            } else {
                listItem.className = "space";
            }
    }
}

// Called phrase function
addPhraseToDisplay(phraseArray);


// CheckLetter Function

function checkLetter (guessBtn){
    let guess = guessBtn.textContent;
    let match = null;
    for(i = 0; i < letters.length; i++){
        if (letters[i].textContent === guess){
            letters[i].className += "show";
            match = letters[i].textContent;
        } 

    }
    return match;
}


qwerty.addEventListener('click', (e) => {
    let guessBtn = event.target;
    guessBtn.className = "chosen";
    guessBtn.disabled = true;

    const letterFound = checkLetter;
    
});














