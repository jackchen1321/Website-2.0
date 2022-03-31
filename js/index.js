$('.slider').flickity({
    // options
    cellAlign: 'center',
    contain: true
  });

  setTimeout(() => {
    wow = new WOW(
        {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
            //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            console.log(box);
            $(box).addClass('animatedd');
        }
        }
    );
    wow.init();
  }, 200);

  $('.mob_menu .close').click(() => {
    $('.mob_menu').fadeOut(100)
});
$('.mob_menu a').click(() => {
    $('.mob_menu').fadeOut(100)
});
$('.open_mobmenu').click(() => {
    $('.mob_menu').fadeIn(100).css('display', 'flex')
});

$('a[href^="#"]').click(function(){ // #1
    let anchor = $(this).attr('href');  // #2
    $('html, body').animate({           // #3
    scrollTop:  $(anchor).offset().top  // #4
    }, 600);                            // #5
});