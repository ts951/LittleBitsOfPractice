const prompt = require("prompt-sync")();

let name = prompt("Hello there. And what might your name be? ");

if (name != null) {
    console.log("Nice to meet you, " + name);
}