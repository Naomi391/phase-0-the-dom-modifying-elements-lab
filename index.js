// Write your code here!
const mainElement = document.getElementById("main");

if (mainElement) {
  mainElement.remove();
} else {
  console.warn("Main element not found!");
}

const newHeader = document.createElement("h1");

newHeader.id = "victory";

const myName = "Naomi";
newHeader.textContent = `${myName} is the champion`;
document.body.appendChild(newHeader);
