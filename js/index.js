
function getPin() {
    const pin = generatePin();
    const pinString = pin + "";
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.ceil(Math.random() * 10000);
    return random;
}

document.getElementById('btn-generate').addEventListener('click', function () {
    const randonPinNumber = getPin();
    // console.log(randonPinNumber);
    const inputElement = document.getElementById('input-value');
    inputElement.value = randonPinNumber;
})

document.getElementById('calculator').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const inputTypeNumber = document.getElementById('input-type');
    const previousNumber = inputTypeNumber.value;

    if(isNaN(number)) {
        if(number === 'C') {
            inputTypeNumber.value = '';
        }else {
            const digits = previousNumber.split('');
            digits.pop();
            const remaingDigits = digits.join('');
            inputTypeNumber.value = remaingDigits;
        }
    }else {
        const newNumber = previousNumber + number;
        inputTypeNumber.value = newNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function() {
    const inputElement = document.getElementById('input-value');
    const currentValue = inputElement.value;

    const inputTypeNumber = document.getElementById('input-type');
    const currenttypValue = inputTypeNumber.value;

    const notifiySuccess = document.getElementById('notify-success');
    const notifiyError = document.getElementById('notify-error');

    // console.log(currentValue, currenttypValue);
    if(currentValue === currenttypValue) {
        notifiySuccess.style.display = 'block';
        notifiyError.style.display = 'none';
    }else {
        notifiyError.style.display = 'block';
        notifiySuccess.style.display = 'none';
    }
})