$(document).on("scroll", window, function () {
	if (($(window).scrollTop() > 80) && ($(window).width() > 767)) {
			$('.header_menu').addClass('header--fixed');
			$('.header').addClass('header_fixed');
			document.getElementById("logo-f").style.display = "flex";
			document.getElementById("logo-n").style.display = "none";
	} else {
			$('.header_menu').removeClass('header--fixed');
			$('.header').removeClass('header_fixed');
			document.getElementById("logo-f").style.display = "none";
			document.getElementById("logo-n").style.display = "block";
	}
});

$(".navbar-nav").on("click", "a", function (event) {

    event.preventDefault();

    var id = $(this).attr('href'),

        top = $(id).offset().top;

    $('body,html').animate({
        scrollTop: top
    }, 1000);
});

// button up

var btn = $('#buttonup');

$(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
	 btn.addClass('show');
  } else {
	 btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});

// mobile-menu

$(".header_mobile_menu").on("click", function () {
		$('.header_mobile_menu--drop').toggleClass("show");
		$('.header_mobile_menu--drop').toggleClass("show");


		if ($('.header-navigation__menu').hasClass('show')) {
				$('.hamburger--spring').addClass('is-active');
		} else {
				$('.hamburger--spring').removeClass('is-active');
		}
});

$(".header_bottom--wrap_burger").on("click", function () {
		$('.nav-icon').toggleClass("open");
		$('.header').toggleClass("show");
});
$(".header_mobile ul li").on("click", function () {
		$('.header').removeClass("show");
		$('.nav-icon').removeClass("open");
});

$(".lang").on("click", function () {
		$('.lang').toggleClass("lang--visible");
});
$(".lang_count_uk").on("click", function () {
		$('.lang_count_uk').toggleClass("lang_count--visible");
		$('.lang_count_ru').removeClass("lang_count--visible");
		$('.lang_count_kz').removeClass("lang_count--visible");
});
$(".lang_count_kz").on("click", function () {
		$('.lang_count_kz').toggleClass("lang_count--visible");
		$('.lang_count_ru').removeClass("lang_count--visible");
		$('.lang_count_uk').removeClass("lang_count--visible");
});
$(".lang_count_ru").on("click", function () {
		$('.lang_count_ru').toggleClass("lang_count--visible");
		$('.lang_count_uk').removeClass("lang_count--visible");
		$('.lang_count_kz').removeClass("lang_count--visible");
});

// accordion

$(".set > .set-title").on("click", function(){
	if($(this).hasClass('active')){
		$(this).removeClass("active");
		$(this).siblings('.content').slideUp(200);
		$(".set > .set-title i").removeClass("minus").addClass("plus");
	}else{
		$(".set > .set-title i").removeClass("minus").addClass("plus");
	$(this).find("i").removeClass("plus").addClass("minus");
	$(".set > .set-title").removeClass("active");
	$(this).addClass("active");
	$('.content').slideUp(200);
	$(this).siblings('.content').slideDown(200);
	}
});

// tabs

let tab = function () {
		let tabNav = document.querySelectorAll('.tabs-nav__item'),
				tabContent = document.querySelectorAll('.tab'),
				tabName;

		tabNav.forEach(item => {
				item.addEventListener('click', selectTabNav)
		});

		function selectTabNav() {
				tabNav.forEach(item => {
						item.classList.remove('is-active');
				});
				this.classList.add('is-active');
				tabName = this.getAttribute('data-tab-name');
				selectTabContent(tabName);
		}

		function selectTabContent(tabName) {
				tabContent.forEach(item => {
						item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
				})
		}

};

tab();

// popup

$('.popupCall').hide();

$('.linkCall').click(function (e) {
    e.preventDefault();
    $('.popupCall').bPopup({
        closeClass: 'popup__close',
        amsl: 0
    })
});

// nav-links

var link1 = document.getElementById('1');
var link2 = document.getElementById('2');
var link3 = document.getElementById('3');
var link4 = document.getElementById('4');
var line1 = document.getElementById('l1');
var line2 = document.getElementById('l2');
var line3 = document.getElementById('l3');

link1.addEventListener('click', function(){
	link1.classList.add('active');
	link2.classList.remove('active');
    link3.classList.remove('active');
	link4.classList.remove('active');

});

link2.addEventListener('click', function(){
	link2.classList.add('active');

	link1.classList.remove('active');
    link3.classList.remove('active');
	link4.classList.remove('active');

});

link3.addEventListener('click', function(){
	link3.classList.add('active');
	link1.classList.remove('active');
    link2.classList.remove('active');
	link4.classList.remove('active');
});

link4.addEventListener('click', function(){
	link4.classList.add('active');
	link1.classList.remove('active');
    link2.classList.remove('active');
	link3.classList.remove('active');
});