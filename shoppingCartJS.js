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
    return itemPrice;
}

function updatedPhoneCasePrice(updatePrice) {
    const itemPrice = updatePrice * 59;
    const totalItemElement = document.getElementById('phoneCasePrice');
    totalItemElement.innerText = itemPrice;
    return itemPrice;
}

function getUpdateprice(updatePrice) {
    const currentPrice = document.getElementById(updatePrice);
    const currentPriceString = currentPrice.innerText;
    const currentPriceNumber = parseInt(currentPriceString);
    return currentPriceNumber;
}
function setCheckoutPrice(elementId, value) {
    const subTotalField = document.getElementById(elementId);
    subTotalField.innerText = value;
}

function subTotalPrice() {
    const currentPhonePrice = getUpdateprice('phonePrice');
    const currentPhoneCasePrice = getUpdateprice('phoneCasePrice');
    const totalPrice = currentPhonePrice + currentPhoneCasePrice;
    setCheckoutPrice('subTotalPrice', totalPrice)
    // const subTotalField = document.getElementById('subTotalPrice');
    // subTotalField.innerText = totalPrice;

    const taxPrice = (totalPrice * .15).toFixed(2);
    const taxPriceNumber = parseFloat(taxPrice);
    setCheckoutPrice('taxPrice', taxPriceNumber);

    const finalTotal = (taxPriceNumber + totalPrice);
    setCheckoutPrice('finalPrice', finalTotal);
}


document.getElementById('phoneIncreaseBtn').addEventListener('click', function () {
    const newItemAmount = itemIncreaseBtn('phoneInputFieldValue');
    const phoneTotalPrice = updatedPhonePrice(newItemAmount);
    const subtotalPrice = subTotalPrice();
})

document.getElementById('phoneDecreaseBtn').addEventListener('click', function () {
    const newItemAmount = itemDecreaseBtn('phoneInputFieldValue');
    const phoneTotalPrice = updatedPhonePrice(newItemAmount);
    const subtotalPrice = subTotalPrice();

})

document.getElementById('phoneCaseIncreaseBtn').addEventListener('click', function () {
    const newItemAmount = itemIncreaseBtn('phoneCaseInputFieldValue');
    const phoneCaseTotalPrice = updatedPhoneCasePrice(newItemAmount);
    const subtotalPrice = subTotalPrice();
})

document.getElementById('phoneCaseDecreaseBtn').addEventListener('click', function () {
    const newItemAmount = itemDecreaseBtn('phoneCaseInputFieldValue');
    const phoneCaseTotalPrice = updatedPhoneCasePrice(newItemAmount);
    const subtotalPrice = subTotalPrice();
})



