console.log("-- kadai02_2.js --");

let Score = 59;

console.log("今期のあなたの点数は " + Score + " です。成績は")

if(Score <= 59) {
    console.log("Fです。");
} else if(Score <= 69){
    console.log("Dです。");
} else if(Score <= 79){
    console.log("Cです。");
} else if(Score <= 89){
    console.log("Bです。")
} else if(Score <= 100){
  console.log("Aです。");
} else {
    console.log("500");
}