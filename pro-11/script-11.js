



let hour = document.querySelector(".hr") ;
let mints = document.querySelector(".min") ;
let secound = document.querySelector(".secd") ;


setInterval( () => {
  const date = new Date () ;
  const hor = date.getHours() * 30;
  const mint = date.getMinutes() * 6 ;
  const secd = date.getSeconds() * 6  ;

  hour.style.transform = `rotateZ(${(hor)+(mint/12)}deg)` ;
  mints.style.transform = `rotateZ(${(mint)}deg)` ;
  secound.style.transform = `rotateZ(${(secd)}deg)` ;
} ) ;






















