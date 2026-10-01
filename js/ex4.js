const randomNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

do {
    guess = Number(prompt("Guess a number between 1 and 100:"));

    attempts++;

    if (guess < randomNumber) {
        console.log("Too low, guess again");
    } else if (guess > randomNumber) {
        console.log("Too high, guess again");
    } else {
        console.log(
            `Correct! It took you ${attempts} attempts to guess the correct number.`
        );
    }

} while (guess !== randomNumber);