// function continiue(){
//     let alphabet=getalpabet();
//     console.log('get your alphabet',alphabet);

//     // display alphabet
//     let carentalpabet=document.getElementById( 'current-alphabet');
  
//     carentalpabet.innerText=alphabet;


//     // set back ground color

//     setBackgroundColorById(alphabet);
    
// }



// function play(){
//     // let homesection=document.getElementById('home-screen');
//     // homesection.classList.add('hidden');


//     // let playgroundsection=document.getElementById('play-ground');
//     // playgroundsection.classList.remove('hidden')



//     hideElementById('home-screen');
//     showElementById('play-ground');

//     continiue()
// }

// function hideElementById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }

// function showElementById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');
// }




// function getalpabet(){
//     let arrays='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let alphabets=arrays.split('');
//     // console.log(alphabets);
//     //random alphabet
//     let random=Math.random() * 25;
//     let index=Math.round(random);
//     // console.log(index);

//     let alphabet=alphabets[index];
//     // console.log(index,alphabet);
//     return alphabet;
// }

// // setBackgroundColorById
// function setBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }


// main cod






// // copy cod *******


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
    showElementById('play-ground');
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

// function removeBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-orange-400');
// }

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