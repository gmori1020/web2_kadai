//kadai02

let tax = 0.15;
let drink = 120;
let pan = 180;

let drink_c = 5;
let pan_c = 10;

console.log("消費税は " + tax*100 + "%");
console.log("飲み物は " + drink + "円");
console.log("パンは " + pan + "円");
console.log("飲み物は"+ drink_c + "本買うと " + (drink*drink_c) + "円");
console.log("パンを"+ pan_c + "個買うと " + (pan*pan_c) + "円");
let subtotal = (drink*drink_c) + (pan*pan_c);
let taxtotal = subtotal * tax;
console.log("小計は" + subtotal + "円、消費税は" + taxtotal + "円、合計金額は" + (subtotal+taxtotal) + "円です。");

//id 書き換え
document.getElementById("subtotal").innerHTML = subtotal;
document.getElementById("taxtotal").innerHTML = taxtotal;
document.getElementById("total").innerHTML = (subtotal+taxtotal)

console.log("------------");