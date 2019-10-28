

// Variables
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let startGame = document.getElementById('overlay');
let phraseList = document.querySelector('#phrase ul');



startGame.addEventListener('click', () => {
    startGame.style.display = 'none'
});


// Phrases
let phrases = [
    "My name is Patrick",
    "I quit my full time job to become a frontend developer",
    "I love to play golf", 
    "I currently call Phoenix home",
    "The Treehouse commmunity has been so helpful"
]

//Phrase generator

function getRandomPhraseAsArray(arr) {
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random.split();

}

getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);





function addPhraseToDisplay(arr)  {
    for(i=0; i < arr.length; i++) {
            let listItem = document.createElement("li");
            listItem.textContent = arr[i];
            phraseList.appendChild(listItem);
         
            if (listItem.textContent != " "){
                listItem.className = "letter"
            } else {
                listItem.className = "space"
            }
    }
}

addPhraseToDisplay(phraseArray);














