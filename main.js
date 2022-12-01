const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent)
const phrases = ["software engineer..", "student.."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed =150;
const erasingSpeed = 75
function printLetters(phrase){
    if(letterIndex == phrase.length){
         //clear the letters which have been typed
         clearLetters();
    }
    else if (letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function () {
            printLetters(phrase)

    }, typingSpeed)
}
}
function clearLetters(){
    if(letterIndex == -1){
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex])
    }
    else if(letterIndex > -1){
        let updatedphrase = " ";
        for(let index = 0; index < letterIndex; index++){
            updatedphrase += phrases[phraseIndex].charAt(index);
        }
        console.log(updatedphrase)
        dynamicContent.textContent = updatedphrase;
        letterIndex -=1;
        setTimeout(clearLetters, erasingSpeed)
    }
}
printLetters(phrases[phraseIndex])