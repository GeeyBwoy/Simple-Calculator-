function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let output = '';

    if (isNaN(num1) || isNaN(num2)) {
        output = "Please enter valid numbers.";
    } else {
        switch(operation) {
            case 'add':
                output = `${num1} + ${num2} = ${num1 + num2}`;
                break;
            case 'subtract':
                output = `${num1} - ${num2} = ${num1 - num2}`;
                break;
            case 'multiply':
                output = `${num1} × ${num2} = ${num1 * num2}`;
                break;
            case 'divide':
                output = num2 !== 0 ? `${num1} ÷ ${num2} = ${num1 / num2}` : "Cannot divide by zero.";
                break;
            case 'modulus':
                output = num2 !== 0 ? `${num1} % ${num2} = ${num1 % num2}` : "Cannot modulus by zero.";
                break;
            case 'power':
                output = `${num1} ^ ${num2} = ${Math.pow(num1, num2)}`;
                break;
            default:
                output = "Unknown operation.";
        }
    }

    document.getElementById('result').innerText = output;
    addToHistory(output);
}

function addToHistory(entry) {
    const historyList = document.getElementById('historyList');
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.prepend(li);
    saveHistory();
}

function clearHistory() {
    document.getElementById('historyList').innerHTML = '';
    localStorage.removeItem('calcHistory');
}

function saveHistory() {
    const historyList = document.getElementById('historyList');
    let history = [];
    historyList.querySelectorAll('li').forEach(li => {
        history.push(li.textContent);
    });
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

function loadHistory() {
    const historyList = document.getElementById('historyList');
    let history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    historyList.innerHTML = '';
    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

window.onload = loadHistory;
