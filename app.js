const guess = document.querySelector('#guess');
const submitGuess = document.querySelector('#submitGuess');
const feedback = document.querySelector('#feedback');

let randomNum = Math.floor(Math.random()*33);
console.log(randomNum);

function checkGuess (){
 let myGuess = guess.value
 if(myGuess === randomNum){
     feedback.innerHTML = 'You got it right, congrats!!!'
 } if(myGuess < randomNum){
     feedback.innerHTML = 'Your guess was too low!!, try it again!'
 } if(myGuess > randomNum){
     feedback.innerHTML = 'Your guess was too high ! guess again)))'
 }
 
}

submitGuess.addEventListener('click', checkGuess)