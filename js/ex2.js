const input = prompt("Enter a number between 0 and 100:");

try {
    const number = Number(input);

    if (
        input.trim() === "" ||
        !Number.isInteger(number) ||
        number < 0 ||
        number > 100
    ) {
        throw new Error(`Sorry, ${input} is not a valid entry.`);
    }

    console.log(`Thank you! You entered ${input}, a valid number.`);

} catch (error) {
    console.log(error.message);
}