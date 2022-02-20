var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
$(document).on("click", "#myBtn",function () {
    $('body,html').animate({scrollTop: 0}, 1000);
});



//swiper
const swiper = new Swiper('#first_swiper_container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 22,


  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1080: {
       slidesPerView: 5,
       spaceBetween: 30
      },
      814: {
        slidesPerView: 3,
        spaceBetween: 30
       },
      813: {
        slidesPerView: 2,
        spaceBetween: 10
       },
      768: {
       slidesPerView: 2,
       spaceBetween: 10
      },
      640: {
       slidesPerView: 2,
       spaceBetween: 10
     },
     320: {
      slidesPerView: 1,
      spaceBetween: 10
     }
    },
   

  });

  const swiper_second = new Swiper('#second_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
   spaceBetween: 30,


  
    // Navigation arrows
    navigation: {
      nextEl: '.next_2',
      prevEl: '.prev_2'
    },
  

  });
   
  const swiper_third = new Swiper('#third_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
   spaceBetween: 30,
 
   

  
    // Navigation arrows
    navigation: {
      nextEl: '.next_2',
      prevEl: '.prev_2'
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      900: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      901: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1080: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1081: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1216: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1218: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }

  });

    $(document).on("click", ".btn1", function(){
      $(".for_students").toggleClass("open");
      $(".for_mothers").removeClass("open");
      $(".for_busy_people").removeClass("open");
      $("body").toggleClass("hidden_body");
    })


    $(document).on("click", ".btn2", function(){
      $(".for_mothers").toggleClass("open");
      $(".for_students").removeClass("open");
      $(".for_busy_people").removeClass("open");
      $("body").toggleClass("hidden_body");
    })

    $(document).on("click", ".btn3", function(){
      $(".for_busy_people").toggleClass("open");
      $(".for_students").removeClass("open");
      $(".for_mothers").removeClass("open");
      $("body").toggleClass("hidden_body");
    })

    $(document).on("click", ".modal_close", function () {
        $(".main_modal").removeClass("open")
        $("body").toggleClass("hidden_body");
    })

    $(document).on("click", ".course_program_item_svg", function(){
        $(this).closest(".course_program_item").toggleClass("open");
        $(this).parent().toggleClass("active");
    })
    

    $(document).on("click", ".questions_item_svg ", function(){
      $(this).closest(".questions_item").toggleClass("open");
      $(this).parent().toggleClass("active");
  })


  $(document).on("change", "#check_input", function(){

    $(".check_input_label").removeClass("active");
    $(this).parent().toggleClass("active");
  
  })

  $(document).on("click", ".questions_link", function(){
     $(".ask_question_modal").toggleClass("open");
     $("body").toggleClass("hidden_body");
  })

  $(document).on("click", ".modal_close_second", function () {
    $(".ask_question_modal").removeClass("open");
    $("body").toggleClass("hidden_body");
})


$(document).on("change", "#test_radio_input1", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})

$(document).on("change", "#test_radio_input2", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input3", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input4", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input5", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input6", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input7", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input8", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input9", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input10", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input11", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input12", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input13", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input14", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input15", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input16", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input17", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input18", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})
$(document).on("change", "#test_radio_input19", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})

$(document).on("change", "#test_radio_input20", function(){
  $(".test_modal_radio_input_wrapper").removeClass("active");
  $(this).parent().addClass("active");

})

// $(document).on("click",".take_the_test_btn", function(){
//     $(".test_modal1").addClass("open")
//     $("body").toggleClass("hidden_body");
// })

$(document).on("click",".first_continue_btn", function(){
  $(".test_modal2").addClass("open");
  $(".test_modal1").removeClass("open");
  $("body").toggleClass("hidden_body");
})

$(document).on("click",".second_continue_btn", function(){
  $(".test_modal3").addClass("open");
  $(".test_modal2").removeClass("open");
  $("body").toggleClass("hidden_body");
})

$(document).on("click",".third_continue_btn", function(){
  $(".test_modal4").addClass("open");
  $(".test_modal3").removeClass("open");
  $("body").toggleClass("hidden_body");
})

$(document).on("click",".four_continue_btn", function(){
  $(".test_modal5").addClass("open");
  $(".test_modal4").removeClass("open");
  $("body").toggleClass("hidden_body");
})


$(document).on("click",".turn_back_btn2", function(){
  $(".test_modal1").addClass("open");
  $(".test_modal2").removeClass("open");
  $("body").toggleClass("hidden_body");
})


$(document).on("click",".turn_back_btn3", function(){
  $(".test_modal2").addClass("open");
  $(".test_modal3").removeClass("open");
  $("body").toggleClass("hidden_body");

})

$(document).on("click",".turn_back_btn4", function(){
  $(".test_modal3").addClass("open");
  $(".test_modal4").removeClass("open");
  $("body").toggleClass("hidden_body");
})
$(document).on("click",".turn_back_btn5", function(){
  $(".test_modal4").addClass("open");
  $(".test_modal5").removeClass("open");
  $("body").toggleClass("hidden_body");
})



$('.promos__slider').slick({
  infinite: true,
  speed: 300,
  dots: true,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '25%',
  prevArrow: '<img class="slider-prev" src="https://beautyhack.pro/wp-content/themes/beauty/images/left-arrow.svg" />',
  nextArrow: '<img class="slider-next" src="https://beautyhack.pro/wp-content/themes/beauty/images/right-arrow.svg" />',
  responsive: [
    
    {
      breakpoint: 600,
      settings: {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0%',
    draggable: false
      }
    }
  ]
})



$(document).on("click", ".hamburger-menu", function(){
    
  $('.mobile_version').fadeToggle();



});

$(document).on("click", ".mobile-close", function(){

  $('.mobile_version').fadeToggle();


});

