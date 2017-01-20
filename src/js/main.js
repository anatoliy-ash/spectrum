//= ../libs/jquery/jquery2.2.3.min.js
//= ../libs/magnific-popup/jquery.magnific-popup.min.js
//= ../libs/owl-carousel/owl.carousel.min.js
//= ../libs/flexslider/jquery.flexslider-min.js
//= ../libs/bootstrap/bootstrap.min.js
//= ../libs/smoothscroll/jquery.smoothscroll.min.js
//= ../libs/jquery.validate/jquery.validate.min.js
//= ../libs/inputmask/inputmask.min.js


// Yandex maps
ymaps.ready(init);

function init(){     
	var myMap = new ymaps.Map("map", {
		center: [56.8740,60.6328],
		zoom: 16,
		controls: ['zoomControl']
	});

	myMap.behaviors.disable('scrollZoom');

	var myPlacemark = new ymaps.Placemark([56.8724,60.6342], {
			hintContent: 'Spectrum. Отопительное и обогревательное оборудование'
		},{
        iconLayout: 'default#image',
        iconImageHref: 'img/map_icon.png',
        iconImageSize: [96, 35],
        iconImageOffset: [-40, -30]
      }
    );

 	myMap.geoObjects.add(myPlacemark);
}

// preloader
// $(window).on('load', function() {
// 	// hide preloader
// 	var $preloader = $('.preloader'),
// 		 $loading = $preloader.find('.loading');

// 	$loading.fadeOut();
// 	$preloader.delay(250).fadeOut('slow');
// });


