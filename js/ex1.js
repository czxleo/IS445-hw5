const input = prompt("Enter a number between 0 and 100:");

const number = Number(input);

if (
    input.trim() !== "" &&
    Number.isInteger(number) &&
    number >= 0 &&
    number <= 100
) {
    console.log(`Thank you! You entered ${input}, a valid number.`);
} else {
    console.log(`Sorry, ${input} is not a valid entry.`);
}