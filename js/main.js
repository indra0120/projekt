var hamburger = document.getElementById("hamburger");
var navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () =>{
  navbar.classList.toggle("show");
})

// Modal Box Script, source: https://codepen.io/JavaScriptJunkie/pen/WgRBxw
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: false,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
});
