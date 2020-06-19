$(document).ready(function()){
const mMenubtn = $(".m.menu-button");
const mMenu = $(".m-menu");
mMenubtn.on('click',function() {
mMenu.toggleClass("active");
$('body').toggleClass("no-scroll");
});
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  
  slidesPerView: 4,
  spaceBetween:25,
  loop: true,
  breakpoints:{
    992:{
      slidesPerView: 4,
    }
    768:{
      slidesPerView: 2,
    }
    320:{
      slidesPerView: 1,
    }
  }
});
};