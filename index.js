






// // copy cod *******
function handelkeybordpress(event){
    const playerpressd= event.key;
    console.log(playerpressd);
   
    if(playerpressd === 'Escape'){
        gameOver();
    }


const currentAlphabetElement=document.getElementById('current-alphabet');
const currentAlphabet=currentAlphabetElement.innerText;
const expectedAlphabet=currentAlphabet.toLowerCase();

    if(playerpressd===expectedAlphabet){
        console.log('yes you ar right');
        //new cod using function start
const currentscore=getTextElementValueById('current-score');
 const  updatedScore=currentscore+1;
 setTextElementValueById( 'current-score',updatedScore);

       
        //new cod using function end

        // ------------ easy cod----------//
        // // console.log('yes you press right key',expectedAlphabet);

        // const currentelimentscore=document.getElementById('current-score');
        // const currentscoretext=currentelimentscore.innerText;
        // const newscoretext=parseInt(currentscoretext);
        // console.log(newscoretext);

        // const newscore=newscoretext+1;
        // currentelimentscore.innerText=newscore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        
      


        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife -1;
        setTextElementValueById( 'current-life' ,updatedLife) ;

        if(updatedLife === 0){
            gameOver();
        }


        // -----------easy code -------------//
        // console.log('no you ar wrong');

        // const currentlifeeliment=document.getElementById('current-life');
        // const currentlifetext=currentlifeeliment.innerText;
        // const currentlife=parseInt(currentlifetext);

        // const newlife=currentlife -1 ;

        // currentlifeeliment.innerText=newlife;
    }
    
}   

//capture button
document.addEventListener('keyup',handelkeybordpress);



function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    // resert

    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}


// part 2
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}
// // part 2
// // copy cod
// // part 3

function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const  text=element.innerText;
    return text;

}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    
// final score
    const lastScore=getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

// clear  the play ground
const currentAlphabet=getElementTextById( 'current-alphabet') ;

removeBackgroundColorById(currentAlphabet);


}


