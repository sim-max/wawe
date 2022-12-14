$('.blog-slider').slick({
	infinite: true,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
});

/*---Menu---*/
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu a')

menuBtn.addEventListener('click', function () {
	body.classList.toggle('no-scroll');
	menuList.classList.toggle('active');
	menuBtn.classList.toggle('active');

})
menuLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		menuList.classList.remove('active');
		body.classList.remove('no-scroll');
		menuBtn.classList.remove('active');
	})
})

const mixer = mixitup('.gallery__grid-list')

Fancybox.bind("[data-fancybox]", {
	// Your options go here
});

