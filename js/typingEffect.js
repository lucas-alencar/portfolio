const textArray = ["Java", "Spring Boot", "PHP","Python", "Node.JS", "MySQL", "PostgreSQL"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 100;
let textArrayIndex = 0;
let charIndex = 0;


let typedTextSpan = document.querySelector(".typed-text")
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay+ 800);
    }
}

function erase() {
    if(charIndex > 0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        textArrayIndex++;
        if(textArrayIndex >= textArray.length){
            textArrayIndex = 0;
        }
        setTimeout(type,typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(type, newTextDelay);
});


