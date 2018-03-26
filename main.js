// function writeToDom(domString, domId) {
//     document.getElementById(domId).innerHTML = domString;
// }

const spanish = {
        "merry": "alegre", 
        "christmas": "navidad", 
        "happy": "contento", 
        "new": "nuevo", 
        "year": "ano", 
        "have": "tener", 
        "a": "un", 
        "and": "y", 
        "holiday": "fiesta", 
        "we": "nosotros", 
        "wish": "deseo", 
        "you": "tu"
    };

const german = {
        "merry": "frohlich", 
        "christmas": "weihnachten", 
        "happy": "gluklich", 
        "new": "neu", 
        "year": "jahr", 
        "have": "haben", 
        "a": "haben", 
        "and": "und", 
        "holiday": "urlaub", 
        "we": "wir", 
        "wish": "wunsch", 
        "you": "sie"
    };

const italian = {
        "merry": "allegro", 
        "christmas": "natale", 
        "happy": "contento", 
        "new": "nuovo",
        "year": "anno", 
        "have": "avere", 
        "a": "un", 
        "and": "e", 
        "holiday": 
        "vacanza", 
        "we": "noi", 
        "wish": "desiderio", 
        "you": "tu"
   };

    const inputBox = document.getElementById('input');
    const spanishBtn = document.getElementById('spanish');
    const germanBtn= document.getElementById('german');
    const italianBtn = document.getElementById('italian');
    const outputBox = document.getElementById('output');

   

    const allMyButtons = document.getElementsByClassName('btn btn-success');
    for (let i = 0; i < allMyButtons.length; i++) {
        allMyButtons[i].addEventListener('click', (e) => {
            const userInput = inputBox.value.toLowerCase().split(' ');
            let domOutput = [];
            if (e.target.id === 'spanish'){
                userInput.forEach((userInput) => {
                domOutput.push(spanish[userInput]);
                })
                } else if (e.target.id === 'german'){
                userInput.forEach((userInput) => {
                domOutput.push(german[userInput]);
                })
            } else if (e.target.id === 'italian'){
                userInput.forEach((userInput) => {
                domOutput.push(italian[userInput]);
                })
            }
            outputBox.innerHTML = domOutput.join(' ');
        });
    }