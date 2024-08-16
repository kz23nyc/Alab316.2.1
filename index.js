const app = document.getElementById('app')
// const gameBox = document.createElement('table')

// Creating a random number in JS
const randomNum = Math.trunc(Math.random()*100+1)
// console.log(Math.trunc(47.12));
// console.log(Math.trunc(47.86));

console.log(randomNum);

//Create Prompt for user to guess
// setTimeout(() =>{
//     console.log('this is a throwawy message');
// },2000)

// window.alert('Pick a number between 1-100')

let guess
console.log(guess);
let output = ''

window.alert('Welcome!Please guess a number between 1-100')

do {
    guess = parseInt(window.prompt('Pick a number between 1-100'))
    if(randomNum === guess) {
         output = 'You are such a smart cookie!'
    } else{
         output = `Sorry the random number was ${randomNum}, please guess again`
    }
    window.alert(output)

} while (randomNum !== guess);