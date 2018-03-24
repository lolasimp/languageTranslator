function writeToDom(domString, domId) {
    document.getElementById(domId).innerHTML = domString;
}

var languages = [
    {
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
    },
    {
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
    },
   {
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
   }
    ]

 
    function englishInput(languagesArray) {
        var words = document.getElementById('input').value.toLowerCase().split(' ');
        if (words.every(function(e) {return e in languages[languagesArray]})) {
            translate(words, languagesArray);
        } else {
            alert('No Match');
        }
    }
    // function buttonClick() {
    //     var buttons = document.getElementsByClassName('btn btn-success');
    // //     buttons[0].onclick = 
    // //     buttons[1].onclick = 
    // //     buttons[2].onclick = 
    // // }
    
                                                    
    // // buttonClick();
         
   

//  document.getElementById("spanishB").addEventListener("click", translator (event){
//      console.log("click test", event);
//  });

// var spanishButton = document.getElementById('spanishB');

// spanishButton.addEventListener('click', function (event) {
//     console.log("click test", event);
//   })
// translator();