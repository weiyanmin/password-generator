const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordField1 = document.querySelector("#password-field1");
let passwordField2 = document.querySelector("#password-field2");
let copiedMessage1 = document.querySelector("#copied1");
let copiedMessage2 = document.querySelector("#copied2");

function generatePassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}


function generatePasswords() {
  passwordField1.textContent = generatePassword();
  passwordField2.textContent = generatePassword();
  copiedMessage1.textContent = " ";
  copiedMessage2.textContent = " ";
}

function copyPasswords1() {
    if (navigator.clipboard && passwordField1.textContent) {
        navigator.clipboard.writeText(passwordField1.textContent);
        copiedMessage2.textContent = "";
        copiedMessage1.textContent = "Copied!";
        
    }
}

function copyPasswords2() {
    if (navigator.clipboard && passwordField2.textContent) {
        navigator.clipboard.writeText(passwordField2.textContent);
        copiedMessage1.textContent = "";
        copiedMessage2.textContent = "Copied!";
    }
}
