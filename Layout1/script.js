$(document).ready(function () {
  $(".header__nav-links li").click(function (event) {
    $(".header__nav-links li").removeClass("active");
    $(this).addClass("active");
  });
  $(".my-slide").slick({
    centerMode: true,
    arrows: true,
    centerPadding: "420px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1820,
        settings: {
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  });
  $(".number").counterUp({
    delay: 10,
    time: 1500,
  });
});
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
    // if (
    //   document.querySelector("#about").scrollTop > 20 ||
    //   document.querySelector("#brand").scrollTop > 20
  ) {
    document.getElementById("btnScroll").style.opacity = "1";
  } else {
    document.getElementById("btnScroll").style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