$(function() {

	// LINKS. flowing transition to link
	$(".menu a, .mobile-menu a").on("click", function(e) {
		e.preventDefault();

		var id = $(this).attr('href'),
		    top = $(id).offset().top + 120;
		$('body,html').animate({scrollTop: top}, 700);

	});

	$('.mobile-menu-btn').on('click', function() {
		$('.mobile-menu-wrap').toggleClass('active');
	});

	$('.mobile-menu a').on('click', function() {
		$('.mobile-menu-wrap').removeClass('active');
	});

	// switch interior type in 'interior' section
	$(".switch-interior").on("click", function(e) {
		e.preventDefault();
		
		if(!$(this).hasClass('active')) {
			if($(this).hasClass('houses')) {
				$('.interior-museums-carousel').fadeOut();
				$('.interior-offices-carousel').fadeOut();
				$('.interior-houses-carousel').fadeIn();
			}

			if($(this).hasClass('offices')) {
				$('.interior-houses-carousel').fadeOut();
				$('.interior-museums-carousel').fadeOut();
				$('.interior-offices-carousel').fadeIn();
			}

			if($(this).hasClass('museums')) {
				$('.interior-offices-carousel').fadeOut();
				$('.interior-houses-carousel').fadeOut();
				$('.interior-museums-carousel').fadeIn();
			}
		}
	});


	// modals 
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.popup-img').magnificPopup({
		type: 'image',
		fixedBgPos: true,
		fixedContentPos: true
	});

	$('.popup-open').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	// Masked input phone
	$("input[name='phone']").inputmask("+7(999)999-99-99");

	$('.five-reasons-carousel').owlCarousel({
		dots: true,
		nav: true,
		items: 1,
		loop: true,
		animateOut: 'fadeOut',
		mouseDrag: false,
		touchDrag: false,
		// dotsClass:
		lazyLoad: true,
		navContainerClass: 'arrow-container',
		navText: [
			'<div class="arrow-left"></div>',
			'<div class="arrow-right"></div>'
		]
	});

	// carousels
	$('.interior-houses-carousel, .interior-offices-carousel, .interior-museums-carousel, .hide-heat-carousel').owlCarousel({
		dots: true,
		nav: true,
		items: 1,
		loop: true,
		animateOut: 'fadeOut',
		mouseDrag: false,
		touchDrag: false,
		lazyLoad: true,
		navContainerClass: 'arrow-container',
		navText: [
			'<div class="arrow-left"></div>',
			'<div class="arrow-right"></div>'
		]
	});

	$('.answers-carousel, .reviews-carousel').owlCarousel({
		dots: false,
		nav: true,
		items: 1,
		animateOut: 'fadeOut',
    	// animateIn: 'fadeIn',
    	mouseDrag: false,
    	touchDrag: false,
		navText: [
			'<div class="arrow-left"></div>',
			'<div class="arrow-right"></div>'
		]
	});

	$('.partnership-carousel').owlCarousel({
		dots: false,
		nav: true,
		items: 1,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
    	mouseDrag: false,
    	touchDrag: false,
    	lazyLoad: true,
    	navContainerClass: 'arrow-container',
		navText: [
			'<div class="arrow-left"></div>',
			'<div class="arrow-right"></div>'
		]
	});

	$('.certificates-carousel').owlCarousel({
		dots: false,
		nav: true,
		items: 1,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
    	loop: true,
    	navContainer: '.certificates-carousel-nav',
    	mouseDrag: false,
    	touchDrag: false,
		navText: [
			'<div class="arrow-left"></div>',
			'<div class="arrow-right"></div>'
		]
	});

	
	// calculate carousel dots position
	// var $textWrap = $('.five-reasons .text-wrap').first(); 
	// var $offsetText = $textWrap.offset();
	// $('.five-reasons .owl-dots').offset({ top: $offsetText.top + $textWrap.outerHeight() - 40, left: $offsetText.left + 40 });


	$( window ).resize(function() {
		positioningCarouselDots($('.five-reasons'));
		positioningCarouselDots($('.hide-heat'));
		positioningCarouselDots($('.interior-houses-carousel'), true); 
		positioningCarouselDots($('.interior-offices-carousel'), true);
		positioningCarouselDots($('.interior-museums-carousel'), true);
	});
  
	


	positioningCarouselDots($('.five-reasons'));
	positioningCarouselDots($('.hide-heat'));
	positioningCarouselDots($('.interior-houses-carousel'), true); 
	positioningCarouselDots($('.interior-offices-carousel'), true);
	positioningCarouselDots($('.interior-museums-carousel'), true);

	function positioningCarouselDots(_section, _right) {

		var $textWrap = _section.find('.text-wrap').eq(2);
		var $offsetText = $textWrap.offset();

		if(_right !== undefined) {
			_section.find('.owl-dots').offset({ top: $offsetText.top + $textWrap.height() - 20, left: $offsetText.left + $textWrap.outerWidth() - _section.find('.owl-dots').width() - 30});
			return;
		}

		_section.find('.owl-dots').offset({ top: $offsetText.top + $textWrap.height(), left: $offsetText.left + 40});
	}

	// calculate carousel dots position
	// var $textWrap = $('.five-reasons .text-wrap').eq(2);
	// var $offsetText = $textWrap.offset();
	// $('.five-reasons .owl-dots').offset({ top: $offsetText.top + $textWrap.outerHeight() - 40, left: $offsetText.left + 40});
	
	// var $textWrap = $('.hide-heat .text-wrap').eq(2); 
	// var $offsetText = $textWrap.offset();
	// $('.hide-heat .owl-dots').offset({ top: $offsetText.top + $textWrap.outerHeight() - 40, left: $offsetText.left + 40});

	// calculate carousel dots position
	// var $textWrap = $('.interior .text-wrap').eq(2);
	// var $offsetText = $textWrap.offset();
	// $('.interior .owl-dots').offset({ top: $offsetText.top + $textWrap.height() - 20, left: $offsetText.left + $textWrap.outerWidth() - $('.interior .owl-dots').width() - 30});


	// change background image when user checks material
	$('.your-interior .material').on('click', function() {
		if(!$(this).hasClass('active')) {
			$('.your-interior .material').removeClass('active');
			$('.your-interior').css( "background-image", "url('" + $(this).data('bg') + "')" );
			$(this).addClass('active');
		}
	});


	// stop animation when section is 'hovered'
	$('.why-buy figure').hover(
   	function() { $(this).find('.icon').addClass('tada');},
   	function() { $(this).find('.icon').removeClass('tada');}
	);

	$('.how-we-work').hover(
   	function() { $(this).find('.icon').removeClass('swing');},
   	function() { $(this).find('.icon').addClass('swing');}
	);

	$('.alternative').hover(
   	function() { $(this).find('.video-wrap').removeClass('shake');},
   	function() { $(this).find('.video-wrap').addClass('shake');}
	);
	

	// form validate
	$('.form_request_big').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			},
			meters: {
				required: false,
				number: true
			}
		},
		messages: {
			name: {
				required: "Обязательное поле"
			},
			email: {
				required: "Обязательное полe",
				email: "Некорректный email"
			},
			phone: {
				required: "Обязательное поле"
			},
			meters: {
				required: false,
				number: "Введите число"
			},
		},

		focusCleanup: true,
		focusInvalid: false,

		submitHandler: function(form) {
			var formData = new FormData(form);
			// var currentForm = $(form);

			$.ajax({
				type: 'POST', 
				url: 'php/mail.php', 
				data: formData,
				processData: false,
				contentType: false,

				success: function(data){ 
					// open thx form
					$.magnificPopup.open({
						items: {
							src: '#thanks-modal'
						},
						type: 'inline'
					});				
				},
				error: function (xhr, ajaxOptions, thrownError) {  
					alert(xhr.status); 
					alert(thrownError); 
				}
			});

			return false; 
		}
	});

	$('.form_request').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			},
			meters: {
				required: false,
				number: true
			}
		},
		messages: {
			name: {
				required: "Обязательное поле"
			},
			email: {
				required: "Обязательное полe",
				email: "Некорректный email"
			},
			phone: {
				required: "Обязательное поле"
			},
			meters: {
				required: false,
				number: "Введите число"
			},
		},

		focusCleanup: true,
		focusInvalid: false,

		submitHandler: function(form) {
			var formData = new FormData(form);
			var currentForm = $(form);

			$.ajax({
				type: 'POST', 
				url: 'php/mail.php', 
				data: formData,
				processData: false,
				contentType: false,

				success: function(data){ 
					// open thx form
					$.magnificPopup.open({
						items: {
							src: '#thanks-modal'
						},
						type: 'inline'
					});
					
					// var targetName = currentForm.find('input[name="target_name"]').val();
					// yaCounter41146279.reachGoal(targetName);
				},
				error: function (xhr, ajaxOptions, thrownError) {  
					alert(xhr.status); 
					alert(thrownError); 
				}
			});

			return false; 
		}
	});

	$('.form_name_tel').each(function() { 

		var currentForm = $(this);

		currentForm.validate({
			rules: {
				name: {
					required: true
				},
				phone: {
					required: true
				}
			},
			messages: {
				name: {
					required: "Обязательное поле"
				},
				phone: {
					required: "Обязательное поле"
				}
			},

			focusCleanup: true,
			focusInvalid: false,

			submitHandler: function(form) {
				var formData = new FormData(form);
				// var currentForm = $(form);

				$.ajax({
					type: 'POST', 
					url: 'php/mail.php', 
					data: formData,
					processData: false,
					contentType: false,

					success: function(data){ 
						// open thx form
						$.magnificPopup.open({
							items: {
								src: '#thanks-modal'
							},
							type: 'inline'
						});
					},
					error: function (xhr, ajaxOptions, thrownError) {  
						alert(xhr.status); 
						alert(thrownError); 
					}
				});

				return false; 
			}
		})
	});
});
