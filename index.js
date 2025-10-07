const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let nbChar = document.getElementById("containCharacters")
let includeNumbers = document.getElementById("includeNumbers");
let includeSymbols = document.getElementById("includeSymbols");

function getRandomCharacter() {
    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if(includeNumbers.checked) {
        characters.push(...numbers);
    }
    if(includeSymbols.checked) {
        characters.push(...symbols);
    }

    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePasswords() {
    let passwordOne = "";
    let passwordTwo = "";
    for (let i = 0; i < nbChar.value; i++) {
        passwordOne += getRandomCharacter();
        passwordTwo += getRandomCharacter();
    }
    document.getElementById("passwordOne").textContent = passwordOne;
    document.getElementById("passwordTwo").textContent = passwordTwo;
}

function copyTextOne() {
    let copyPwdOne = document.getElementById("passwordOne");
    navigator.clipboard.writeText(copyPwdOne.textContent);
    alert("Password copied to clipboard: " + copyPwdOne.textContent);
}
function copyTextTwo() {
    let copyPwdTwo = document.getElementById("passwordTwo");
    navigator.clipboard.writeText(copyPwdTwo.textContent);
    alert("Password copied to clipboard: " + copyPwdTwo.textContent);
}