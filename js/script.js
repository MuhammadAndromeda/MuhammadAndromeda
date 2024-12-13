const texts = [
    "Web Designer",
    "Front-End Developer",
    "Back-End Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Public Speaker"
]

let speed = 120;

const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter,speed)
    }

    else{
        setTimeout(eraseText,1200)
    }
}

function eraseText(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1)%texts.length;
        characterIndex = 0;
        setTimeout(typeWriter,520)
    }
}

window.onload= typeWriter