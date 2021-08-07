new WOW().init();

jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});
// movetop
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);
// $(window).scroll(function () {
// 	let position = $(this).scrollTop();
// 	if (position >= 50) {
// 		$(".top-header").addClass("navbar-fixed-top");
// 	} else {
// 		$(".top-header").removeClass("navbar-fixed-top");
// 	}
// });
$(window).ready(function () {
    $("span.menu").click(function () {
        $(".top-menu ul").slideToggle("slow", function () {
        });
    });
});


$(function () {
    var filterList = {
        init: function () {
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });
        },
        hoverEffect: function () {
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function () {
                    $(this).find('.label').stop().animate({ bottom: 0 }, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({ top: -30 }, 500, 'easeOutQuad');
                },
                function () {
                    $(this).find('.label').stop().animate({ bottom: -40 }, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({ top: 0 }, 300, 'easeOutQuad');
                }
            );
        }
    };
    // Run the show!
    filterList.init();
});	


$(document).ready(function () {
$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});

});

// You can also use "$(window).load(function() {"
$(function () {
$("#slider2").responsiveSlides({
    auto: true,
    pager: true,
    speed: 300,
    namespace: "callbacks",
});
});

$(document).ready(function () {
$().UItoTop({ easingType: 'easeOutQuart' });
});