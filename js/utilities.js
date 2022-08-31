function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;

}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


function clearAllValues() {
    document.getElementById('per-player-budget').value = '';
    document.getElementById('total-player-expense').innerText = '0';
    document.getElementById('manager-budget').value = '';
    document.getElementById('coach-budget').value = '';
    document.getElementById('total-expenses').innerText = '0';

}