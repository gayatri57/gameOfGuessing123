let inputNumber = document.getElementById("inputNumber");
let guessButton = document.getElementById("btn");
let numOfAttempts = 0;
let randNumber = Math.floor(Math.random() * 20);

guessButton.addEventListener("click", (e) => {
    let match = false;

    if (inputNumber.value < 0) {
        alert("Number is too low. Please choose number between 0 and 20!");
        numOfAttempts += 1;
    }

    else if (inputNumber.value > 20) {
        alert("Number is too big. Please choose number between 0 and 20!");
        numOfAttempts += 1;

    }
    else if (inputNumber.value > randNumber) {
        alert("Number is smaller than your guess!");
        numOfAttempts += 1;
    }

    else if (inputNumber.value < randNumber) {
        alert("Number is bigger than your guess!");
        numOfAttempts += 1;
    }

    else if (inputNumber.value == randNumber) {
        numOfAttempts += 1;
        alert("Correct. You guessed number in" + " " + numOfAttempts + " " + "tries!");
        match = true;
    }
    if (match == true) {
        randNumber = Math.floor(Math.random() * 20);
        numOfAttempts = 0;
        inputNumber.value = "";
    }
    console.log(randNumber);


})



