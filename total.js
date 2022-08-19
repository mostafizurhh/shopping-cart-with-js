
const currentPhonePrice = document.getElementById('phonePrice');
const currentPhonePriceString = currentPhonePrice.innerText;
const currentPhonePriceNumber = parseInt(currentPhonePriceString);

const subTotalField = document.getElementById('subTotalPrice')
const subTotalFieldString = subTotalField.innerText;
const subTotalFieldNumber = parseInt(subTotalFieldString);
const newSubTotal = subTotalFieldNumber + currentPhonePriceNumber;
subTotalField.innerText = newSubTotal;
