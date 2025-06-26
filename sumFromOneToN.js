const prompt = require("prompt-sync")();

let num = parseInt(prompt("Gimme a number and I'll give ya the sum of all positive integers from 1 up to that number kid... INCLUSIVE: "));

if (isNaN(num)) {
    console.log("That's not a number bucko");
}

else {
    const sum = (num*(num+1))/2;
    console.log("The answer you've been looking for is: " + sum);
}