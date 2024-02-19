console.log("-- kadai04_2.js --")
const a = [10,20,30,40];

console.log("配列aの要素の数は " + a.length);
console.log("配列aのインデックス0番目は" + a[0]);
console.log("配列aのインデックス1番目は" + a[1]);
console.log("配列aのインデックス2番目は" + a[2]);
console.log("配列bを作成して配列aを代入します!");
const b = a;
console.log("配列bのインデックス0番目を100に変えます!")
b[0] = 100;
console.log("配列aのインデックス0番目は" + b[0]);
console.log("配列aのインデックス1番目は" + b[1]);
console.log("配列aのインデックス2番目は" + b[2]);
console.log("配列aのインデックス0番目は" + a[0]);
console.log("配列aのインデックス1番目は" + a[1]);
console.log("配列aのインデックス2番目は" + a[2]);