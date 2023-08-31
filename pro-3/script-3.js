let imgup = document.querySelector(".card-cont") ;
let go1 = document.querySelector(".go1") ;
let go2 = document.querySelector(".go2") ; 
let img1 = imgup.textContent =
 `
 <div class="card-cont">
 
 <div class="img"> <img src="./image/person-1_rfzshl.jpg" alt=""> </div>
 <span>About Me</span>
 <p class="info">  I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry </p>

 </div>

`

let img2 = imgup.textContent =
 `
  <div class="img"> <img src="./image/person-2_np9x5l.jpg" alt=""> </div>
  <span>About Me</span>
  <p class="info">Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.  </p>
  `
let img3 = imgup.textContent =
 `
  <div class="img"> <img src="./image/person-3_ipa0mj.jpg" alt=""> </div> 
  <span>About Me</span>
  <p class="info"> Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.  </p>
  
  `
let img4 = imgup.innerHTML = 
`
 <div class="img"> <img src="./image/person-4_t9nxjt.jpg" alt=""> </div> 
 <span>About Me</span>
 <p class="info">  Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. </p>
 
 
 `
// ******************************************************************


let magicimg = [ img1 ,img2 ,img3 ,img4 ] ;


go2.addEventListener("click" , function() {
  let map = gettingQuote() ;
  imgup.innerHTML = magicimg[map]
})

function gettingQuote() {
  return  Math.floor(Math.random()*magicimg.length)
}



go1.addEventListener("click" , function() {
  let map = gettingQuote() ;
  imgup.innerHTML = magicimg[map]
})

function gettingbackQuote() {
  return  Math.floor(Math.random()*--magicimg.length)
}
