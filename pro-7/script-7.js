























let btn = document.querySelector(".btn");
let vid = document.querySelector(".video")

btn.addEventListener("click" , ()=> {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    vid.pause();
  } else {
    btn.classList.remove("slide");
    vid.play();
  }
})





























































