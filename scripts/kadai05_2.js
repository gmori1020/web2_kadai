console.log("--- kadai05_2 ---")
const nobita ={
    name: "野比のび太"
}
function clac(num1,num2) {
    if(num1 >= 10 || num2>=10 || (num1 >=10 && num2 >= 10)){
        console.log(num1 + " + " + num2 + " はできないよ〜");
    } else {
        console.log(num1 + " + " + num2 + "は簡単だよ!"+ (num1+num2) + "だよ!");
    }
}

console.log("僕の名前は " + nobita.name);
console.log(clac(5,3));
console.log(clac(5,10));
console.log(clac(10,5));