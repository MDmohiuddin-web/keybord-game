// function continiue(){
//     let alpabet=getalpabet();
//     return alpabet;

// }



// function play(){
//     let homesection=document.getElementById('home-screen');
//     homesection.classList.add('hidden');


// let playgroundsection=document.getElementById('play-ground');
// playgroundsection.classList.remove('hidden')

// continiue()
// }




// function getalpabet(){
//     let arraye=['A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'];
//     let splite=arraye.split('');
//     console.log(splite);
//     let randomnum=Math.random() * 25;
//     let index=Math.round(randomnum);
//     console.log(index);

//     let alpabet=alpabets[index];
//     console.log(index,alpabet);
//     return alpabet;
// }



function continueGame() {
    let alphabet = getAlphabet();
    return alphabet;
}

function play() {
    let homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    let playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');

    continueGame();
}

function getAlphabet() {
    const alphabetString = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
    const alphabetArray = alphabetString.split(' ');
    const randomIndex = Math.floor(Math.random() * alphabetArray.length);
    const selectedAlphabet = alphabetArray[randomIndex];
    return selectedAlphabet;
}
