console.log("--- kadai05_3 ---")

const student ={

    nobita : {
        name: "野比のび太",
        intro: ()=>{ console.log("僕は " + student.nobita.name + "! 計算はちょっと苦手だよ...") },
        clac: (num1,num2)=> {
                if(num1 >= 10 || num2>=10 || (num1 >=10 && num2 >= 10)){
        console.log(num1 + " + " + num2 + " はできないよ〜");
    } else {
        console.log(num1 + " + " + num2 + "は簡単だよ!"+ (num1+num2) + "だよ!");
    }
        }
    }, //nobi

    dekisugi: {
        name: "出木杉",
        intro: ()=>{ console.log("僕は " + student.dekisugi.name + "! 計算は得意だよ!") },
        clac: (num1,num2,num3)=>{
            switch (num3) {
                case 0: // +
                    console.log(num1 + " + " + num2 + " は " + (num1+num2));
                    break;
                case 1: // -
                console.log(num1 + " - " + num2 + " は " + (num1-num2));
                    break;
                case 2: // *
                console.log(num1 + "*" + num2 + " は " + (num1*num2));
                    break;
                case 3:// /
                console.log(num1 + " / " + num2 + " は " + (num1/num2));
                    break;
                
                default:
                    console.log("このメッセージが 見れるのは おかしいよ");
                    break;
            }

        }
    }
}


student.nobita.intro();
student.nobita.clac(5,3);
student.nobita.clac(5,10);
student.nobita.clac(10,5);

student.dekisugi.intro();
student.dekisugi.clac(10,5,0);
student.dekisugi.clac(10,5,1);
student.dekisugi.clac(10,5,2);
student.dekisugi.clac(10,5,3);
//student.dekisugi.clac(10,5,4)