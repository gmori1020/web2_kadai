//kadai3

let number = 10;
console.log("変数number:10に");
console.log("10を足すと" + (number += 10));
console.log("7を引くと" + (number -= 7));
console.log("4掛けると" + (number *= 4));
console.log("2割ると" + (number /= 2));
console.log("3で割った余りは" + (number %= 3));
console.log("3乗した値は" + (number**=3))

//id 'number'
document.getElementById("number").innerHTML = number;

console.log("------------");