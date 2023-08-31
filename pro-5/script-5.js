








//using selectors inside the element
const questions = document.querySelectorAll(".Quo");

questions.forEach((question) => {
  const btn = question.querySelector(".i-link");
  const prah = question.querySelector(".pra");

  // console.log(btn);

  btn.addEventListener("click", function () {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-p");
      }
    });
    prah.style.transition = "0.5s";
    question.classList.toggle("show-p");
  });
});
