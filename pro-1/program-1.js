









let but = document.getElementById('butn')
let spn = document.querySelector(".span")
let col = 1 ;
let colors = ["red" , ' rgb(55,55,55)', "blue" , "violet" ,"green"]
but.addEventListener("click" , function() {
  let random = gettingcolor() ;
  
  document.body.style.backgroundColor = colors[random] ;
  spn.textContent = colors[random]
  spn.style.color= colors[random]
  but.style.backgroundColor= colors[random]
})

function gettingcolor() {
  return  Math.floor(Math.random()*colors.length)
}














