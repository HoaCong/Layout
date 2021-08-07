
$(window).on("load", function (event) {
    $('body').removeClass('preloading');
    $('#preload').delay(1000).fadeOut('fast');
});
$(document).ready(function () {
    $('.number').counterUp({
        delay: 10,
        time: 1000
    });
});
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 120) {
        $("header").addClass("nav-sticky");
    } else {
        $("header").removeClass("nav-sticky");
    }
});
$(document).ready(function () {
    $(".nav li a").click(function (event) {
        $(".nav li a").removeClass("active");
        $(this).addClass("active");
    });
});

function bannerSwitcher() {
    next = $('.time-tranfer').filter(':checked').next('.time-tranfer');
    if (next.length) next.prop('checked', true);
    else $('.time-tranfer').first().prop('checked', true);
}

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
});
$('[data-fancybox="listgallery"]').fancybox({
    margin: [44, 0, 22, 0],
    thumbs: {
      autoStart: true,
      axis: 'x'
    }
});