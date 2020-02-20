
import './styles.css';
console.log('Ready to Party With Some TypeScript!');


const check = document.getElementById('check') as HTMLSpanElement;
const activeTipPercent = document.getElementById('tipPercentage') as HTMLSpanElement;
const tipNotification = document.getElementById('tip-notification') as HTMLSpanElement;
const totalBill = document.getElementById('totalBill') as HTMLSpanElement;



document.getElementById('tipInput').onchange = function () {

    const tip = (document.getElementById('tipInput') as HTMLInputElement).value;
    const bill = (document.getElementById('billAmount') as HTMLInputElement).value;
    const total = (document.getElementById('totalBill') as HTMLSpanElement);
    const tipInDollars = (document.getElementById('tipInDollars') as HTMLSpanElement);

    const cost = parseInt(bill);
    const tipCost = parseInt(bill) * (parseInt(tip) / 100);
    const totalCost = cost + tipCost;


    tipInDollars.innerText = tipCost.toFixed(2).toString();
    activeTipPercent.innerText = tip;
    tipNotification.innerText = tip;
    activeTipPercent.innerText = tip;
    total.innerText = totalCost.toFixed(2).toString();
};

document.getElementById('billAmount').oninput = function () {

    const bill = (document.getElementById('billAmount') as HTMLInputElement).value;
    const tip = (document.getElementById('tipInput') as HTMLInputElement).value;
    const total = (document.getElementById('totalBill') as HTMLSpanElement);
    const tipInDollars = (document.getElementById('tipInDollars') as HTMLSpanElement);

    const cost = parseInt(bill);
    const tipCost = parseInt(bill) * (parseInt(tip) / 100);
    const totalCost = cost + tipCost;

    tipInDollars.innerText = tipCost.toFixed(2).toString();
    check.innerText = parseInt(bill).toFixed(2).toString();
    activeTipPercent.innerText = tip;
    tipNotification.innerText = tip;
    activeTipPercent.innerText = tip;
    total.innerText = totalCost.toFixed(2).toString();
    console.log(bill);
    console.log(tip);
};






