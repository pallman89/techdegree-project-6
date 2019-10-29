

// Variables
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let gameOverlay = document.getElementById('overlay');
let phraseList = document.querySelector('#phrase ul');
const keyboard = document.querySelector('#qwerty');
let tries = document.getElementsByClassName('tries');


// Game start button
gameOverlay.addEventListener('click', () => {
    gameOverlay.style.display = 'none'
});


// Phrases
let phrases = [
    "LETS GO BLUES",
    "STANLEY CUP CHAMPIONS",
    "ST LOUIS BLUES HOCKEY",
    "CROSS CHECKING",
    "OFF THE POST",
    "SLAP SHOT",
    "WRIST SHOT"
]

//Phrase generator
function getRandomPhraseAsArray(arr) {
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random.split('');

}

//Calling the random phrase function
const phraseArray = getRandomPhraseAsArray(phrases);



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
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter => {
        if(button === letter.textContent.toLowerCase()){
            letter.classList.add('show');
            matched = true;
        }
    });
    
     return matched;
};



// KEYBOARD EVENT LISTENER

keyboard.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON"){
        event.target.className = 'chosen';
        event.target.disabled = true;
    
        const letterFound = checkLetter(event.target.textContent.toLowerCase());
        if(!letterFound){
            missed++;
            const img = document.querySelectorAll("img");
            img[missed - 1].src="images/lostHeart.png";
           
        }
    }
    checkWin();
});



// CHECK WIN FUNCTION

const checkWin = () => {
    let guess = document.querySelectorAll('.show');
    const letters = document.querySelectorAll('.letter');
    if (guess.length === letters.length) {
        gameOverlay.className = 'win'; 
        gameOverlay.style.display = "";
        gameOverlay.innerHTML = '<h1>YOU WON THE GAME!!!</h1>'
        let resetBtn = document.createElement('a');
        resetBtn.className = "btn__reset";
        gameOverlay.appendChild(resetBtn);
        resetBtn.textContent = "Play Again";

        resetBtn.addEventListener ('click', () => {
            window.location.reload(true);
        });
        
    } else if (missed >= 5) {

        gameOverlay.className = 'lose';
        gameOverlay.style.display = "";
        gameOverlay.innerHTML = '<h1>SORRY, YOU LOSE...</h1>';
        let resetBtn = document.createElement('a');
        resetBtn.className = "btn__reset";
        gameOverlay.appendChild(resetBtn);
        resetBtn.textContent = "Play Again";

        resetBtn.addEventListener ('click', () => {
            window.location.reload(true);
        });
        
    }

};









