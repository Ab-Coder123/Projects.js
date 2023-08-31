


// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const weekdays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// //    end object to use as amonth and Weekdays

// //  varibales
// const giveaway = document.querySelector(".giveaway");
// const deadline = document.querySelector(".deadline");
// const items = document.querySelectorAll(".deadline-format h4");


// let Datefinal = new Date( 2024 , 5 , 10) ;
// let fullyear = Datefinal.getFullYear() ;
// let fullmonth = Datefinal.getMonth() ;
// let fullday = Datefinal.getDay() ; 

// // months are ZERO index based;
// const futureDate = new Date(fullyear, fullmonth, fullday+ 1, 11, 30, 0);

// // جبنا الارقام السنين و الشهور 

// let year = futureDate.getFullYear() ; 
// let month = futureDate.getMonth() ;  month = months[month] ;
// let day = futureDate.getDay(); day = weekdays[day] ;
// let hour = futureDate.getHours() ;
// let minutes = futureDate.getMinutes() ;
// let date = futureDate.getDate()
// // نغير محتوي براجراف من حيث انتهاء التاريخ 
// deadline.innerHTML = `Giveaway Ends On ${day} , ${date} ${month} ${year} ${hour}:${minutes}am `

// // ***************************************************************************************************
// let d2024 = futureDate.getTime() ;


// let countdown = setInterval( function mytimer() {
//   let d2023 = new Date().getTime() ;
//   let timer = d2024 - d2023 ; 
// // values in miliseconds
// const oneDay = 24 * 60 * 60 * 1000;
// const oneHour = 60 * 60 * 1000;
// const oneMinute = 60 * 1000;
// const oneseconds =  1000;

//   let days = Math.floor(timer / oneDay) ;
//   let hours = Math.floor((timer % oneDay) / oneHour) ;
//   let minutes = Math.floor((timer % oneHour) / oneMinute) ;
//   let seconds = Math.floor((timer % oneMinute) / oneseconds) ;


//   //item دلوقتي انا هعمل تغير ال  
// //  elements html  تغير ارقام ال
// const values = [days, hours, minutes, seconds];
//  function format(item) {
//   if (item < 10) {
//       return  (item = "0" + item)  ;
//   };
// };   
//   items.forEach( (item,index)=> {
//       item.innerHTML = format(values[index]) ; 
//   }) ;

//   if (timer < 0) {
//         clearInterval(countdown) ;
//        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
//   }



// } , 1000 ) ;
// mytimer() ;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//    end object to use as amonth and Weekdays

//  varibales
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

//   اختصارات
let tempDate = new Date(2023, 9, 5);
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 11, 30, 0);




// **********************************************************************************************

//    is used to link with the elements timers
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
//  name month
let month = futureDate.getMonth();
month = months[month];
//  name Day
const weekday = weekdays[futureDate.getDay()];
// date
const date = futureDate.getDate();

// to change the text elemrnt givaway
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
//   giveaway ends on Thursday, 15 June 2023 11:30am

// **************  The timer      *******************************************************************************************

const futureTime = futureDate.getTime();
// 1970 , 2023  بتجيب الوقت ال مابين
const todays = new Date().getTime();
// 1970 , 2023 بتجيب الوقت ال مابين

function getRemaindingTime() {
  // this between 2023 time - 2024 time
  const today = new Date().getTime();
  const t = futureTime - today;
  // بتطرح بقا فرق الوقت المابين السنتين دول ال جبناهم فوق

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

// *******************************************************************************************************

  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values

  //   فرق الايام
  let days = Math.floor(t / oneDay);
  // days = Math.floor(days);
  //  فرق الساعات وهكذا  الدقايق والثواني
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //  elements html  تغير ارقام ال
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = "0" + item);
    }
    return item;
  }

  //  this is
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t <= 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
