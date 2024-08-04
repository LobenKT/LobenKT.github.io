const text = `Hi Beybey,

I'm very much into you and I'd like to take you on a simple date ❤️

Here are the details:
When: August 8, afternoon onwards
Where: Eastwood

We'll eat at Mr Monk for dinner, then grab dessert around Eastwood or find another activity.

Hoping to see you 😊`;

let index = 0;
const typingSpeed = 50;
const typedTextElement = document.getElementById("typed-text");

function typeText() {
    if (index < text.length) {
        typedTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeText();
});
