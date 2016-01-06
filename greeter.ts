var msg = "greeter loaded...";
console.log(msg);

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
        console.log("new greeter created...");
    }
    greet() {
        return "Hello, " + this.greeting + "!";
    }
}

var greeter = new Greeter("world");

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    var p = document.createElement('p');
    p.textContent = greeter.greet();
    p.style.color = "LimeGreen";
    p.style.fontWeight = "Bold";
    document.body.appendChild(p);
}

document.body.appendChild(button);