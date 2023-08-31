

let but = document.getElementById('butn')
let spn = document.querySelector(".span")
let col = 1 ;
but.addEventListener("click" , function() {
  let random = gettingcolor() ;
  
  document.body.style.backgroundColor = random ;
  spn.textContent = random
  spn.style.color= random
  but.style.backgroundColor= random
})

function gettingcolor() {
  return  "#"+Math.floor(Math.random()*858)
}