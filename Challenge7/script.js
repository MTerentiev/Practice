'use strict';

let billAmount;
let numberPeople=1;
let tipRate=0;

document.querySelector('.perCent5').addEventListener('click', function () {
    tipRate = 0.05;
    document.querySelector('.perCent5').style.backgroundColor = '#60C1B6';
    document.querySelector('.perCent5').style.color = 'white';
    document.querySelector('.perCent10').style.backgroundColor = 'white';
    document.querySelector('.perCent10').style.color = '#60C1B6';
    document.querySelector('.perCent15').style.backgroundColor = 'white';
    document.querySelector('.perCent15').style.color = '#60C1B6';
    document.querySelector('.perCent20').style.backgroundColor = 'white';
    document.querySelector('.perCent20').style.color = '#60C1B6';
})

document.querySelector('.perCent10').addEventListener('click', function () {
    tipRate = 0.1;
    document.querySelector('.perCent10').style.backgroundColor = '#60C1B6';
    document.querySelector('.perCent10').style.color = 'white';
    document.querySelector('.perCent5').style.backgroundColor = 'white';
    document.querySelector('.perCent5').style.color = '#60C1B6';
    document.querySelector('.perCent15').style.backgroundColor = 'white';
    document.querySelector('.perCent15').style.color = '#60C1B6';
    document.querySelector('.perCent20').style.backgroundColor = 'white';
    document.querySelector('.perCent20').style.color = '#60C1B6';
})

document.querySelector('.perCent15').addEventListener('click', function () {
    tipRate = 0.15;
    document.querySelector('.perCent15').style.backgroundColor = '#60C1B6';
    document.querySelector('.perCent15').style.color = 'white';
    document.querySelector('.perCent10').style.backgroundColor = 'white';
    document.querySelector('.perCent10').style.color = '#60C1B6';
    document.querySelector('.perCent5').style.backgroundColor = 'white';
    document.querySelector('.perCent5').style.color = '#60C1B6';
    document.querySelector('.perCent20').style.backgroundColor = 'white';
    document.querySelector('.perCent20').style.color = '#60C1B6';
})

document.querySelector('.perCent20').addEventListener('click', function () {
    tipRate = 0.2;
    document.querySelector('.perCent20').style.backgroundColor = '#60C1B6';
    document.querySelector('.perCent20').style.color = 'white';
    document.querySelector('.perCent5').style.backgroundColor = 'white';
    document.querySelector('.perCent5').style.color = '#60C1B6';
    document.querySelector('.perCent10').style.backgroundColor = 'white';
    document.querySelector('.perCent10').style.color = '#60C1B6';
    document.querySelector('.perCent15').style.backgroundColor = 'white';
    document.querySelector('.perCent15').style.color = '#60C1B6';
})

document.querySelector('.calcButton').addEventListener('click', function () {

   numberPeople = Number(document.querySelector('.people__input').value);
    billAmount = Number(document.querySelector('.bill__input').value);
    
    if (billAmount === 0 || numberPeople === 0) {
        alert("Enter the bill amount, the number of people and choose the tip rate");
    } else {
    let tipAmount = billAmount * tipRate;
    let perPerson = (billAmount * tipRate + billAmount) / numberPeople;
    document.querySelector('.tip-amount').textContent = tipAmount.toFixed (2);
        document.querySelector('.per-person-amount').textContent = perPerson.toFixed(2);
    }
});



