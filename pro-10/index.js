



let seconds = "00";
let tens = "00";
let mins = "00";

let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let getMins = document.querySelector(".mins");

// butns
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let interval;

// actions
btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
// stop watch

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
// reset
btnReset.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  mins = "00";
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
  getMins.innerHTML = mins;
});

// **********************************************************************
function startTimer() {
  tens++; // is loop
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  };
  // هنا انتا بتبدي من صفر ف بتزود صفر
  if (tens > 9) {
    getTens.innerHTML = tens;
  };

  // طيب لو اكبر من 9 يبقا هشيل ال صفر لانها هتبدا من 10

  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds;
    // second دي بقا لما انتا تخلص اول لفه من فنتو ثانيه
    tens = 0;
    getTens.innerHTML = "0" + 0;
    //  دي بقا هتبدا من اول وجديد عشان تبدا ل الثانيه التانيه
  };

  // هنا انتا بقا بتبدي من اول و جديدي فنتوثانيه زكمان بدات ال ثانيه

  // end mint code
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
    // طيب لو اكبر من 9 يبقا هشيل ال صفر لانها هتبدا من 10
  };
  if (seconds > 59) {
    // طيب انتا خلصت ال ثانيه الاول ابدا بقا الدقيقه من صفر +صفر لانها اصغر من ال 10
    mins++;
    getMins.innerHTML = "0" + mins;
    // هنا هتبتدي ال ثانيه الجديده
    seconds = 0;
    getSeconds.innerHTML = "0" + 0;
  };
  // end secound
  if (mins > 9) {
    getSeconds.innerHTML = mins;
  };
  //  هنا الدقيقه اكبر من ال 10
};




