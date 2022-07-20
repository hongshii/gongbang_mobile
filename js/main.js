var swiper = new Swiper(".banner", {
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      }, 
    autoplayDisableOnInteraction: false,
    delay:1000,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
});

var swiper2 = new Swiper(".p_swiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 25,
  loop: true,
  loopFillGroupWithBlank: false,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  navigation: {
    nextEl: ".p_next",
    prevEl: ".p_prev"
  }
});

var swiper3 = new Swiper(".c_swiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 25,
  loop: true,
  loopFillGroupWithBlank: false,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  navigation: {
    nextEl: ".c_next",
    prevEl: ".c_prev"
  }
});

$('.m_menu').click(function(){
  if( $(this).hasClass('active')){    //현재 active가 적용된 상태일 떄
      $(this).removeClass('active');
  }else {
      $('.m_menu').removeClass('active');
      $(this).addClass('active');
  }
})

// $('.m_menu1').click(function(){
//   if( $('.m_img2').css('display') == 'none'){   
//       $('.m_img2').show();
//       $('.m_img1').hide();
//   }else {
//     $('.m_img2').hide();
//     $('.m_img1').show();
// }
//});

/*
  $('#menu_w>ul>li >a').click(function(){
    if( !$(this).hasClass('active') ){
      console.log("액티브 없는 상태")
      $(this).removeClass('active');
    } else {
      $('#menu_w>ul>li >a').removeClass('active');
      $(this).addClass('active');
    }
  })
  */
  $('#menu_w>ul>li >a').click(function(){
    $(this).addClass('active');
  })


