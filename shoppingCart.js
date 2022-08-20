function increaseBtn(plusBtn) {
    const inputFieldValue = document.getElementById(plusBtn);
    const inputFieldStringValue = inputFieldValue.value;
    const inputFieldNumberValue = parseInt(inputFieldStringValue);
    const inputFieldNewValue = inputFieldNumberValue + 1;
    inputFieldValue.value = inputFieldNewValue;
    return inputFieldNewValue;
}
function decreaseBtn(minusBtn) {
    const inputFieldValue = document.getElementById(minusBtn);
    const inputFieldStringValue = inputFieldValue.value;
    const inputFieldNumberValue = parseInt(inputFieldStringValue);
    const inputFieldNewValue = inputFieldNumberValue - 1;
    inputFieldValue.value = inputFieldNewValue;
    return inputFieldNewValue;
}
function updatedPhonePrice(updatePrice) {
    const phonePrice = document.getElementById('phonePrice');
    const phonePriceStringvalue = phonePrice.innerText;
    const phonePriceNumberValue = parseInt(phonePriceStringvalue);
    const newPhonePrice = updatePrice * 1219;
    phonePrice.innerText = newPhonePrice;
}
function updatedPhoneCasePrice(updatePrice) {
    const phonePrice = document.getElementById('phoneCasePrice');
    const phonePriceStringvalue = phonePrice.innerText;
    const phonePriceNumberValue = parseInt(phonePriceStringvalue);
    const newPhonePrice = updatePrice * 59;
    phonePrice.innerText = newPhonePrice;
}

// for subtotal price
function currentTotalPrice(subtotal) {
    const phoneTotalPrice = document.getElementById(subtotal);
    const phoneTotalPriceStringValue = phoneTotalPrice.innerText;
    const phoneTotalPriceNumberValue = parseInt(phoneTotalPriceStringValue);
    return phoneTotalPriceNumberValue;
}

function totalPrice() {
    // subtotal price
    const phoneSubTotalPrice = currentTotalPrice('phonePrice');
    const phoneCaseSubTotalPrice = currentTotalPrice('phoneCasePrice');
    const subTotalPrice = phoneSubTotalPrice + phoneCaseSubTotalPrice;
    const subTotal = document.getElementById('subTotalPrice');
    subTotal.innerText = subTotalPrice;

    // tax price
    const tax = document.getElementById('taxPrice');
    tax.innerText = (subTotalPrice * .10).toFixed(2);
    const convertTaxToNumber = parseFloat(tax.innerText);

    // total price
    const finalPrice = document.getElementById('finalPrice');
    finalPrice.innerText = subTotalPrice + convertTaxToNumber;
    const convertFinalPriceToNumber = parseFloat(finalPrice.innerText);
}

// phone 
document.getElementById('phoneIncreaseBtn').addEventListener('click', function () {
    const newPhoneNumber = increaseBtn('phoneInputFieldValue');
    const newPhonePrice = updatedPhonePrice(newPhoneNumber);
    const finalPrice = totalPrice();
})
document.getElementById('phoneDecreaseBtn').addEventListener('click', function () {
    const newPhoneNumber = decreaseBtn('phoneInputFieldValue');
    const newPhonePrice = updatedPhonePrice(newPhoneNumber);
    const finalPrice = totalPrice();
})

// phone Case
document.getElementById('phoneCaseIncreaseBtn').addEventListener('click', function () {
    const newPhoneNumber = increaseBtn('phoneCaseInputFieldValue');
    const newPhoneCasePrice = updatedPhoneCasePrice(newPhoneNumber);
    const finalPrice = totalPrice();
})
document.getElementById('phoneCaseDecreaseBtn').addEventListener('click', function () {
    const newPhoneNumber = decreaseBtn('phoneCaseInputFieldValue');
    const newPhoneCasePrice = updatedPhoneCasePrice(newPhoneNumber);
    const finalPrice = totalPrice();
})
