// Player 1
// Generate Random Numbers

let randomNumber1 = Math.ceil(Math.random() * 6);
// console.log(randomNumber1)

let randomDiceImage = 'dice' + randomNumber1 + '.png';

//we need to get the image source
let randomImageSource = 'Images/' + randomDiceImage;

let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);

//Player 2

let randomNumber2 = Math.ceil(Math.random() * 6);

let randomImageSource2 = 'Images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);


//Getting the winner

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!'
}else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins'
}else {
    document.querySelector('h1').innerHTML = 'Draw!'
}