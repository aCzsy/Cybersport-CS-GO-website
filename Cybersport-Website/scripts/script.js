
/*FUNCTION FOR MOBILE NAVIGATION,
* WHEN HAMBURGER ICON (has class .menu-toggle) IS CLICKED,
* CLASS CHANGES FROM .MOBILE-NAV TO .MOBILE-ACTIVE
* CHANGING VALUES FROM LEFT:-100% TO LEFT:0,
* MAKING MOBILE UL MENU TO APPEAR
*/
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.mobile-nav').toggleClass('mobile-active');
  });

/*FUNCTION FOR OPENING AND CLOSING NESTED UL*/
  $('ul li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });
});


