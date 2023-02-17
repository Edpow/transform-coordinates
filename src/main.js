import './css/style.css'
import { ConvertCoordinates } from './coordinates.js';

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const fromMap = document.getElementById('fromMap');
const toMap = document.getElementById('toMap');
const button = document.getElementById('btConverter');

button.addEventListener("click",() => {ReadTextFromInput()})

function ReadTextFromInput() {
    const lines = inputText.value.split(/\r?\n/);
    const splittedLines = lines.map(splitLine);
    const convertedLines = splittedLines.map((line) => ConvertCoordinates(line,fromMap.value,toMap.value));
    outputText.value = convertedLines.join("\n");
}

function splitLine(line) {
    return(line.split(','));
}