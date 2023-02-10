'use strict';
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function(e) {
    const guess = document.querySelector('.guess').value;

    if(!guess) {
        document.querySelector('.message').textContent = 'Please enter a number';

        ////TESTING FOR CORRECT INPUT

    } else if (guess == secretNumber ) {
        document.querySelector('.message').textContent = 'Correct!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        
        document.querySelector('.highscore').textContent = highscore;
        
        
      }
        
        ////TESTING IF THE NUMBER IS TOO HIGH

    } else if (guess > secretNumber) { 

        if(score > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        document.querySelector('body').style.backgroundColor = 'purple';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }

        ///TESTING IF THE NUMBER ENTERED IS TOO LOW
        
    } else if (guess < secretNumber) {

        if(score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            document.querySelector('body').style.backgroundColor = 'blue';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
            }
    }
})



//////THIS IS TO RESET THE GAME ALL OVER AGAIN

document.querySelector('.again').addEventListener('click', function(e){
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})


/////TO IMPLEMENT THE HIGH SCORE




/*
class profile {
    constructor(name, age, gender) {    
        this.name = name;
        this.age = age;
        this.gender = gender;

        // return (name, age, gender);

    }

    getProfile = function() {
        return `My name is ${this.name} and am I ${this.age} years old, am a ${this.gender}`
    }
}

let profile2 = new profile('John', 20, 'male');
console.log(profile2.getProfile());

let profile3 = new profile('Jenifer', 20, 'female');
console.log(profile3.getProfile());
*/
