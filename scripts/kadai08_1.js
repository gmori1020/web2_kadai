//box1
document.querySelector('#box1BgBtn').addEventListener('click', (event) => {
  const elm1 = document.querySelector('#setBgTxt').value;
  document.querySelector('#box1').style.backgroundColor = elm1;
});

//box2
document.querySelector('#box2ColorBtn').addEventListener('click', (event) => {
  const elm2 = document.querySelector('#setColorTxt').value;
  document.querySelector('#box2Text').style.color = elm2;
});

//box3
document.querySelector('#box3FontSizeBtn').addEventListener('click', (event) => {
  const elm3 = document.querySelector('#setFontSizeTxt').value;
  document.querySelector('#box3Text').style.fontSize = elm3;
});

//box4
document.querySelector('#box4BorderBtn').addEventListener('click', (event) => {
  const elm3 = document.querySelector('#setBorderTxt').value;
  document.querySelector('#box4').style.border = elm3;
});

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
