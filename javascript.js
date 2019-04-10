// (function($, undefined){
//   $(function(){
'use strict'

  let
    html = document.documentElement,
    body = document.body;


  function getClock(className) {
    let time = document.querySelector(className);
    setInterval(() => {
      let date = new Date();
      let seconds = date.getSeconds();
      if(seconds < 10){
        seconds = '0' + date.getSeconds()
      }
      time.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + seconds;
    });
  }
  getClock('.time');









    // $('body').append('<div class="arrowTop"></div>');

  //   $('.arrowTop').css({
  //     width: '50px',
  //     height: '50px',
  //     borderRadius: '25px',
  //     backgroundColor: 'white',
  //     position: 'fixed',
  //     right: '25px',
  //     bottom: '25px'
  //   })
  //
  //   $('.arrowTop').click(() => {
  //     $('html, body').animate({
  //       scrollTop: 0
  //     }, 300)
  //   })
  //
  //   setInterval(() => {
  //   if( $('.arrowTop').offset().top < 1000 ){
  //     $('.arrowTop').animate({
  //       right: '-100px'
  //     }, 300);
  //   } else {
  //     $('.arrowTop').animate({
  //       right: '10px'
  //     }, 300);
  //   }
  // }, 500);





//     console.log($('.arrowTop').offset().top);
// $('.arrowTop').offset();
// console.log($('.arrowTop').offset().top);
//
// console.log($(window).height());

//























//   });
// })(jQuery);
