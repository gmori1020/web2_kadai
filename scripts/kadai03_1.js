console.warn("-- kadai03_1.js --");
const num1 = 10;
const num2 = 3;
function calcMinus(num1,num2) {
console.log(num1 + " - " + num2 + "の結果は" + (num1-num2) + "です。");
}

function calcMulti(num1,num2) {
console.log(num1 + " * " + num2 + "の結果は" + (num1*num2) + "です。");
}

function calcDivision(num1,num2) {
console.log(num1 + " / " + num2 + "の結果は" + (num1/num2) + "です。");}

function calcRemainder(num1,num2) {
console.log(num1 + " % " + num2 + "の結果は" + (num1%num2) + "です。");
}

function calcPower(num1,num2) {
console.log(num1 + " ** " + num2 + "の結果は" + (num1**num2) + "です。");}

calcMinus(num1,num2);
calcMulti(num1,num2)
calcDivision(num1,num2)
calcRemainder(num1,num2)
calcPower(num1,num2)