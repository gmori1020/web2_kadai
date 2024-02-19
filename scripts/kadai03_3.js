console.warn("-- kadai03_3.js --");

const multiplication1 = function(step) {

    //アロー
    const judgeMulti = (step) => {
        if(step >=1 && step <= 9){return true;}
        else {return false;}
    }

    if (judgeMulti(step)){
    console.log(step*1+" "+step*2+" "+step*3+" "+step*4+" "+step*5+" "+step*6+" "+step*7+" "+step*8+" "+step*9);
} else {
    console.error(step + "の段は難しいよー。1~9にしてね。");
}

}

multiplication1(1);
multiplication1(2);
multiplication1(3);
multiplication1(4);
multiplication1(5);
multiplication1(6);
multiplication1(7);
multiplication1(8);
multiplication1(9);
multiplication1(10);
multiplication1(99);