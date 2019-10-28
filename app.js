

// Variables
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let startGame = document.getElementById('overlay');
let phraseList = document.querySelector('#phrase ul');
const letters = document.querySelectorAll('.letter');
const keyboard = document.querySelector('#qwerty');
const misses = document.querySelectorAll('images');



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

const checkLetter = button => {
    let matched = null;

    letters.forEach(letter => {
        if(button === letter.textContent.toLowerCase()){
            letter.classList.add('show');
            matched = true;
        }
    });
    
    return matched;
};


keyboard.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON"){
        event.target.className = 'chosen';
        event.target.disabled = true;
        const match = checkLetter(event.target.textContent.toLowerCase());
        if(!match){
            missed++;
        }
    }
    
});














