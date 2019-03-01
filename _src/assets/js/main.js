'use strict';

const buttonGo = document.querySelector('.btn__main');
let input = document.querySelector('#input');
let clueForUser = document.querySelector('.clue');
let randomNumber = getRandomNumber(100);
const counterAttempts = document.querySelector('.counter__main');

//Function to generate random numbers
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Counter
let counter = 0;
counterAttempts.innerHTML = counter;

//Function to give clues to the user
function chosenNumber() {
  let inputUser = parseInt(input.value);

  if (inputUser < randomNumber) {
    clueForUser.innerHTML = 'Too low, try again!';
    counter += 1;
    counterAttempts.innerHTML = counter;
  }
  else if (inputUser > randomNumber) {
    clueForUser.innerHTML = 'Too high, try again!';
    counter += 1;
    counterAttempts.innerHTML = counter;
  }
  else {
    clueForUser.innerHTML = 'You won... Yay! :D';
  }
}

buttonGo.addEventListener('click', chosenNumber);
