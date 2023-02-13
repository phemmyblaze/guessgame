'use strict';
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function(e) {
    const guess = document.querySelector('.guess').value;

    if(!guess) {
        // document.querySelector('.message').textContent = 'Please enter a number';
        displayMessage('Please enter a number');

        ////TESTING FOR CORRECT INPUT

    } else if (guess == secretNumber ) {
        // document.querySelector('.message').textContent = 'Correct!';
        displayMessage('Correct!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        
        document.querySelector('.highscore').textContent = highscore;
        
        
      }
        
        ////TESTING IF THE GUESS IS WRONG

    } else if (guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ?'Too high!' : "Too Low";
            displayMessage(guess > secretNumber ?'Too high!' : "Too Low");
            document.querySelector('body').style.backgroundColor = 'purple';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                displayMessage('Game Over!');
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
            }
    }

    
})



//////THIS IS TO RESET THE GAME ALL OVER AGAIN

document.querySelector('.again').addEventListener('click', function(e){
    score = 20;
    displayMessage('Guess....')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})






class B{
    constructor(age) {
        this.age = age;

        console.log(this.age)
    }
    
    
}

class Test extends B {
    constructor(name, age){
        super(age)
        this.name = name;
    }


    hello(){
        console.log(`Hello ${this.name} who is ${this.age}`);
    }
    
}

let obj = new Test ('Akinbobola', 26)
obj.hello();



