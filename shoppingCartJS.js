function itemIncreaseBtn(plusBtn) {
    const inputFieldValue = document.getElementById(plusBtn);
    const inputFieldStringValue = inputFieldValue.value;
    const convertInputFieldValueToNumber = parseInt(inputFieldStringValue);
    const newItemAmount = convertInputFieldValueToNumber + 1;
    inputFieldValue.value = newItemAmount;
    return newItemAmount;
}

function itemDecreaseBtn(minusBtn) {
    const inputFieldValue = document.getElementById(minusBtn);
    const inputFieldStringValue = inputFieldValue.value;
    const convertInputFieldValueToNumber = parseInt(inputFieldStringValue);
    const newItemAmount = convertInputFieldValueToNumber - 1;
    inputFieldValue.value = newItemAmount;
    return newItemAmount;
}

function updatedPhonePrice(updatePrice) {
    const itemPrice = updatePrice * 1219;
    const totalItemElement = document.getElementById('phonePrice');
    totalItemElement.innerText = itemPrice;
}

function updatedPhoneCasePrice(updatePrice) {
    const itemPrice = updatePrice * 59;
    const totalItemElement = document.getElementById('phoneCasePrice');
    totalItemElement.innerText = itemPrice;
}

document.getElementById('phoneIncreaseBtn').addEventListener('click', function () {
    const newItemAmount = itemIncreaseBtn('phoneInputFieldValue');
    const itemTotalPrice = updatedPhonePrice(newItemAmount);
})

document.getElementById('phoneDecreaseBtn').addEventListener('click', function () {
    const newItemAmount = itemDecreaseBtn('phoneInputFieldValue');
    const itemTotalPrice = updatedPhonePrice(newItemAmount);
})

document.getElementById('phoneCaseIncreaseBtn').addEventListener('click', function () {
    const newItemAmount = itemIncreaseBtn('phoneCaseInputFieldValue');
    const itemTotalPrice = updatedPhoneCasePrice(newItemAmount);
})

document.getElementById('phoneCaseDecreaseBtn').addEventListener('click', function () {
    const newItemAmount = itemDecreaseBtn('phoneCaseInputFieldValue');
    const itemTotalPrice = updatedPhoneCasePrice(newItemAmount);
})