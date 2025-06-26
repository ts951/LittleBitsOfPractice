const prompt = require("prompt-sync")();

const num = parseInt(prompt("Gimme a number laddy: "));

// If a valid number isn't provided, exit the program
if (isNaN(num)) {
    console.log("That's not a number bucko");
    return;
}

// If a valid number is provided, programme continues
console.log("Would like to compute the sum or the product of numbers 1 through the number you just gave?");
const operation = prompt("Please give your answer in all lower case: ");

if (operation === "sum") {
    const sum = (num*(num+1))/2;
    console.log("Here's your sum mate: " + sum);
    return;
}

else if (operation === "product") {
    // Initialise product to 1
    let product = 1;

    // Cycle through each positive integer up to number given, multiplying each one with the running product
    for (i = 1; i <= num; i++) {
        product *= i;
    }
    
    console.log("Here's the product dude: " + product);
    return;
}

else {
    console.log("That's not a valid operation...");
    return;
}
