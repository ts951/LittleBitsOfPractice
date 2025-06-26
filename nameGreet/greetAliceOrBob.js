const prompt = require("prompt-sync")();

let name = prompt("Hello there. And what might your name be? ");

if (name === "") {
    console.log("I.. uhhh...");
    return;
}

if (name === "Alice" || name === "Bob") {
    console.log("Oh hey " + name + "! How's life treating ya?")
}

else {
    console.log("Nice to meet you, " + name);
}