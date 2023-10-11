let input = '';
let result = '';

function appendInput(value) {
    input += value;
    document.getElementById('result').value = input;
}

function clearScreen() {
    input = '';
    result = '';
    document.getElementById('result').value = '';
}

function solve() {
    try {
        result = eval(input);
        document.getElementById('result').value = result;
        input = result.toString();
    } catch (error) {
        alert('Invalid input');
    }
}