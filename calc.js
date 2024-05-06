let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function appendBackspace() {
    // Remove the last character from displayValue
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        // Handle square root (√)
        if (displayValue.includes('√')) {
            const number = parseFloat(displayValue.slice(1)); // Remove the √ symbol
            if (!isNaN(number)) {
                const result = Math.sqrt(number);
                document.getElementById('display').value = result;
                displayValue = result.toString();
                return;
            }
        }
        
        // Handle factorial (!)
        if (displayValue.includes('!')) {
            const number = parseInt(displayValue); // Remove the ! symbol
            if (!isNaN(number)) {
                const result = factorial(number);
                document.getElementById('display').value = result;
                displayValue = result.toString();
                return;
            }
        }

        // Replace operators and handle other cases
        const expression = displayValue
            .replace(/\^/g, '**')           // Handle power (^)
            .replace(/%/g, '/ 100')         // Handle percentage (%)

        // Evaluate the expression
        const result = eval(expression);

        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Factorial function
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
