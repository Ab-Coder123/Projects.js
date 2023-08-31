


const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");


about.addEventListener("click", function(e) {
  let id = e.target.dataset.id  ;
  if (id) {
    btns.forEach(function(btn){
        btn.classList.remove("active") ;
    }); 
    e.target.classList.add("active") ;

// *******************************************************
    articles.forEach((arti)=> {
      arti.classList.remove("active")
    })
    const add = document.getElementById(id)
    add.classList.add("active")

  };
});









































// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons

//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");

//     // ده بتاع ال زرار 
//     // (طيب ايه فايده ال ( فور ايتش  اقولكك اولا عشان تلغي خاصيه ال اكتيف من الزرار الاول 
//     //  والتاني عشان يضيف خاصيه الاكتيف ل الزرار التاني   html عشان يضيف ال اكتف ل الزرار التاني بعد ماتحذف من الزرار الاول وكده نكون عملنا كودين واحد عشان يحذف خاصيه اكتف اوردي موجوده ف  ال الزرار الاول ف اللغه  :   e.target.classList.add("active");  طيب ايه فايده الكود ده  
// // *****************************************************************************

//   }

//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");


// //   element نفس الامر ب النسبه ل الاكواد دي لكن تختلف ف ال  
// });


