import './css/style.css'
import { ConvertCoordinates } from './coordinates.js';

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const button = document.getElementById('btConverter');

button.addEventListener("click",() => {ReadTextFromInput()})

function ReadTextFromInput() {
    const lines = inputText.value.split(/\r?\n/);
    const splittedLines = lines.map(splitLine);
    const convertedLines = splittedLines.map((line) => ConvertCoordinates(line));
    outputText.value = convertedLines.join("\n");
}

function splitLine(line) {
    return(line.split(','));
}