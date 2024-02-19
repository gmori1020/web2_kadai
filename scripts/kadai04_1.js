console.warn("-- kadai04_1.js --");

const multiplication1 = function(step) {

    //アロー
    const judgeMulti = (step) => {
        if(step >=1 && step <= 9){return true;}
        else {return false;}
    }

    if (judgeMulti(step)){
        for(let i = 1; i <= step; i++){
            let s = '';
            for( let j = 1; j <=9 ; j++){
                s += step * j + ' ';
            }
            console.log(s);
        }
} else {
    console.error(step + "の段は難しいよー。1~9にしてね。");
}

}

multiplication1(1);