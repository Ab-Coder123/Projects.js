















let up = document.querySelector(".nav-bar") ;
let burger= document.querySelector(".burger")
let link = document.querySelector(".links") ;


burger.addEventListener("click" ,  () => {
  burger.classList.toggle("show")
  link.classList.toggle("show")
  link.style.transition ='0.8s' ;

  })








// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   menu.style.transition="0.9s"  


//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//     closeIcon.style.transition="9s"


//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//       closeIcon.style.transition="9s"

//     menuIcon.style.display = "none";

//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )
