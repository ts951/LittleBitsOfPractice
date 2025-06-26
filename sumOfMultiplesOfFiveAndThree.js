const prompt = require("prompt-sync")();

console.log("Gimme a number and I'll give ya the sum of all multiples of 3 and 5 that lie between that number and 1 kid... INCLUDING the number if its one of those multiples: ");
let num = prompt("");

num = parseInt(num);

if (isNaN(num)) {
    console.log("That's not a number bucko");
}

else {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        // Check if current number is divisible by 3 or 5 by using remainder operator
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
            console.log(i);
        }
    }
    console.log("The answer you've been looking for is: " + sum);
}