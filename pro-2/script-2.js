




let span = document.querySelector(".spn") ;
let btn1 = document.querySelector(".bt1") ;
let btn2 = document.querySelector(".bt2") ;
let btn3 = document.querySelector(".bt3") ;
let loop = 1;

btn1.addEventListener("click" , function () {

    span.textContent = loop++
  span.style.color ="green"


})

btn2.addEventListener("click" , function () {
  span.textContent = loop = 0 ;
  span.style.color = "rgb(26, 62, 63)"

})

btn3.addEventListener("click" , function () {
  span.textContent = loop-- ;
  span.style.color = "red"
})










