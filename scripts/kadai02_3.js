console.warn("-- kadai02_3.js --");

//パンとジュースの価格設定
let Pan = 150;
let Drink = 100;
let Pan_Sun;
let Drink_Sun;

//パンとジュースの購入個数設定
let Pan_c = 10;
let Drink_c = 10;

//パンの割引関係
if(Pan_c >= 5 && Pan_c < 10){
    Pan_Sun = (Pan * Pan_c) * 0.95;
    console.log("パンが"+ Pan_c + "個で" + Pan_Sun + "円(割引後)");
}
if(Pan_c >= 10) {
    Pan_Sun = (Pan * Pan_c) * 0.9;
    console.log("パンが"+Pan_c + "個で " + Pan_Sun + "円(割引後)" );
}

//ジュースの割引関係
if(Drink_c >= 10 && Drink_c < 20){
    Drink_Sun = (Drink * Drink_c) * 0.95;
    console.log("ドリンクが"+ Drink_c + "個で" + Drink_Sun + "円(割引後)");
}
if(Drink_c >= 20) {
    Drink_Sun = (Drink * Drink_c) * 0.9;
    console.log("ドリンクが"+Drink_c + "個で " + Drink_Sun * 0.9 + "円(割引後)" );
}

console.log("合計は" + (Pan_Sun + Drink_Sun) + "円です。");