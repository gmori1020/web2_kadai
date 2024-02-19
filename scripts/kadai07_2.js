const elm1 = document.querySelector('#box1');
elm1.style.backgroundColor = "red";

const elm2 = document.querySelector('#box2Text');
elm2.style.color = "red";

const elm3 = document.querySelector('#box3Text');
elm3.style.fontSize = "x-large";

const elm4 = document.querySelector('#box4');
elm4.style.border = "thin solid red";


// common.js
window.onload=(e)=>{
  /**
  * コンテンツのリサイズ
  */
  const cw = document.querySelector('#content-wrap');
  const header = document.querySelector('#wrapper>header');
  const footer = document.querySelector('#wrapper>footer');
  let winH = e.currentTarget.innerHeight;
  let headerH = header.clientHeight+2;
  let footerH = footer.clientHeight;
  let cwH = cw.clientHeight;
  let siteH = headerH+cwH+footerH;
  if(winH > siteH){
    cw.style.height = ( cwH + (winH-siteH) ) + 'px';
  }

  /**
   * コピーライトの年度更新
   */
  const year = document.querySelector('#year');
  let date = new Date();
  year.innerText = date.getFullYear();

}
