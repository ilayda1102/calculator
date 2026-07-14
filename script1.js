let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    let expression = display.value;
    let result;

    if (expression.includes('+')) {
        let numbers = expression.split('+');
        result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    } 

    else if (expression.includes('-')) {
        let numbers = expression.split('-');
        result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    } 

    else if (expression.includes('*')) {
        let numbers = expression.split('*');
        result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    } 

    else if (expression.includes('/')) {
        let numbers = expression.split('/');

        if (parseFloat(numbers[1]) == 0) {
            result = "Hata";
        } 
        
        else {
            result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        }
    } 
    
    else if ( expression.includes('%')) {
        let numbers = expression.split('%');
        result = parseFloat(numbers[0]) % parseFloat(numbers[1]);
    }
    display.value = result;        

}