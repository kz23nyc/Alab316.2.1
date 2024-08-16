const randomNum = Math.floor(Math.random() * 100 + 1);

console.log(randomNum);

window.alert(guessNumber(randomNum));

function guessNumber(randomNum) {
  let guess = parseInt(window.prompt("Please guess a number between 1-100"));
  console.log(guess);

  let attempt = 1;
  let returnMessage;

  if (! isNaN(guess)){
    while (guess !== randomNum && attempt < 10){
      if (guess < randomNum) {
        returnMessage = `Number is higher than your guess. Please try again. You have ${10-attempt} attempts remaining`;
      } else {
        returnMessage = `Number is lower than your guess. Please try again. You have ${10-attempt} attempts remaining`;
      }
      attempt++;
      guess = parseInt(window.prompt(`${returnMessage}, please pick a number between 1-100`))
      console.log(returnMessage);
      console.log(attempt);
    }
    }else{
    returnMessage = 'Please enter a valid number, Restart the game'
    }

    if(guess === randomNum){
        returnMessage = `You Win!' :) The number was: ${randomNum}. You guess the number in ${attempt} attempts`
    } else if (attempt ===10){
        returnMessage = `Game Over :( You took more than 10 tries`
    } else {
        returnMessage = 'Please enter a valid number'   
    }

  console.log(returnMessage);
}
