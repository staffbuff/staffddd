window.onscroll = function showHeader() {

	var header = document.querySelector ('.header');

	if(window.pageYOffset > 200) {
		header.classList.add('header_fixed');
	} else {
		header.classList.remove('header_fixed');
	}
	
}

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
        })
    });
});
$(document).ready(function(){
    $('ul.price__tabs').on('click', 'li:not(.price__tab_active)', function() {
    $(this)
      .addClass('price__tab_active').siblings().removeClass('price__tab_active')
      .closest('div.container').find('div.price-item__content').removeClass('price-item__content_active').eq($(this).index()).addClass('price-item__content_active');
  });
});
