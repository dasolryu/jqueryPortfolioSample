function scrollHandler(){
	if($(window).scrollTop()>=$('.about').position().top){
		$('.menu-right button').css("color","#4A4A4A");
		$('.skill').each(function(){
			let skill = $(this);
			let percentage = skill.find('.percentage').text();
			skill.find('.inner-bar').animate({width: percentage}, 1500);
		});
	}else{
		$('.menu-right button').css("color","white");
	}

	$('section').each(function(){
		if($(window).scrollTop()>=$(this).position().top){
			$(this).find('.vertical-center').animate({top: '0', opacity: '1'}, 800);
		}
	});


}


$('.menu-right button').on('click', function(){
	let id = $(this).attr('id');
	if(id == 'about-btn'){
		$('html, body').animate({scrollTop: $('.about').position().top}, 1000);
	}else{
		$('html, body').animate({scrollTop: $('.contact').position().top}, 1000);
	}
}); 


$(document).on('scroll', scrollHandler);
scrollHandler();
