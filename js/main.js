$(document).ready(function(){
  $('.owl-carousel-1').owlCarousel({
      loop:true,
      nav:false,
      navClass: ['slider_nav-left', 'slider_nav-right'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
});

$('.btn-submenu').on('click', () => {
  $('.btn-submenu').toggleClass('btn-submenu_active');
  $('.submenu').toggleClass('submenu_active');
  $('body').toggleClass('body_active');
});

$('.submenu_menu-btn').on('click', () => {
  $('.submenu').toggleClass('submenu_active');
})

$('.con-3_part-1').on('click', () => {
  $('.con-3_partition_open-block').addClass('con-3_partition_open-block_active');
});
$('.con-3_button').on('click', () => {
  $('.con-3_partition_open-block').removeClass('con-3_partition_open-block_active');
});

$('.see-more').on('click', () => {
  $('.portfolio2').toggleClass('portfolio2_active');;
});

document.querySelector('.see-more').onclick = function() {
  if(this.innerHTML == "see more")
  {
    this.innerHTML = "closed";
    return;
  }
  else this.innerHTML = "see more";
}

$(document).ready(function() {
  $('.input-number').mask("+1 999 999 9999");
});